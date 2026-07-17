import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <PageLayout>
      <SEO
        title="Seite nicht gefunden (404)"
        description="Diese Seite existiert nicht mehr oder die Adresse wurde falsch eingegeben."
        noIndex={true}
      />
      <div className="relative py-20 md:py-28" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Fehler 404</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6" style={{ color: '#1E3A8A' }}>
              Seite nicht <span style={{ color: '#2563EB' }}>gefunden</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#64748B' }}>
              Diese Seite existiert nicht mehr oder die Adresse wurde falsch eingegeben.
              Vielleicht hilft dir einer dieser Links weiter:
            </p>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: '#F1F5F9', border: '1px solid #E2E8F0' }}
            >
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>
                  <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    Zur Startseite
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    Leistungen – Webdesign, Apps &amp; SEO
                  </Link>
                </li>
                <li>
                  <Link to="/projekte" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    Projekte &amp; Referenzen
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    Kontakt aufnehmen
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}
