import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'

// The bundle is alive: cancel index.html's white-page safety net (and undo it
// if a slow connection let it fire), so Framer Motion owns the styles again.
clearTimeout((window as unknown as { __swFallbackTimer?: number }).__swFallbackTimer)
document.documentElement.classList.remove('js-fallback')

const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// If the HTML was pre-rendered at build time (npm run build), hydrate the
// existing markup; otherwise mount a fresh SPA (dev server). Safe in both cases.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
