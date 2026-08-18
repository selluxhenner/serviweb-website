// Verifies every showcase URL referenced on /projekte is actually serving a
// real site. Run before publishing changes to the project lists:
//   npm run check:links
//
// Flags two failure modes that both look broken to a visitor:
//   DOWN       — DNS failure, connection refused or an HTTP error (502 …)
//   IM AUFBAU  — reachable, but still the "Diese Seite wird gerade erstellt
//                von ServiWeb" placeholder
// Deliberately NOT part of `npm run build`: a flaky network should not be able
// to break a deploy.
import { readFileSync } from 'node:fs'

const SOURCES = ['src/pages/ProjectsPage.tsx', 'src/components/Projects.tsx']
const PLACEHOLDER = /im aufbau|wird gerade erstellt/i

const urls = new Set()
for (const file of SOURCES) {
  const src = readFileSync(file, 'utf8')
  for (const m of src.matchAll(/url:\s*'([^']+\.[a-z]{2,})'/g)) urls.add(m[1])
}

const check = async (host) => {
  const url = `https://${host}`
  try {
    const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) })
    if (!res.ok) return { host, state: 'DOWN', detail: `HTTP ${res.status}` }
    const body = await res.text()
    if (PLACEHOLDER.test(body)) return { host, state: 'IM AUFBAU', detail: 'placeholder page' }
    const title = body.match(/<title[^>]*>([^<]*)/)?.[1]?.trim() ?? ''
    return { host, state: 'LIVE', detail: title.slice(0, 50) }
  } catch (err) {
    return { host, state: 'DOWN', detail: err.cause?.code ?? err.name }
  }
}

const results = await Promise.all([...urls].sort().map(check))
for (const r of results) {
  const mark = r.state === 'LIVE' ? '✓' : '✗'
  console.log(`${mark} ${r.state.padEnd(9)} ${r.host.padEnd(34)} ${r.detail}`)
}

const broken = results.filter((r) => r.state !== 'LIVE')
console.log(`\n${results.length - broken.length}/${results.length} live`)
if (broken.length) {
  console.error(`\nRemove or fix these before deploying:\n${broken.map((b) => `  - ${b.host} (${b.state})`).join('\n')}`)
  process.exit(1)
}
