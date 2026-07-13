import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
    <div className="text-sm text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

export default function ImpressumPage() {
  return (
    <PageLayout>
      <SEO title="Impressum" description="Impressum von Serviweb – Kevin Schmid, Webdesign und App-Entwicklung in der Ostschweiz." canonical="/impressum" noIndex={true} />
      <div className="relative py-20 md:py-28" style={{ background: '#070B14', minHeight: '100vh' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(59,130,246,0.06) 0%,transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Rechtliches</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-10">
              Impressum
            </h1>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'rgba(13,21,38,0.72)',
                border: '1px solid rgba(59,130,246,0.1)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <Section title="Angaben gemäss Informationspflicht">
                <p><span className="text-slate-300 font-medium">Kevin Schmid</span></p>
                <p>Serviweb</p>
                <p>Ostschweiz, Schweiz</p>
              </Section>

              <Section title="Kontakt">
                <p>
                  <span className="text-slate-500">Telefon:</span>{' '}
                  <a href="tel:+41795350603" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +41 79 535 06 03
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">E-Mail:</span>{' '}
                  <a href="mailto:info@serviweb.ch" className="text-blue-400 hover:text-blue-300 transition-colors">
                    info@serviweb.ch
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">Website:</span>{' '}
                  <a href="https://serviweb.ch" className="text-blue-400 hover:text-blue-300 transition-colors">
                    serviweb.ch
                  </a>
                </p>
              </Section>

              <Section title="Haftungsausschluss">
                <p>
                  Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
                <p>
                  Als Diensteanbieter bin ich gemäss den geltenden Gesetzen für eigene Inhalte auf dieser Website
                  verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                  zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </Section>

              <Section title="Haftung für Links">
                <p>
                  Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
                  Deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </Section>

              <Section title="Urheberrecht">
                <p>
                  Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem Schweizer Urheberrecht.
                  Jede Art der Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
                  Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung von Kevin Schmid.
                </p>
              </Section>

              <p className="text-xs text-slate-600 pt-4 border-t border-blue-500/[0.08]">
                Stand: April 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}
