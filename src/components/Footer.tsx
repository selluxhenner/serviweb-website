import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Startseite', to: '/' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Projekte',   to: '/projekte' },
  { label: 'Kontakt',    to: '/kontakt' },
]

// Keyword-anchored internal links to the location landing pages (local SEO).
const REGION_LINKS = [
  { label: 'Webdesign Ostschweiz', to: '/webdesign-ostschweiz' },
  { label: 'Webdesign Wil',        to: '/webdesign-wil' },
  { label: 'Webdesign Toggenburg', to: '/webdesign-toggenburg' },
  { label: 'Webdesign Thurgau',    to: '/webdesign-thurgau' },
  { label: 'Alle Leistungen',      to: '/leistungen' },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: '#1E3A8A' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5" aria-label="Serviweb Startseite">
              <img src="/symbol-mark.png" alt="" aria-hidden="true" className="h-7 w-auto" />
              <img src="/logo-large-white.png" alt="Serviweb" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-blue-100/80 leading-relaxed">
              Webdesign &amp; Webagentur aus der Ostschweiz – moderne Websites und Apps für lokale Unternehmen.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <p className="text-xs font-semibold tracking-widest text-blue-200/70 uppercase mb-5">Navigation</p>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Regions */}
          <nav aria-label="Regionen">
            <p className="text-xs font-semibold tracking-widest text-blue-200/70 uppercase mb-5">Regionen</p>
            <ul className="space-y-3" role="list">
              {REGION_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-200/70 uppercase mb-5">Kontakt</p>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-2.5 text-sm text-blue-100/80">
                <svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ostschweiz, Schweiz
              </li>
              <li>
                <a
                  href="tel:+41795350603"
                  className="flex items-center gap-2.5 text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +41 79 535 06 03
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@serviweb.ch"
                  className="flex items-center gap-2.5 text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@serviweb.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60"
          style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}
        >
          <p>© {new Date().getFullYear()} Serviweb · Kevin Schmid. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-5">
            <Link to="/impressum" className="hover:text-white transition-colors cursor-pointer">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors cursor-pointer">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
