// Static-site generation: renders every public route to real HTML in dist/.
// Runs after `vite build` (client) + `vite build --ssr` (server bundle).
// Crawlers — and browsers before JS loads — get full content, headings,
// meta tags and JSON-LD; the client bundle then hydrates on top (main.tsx).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = path.resolve('dist')
const SERVER_DIR = path.resolve('dist-server')

const template = readFileSync(path.join(DIST, 'index.html'), 'utf8')
const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(SERVER_DIR, 'entry-server.js')).href
)

for (const route of PRERENDER_ROUTES) {
  const { html, helmet } = render(route)

  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n  ')

  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outFile =
    route === '/'
      ? path.join(DIST, 'index.html')
      : route === '/404'
        ? path.join(DIST, '404.html') // flat file so nginx `error_page 404 /404.html` finds it
        : path.join(DIST, ...route.slice(1).split('/'), 'index.html')

  mkdirSync(path.dirname(outFile), { recursive: true })
  writeFileSync(outFile, page)

  const bytes = Buffer.byteLength(page)
  console.log(`prerendered ${route.padEnd(28)} → ${path.relative(DIST, outFile)} (${(bytes / 1024).toFixed(1)} kB)`)
}

// The server bundle is only needed during this step — keep dist/ deployable.
rmSync(SERVER_DIR, { recursive: true, force: true })
console.log(`\n✓ ${PRERENDER_ROUTES.length} routes prerendered into dist/`)
