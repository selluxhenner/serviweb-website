// Build-time prerender entry (SSG). Built with `vite build --ssr` and invoked
// by scripts/prerender.mjs to bake every public route's HTML — headings, copy,
// meta tags and JSON-LD — into dist/, so crawlers get full content without JS.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import App from './App'
import { LOCATIONS } from './data/locations'

/** Every route that gets its own prerendered index.html. */
export const PRERENDER_ROUTES: string[] = [
  '/',
  '/leistungen',
  ...LOCATIONS.map((l) => l.slug),
  '/projekte',
  '/projekte/vocafy',
  '/projekte/school-companion',
  '/projekte/daily-goals',
  '/kontakt',
  '/impressum',
  '/datenschutz',
]

export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
  return { html, helmet: helmetContext.helmet! }
}
