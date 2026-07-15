import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold mb-3" style={{ color: '#1E3A8A' }}>{title}</h2>
    <div className="text-sm leading-relaxed space-y-2" style={{ color: '#64748B' }}>{children}</div>
  </div>
)

export default function DatenschutzPage() {
  return (
    <PageLayout>
      <SEO title="Datenschutz" description="Datenschutzerklärung von Serviweb – Kevin Schmid, Webdesign und App-Entwicklung in der Ostschweiz." canonical="/datenschutz" noIndex={true} />
      <div className="relative py-20 md:py-28" style={{ background: '#FFFFFF', minHeight: '100vh' }}>

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Rechtliches</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-10" style={{ color: '#1E3A8A' }}>
              Datenschutz&shy;erklärung
            </h1>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
              }}
            >
              <Section title="1. Verantwortlicher">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  <span className="font-medium" style={{ color: '#0F172A' }}>Kevin Schmid</span><br />
                  Serviweb<br />
                  Ostschweiz, Schweiz<br />
                  E-Mail:{' '}
                  <a href="mailto:info@serviweb.ch" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@serviweb.ch
                  </a>
                </p>
              </Section>

              <Section title="2. Erhebung und Verarbeitung von Daten">
                <p>
                  Diese Website erhebt und verarbeitet personenbezogene Daten nur im Rahmen der
                  gesetzlichen Bestimmungen (DSG, DSGVO). Beim Besuch dieser Website werden
                  automatisch technische Daten wie IP-Adresse, Browsertyp, Betriebssystem und
                  Zugriffszeiten temporär in Server-Logfiles gespeichert.
                </p>
                <p>
                  Diese Daten dienen ausschliesslich der Sicherstellung eines störungsfreien Betriebs
                  der Website und werden nicht mit anderen Datenquellen zusammengeführt.
                </p>
              </Section>

              <Section title="3. Kontaktformular und E-Mail">
                <p>
                  Wenn Sie über das Kontaktformular oder per E-Mail Kontakt aufnehmen, werden Ihre
                  Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
                  Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
                </p>
              </Section>

              <Section title="4. Cookies">
                <p>
                  Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der
                  Website erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies
                  eingesetzt. Sie können die Speicherung von Cookies in Ihren Browsereinstellungen
                  deaktivieren.
                </p>
              </Section>

              <Section title="5. Hosting">
                <p>
                  Diese Website wird bei einem Schweizer bzw. europäischen Hosting-Anbieter betrieben.
                  Der Hosting-Anbieter verarbeitet Verbindungsdaten (IP-Adresse, Zugriffszeiten) im
                  Auftrag und nach Weisung des Verantwortlichen.
                </p>
              </Section>

              <Section title="6. Externe Links">
                <p>
                  Diese Website kann Links zu externen Websites enthalten. Für den Datenschutz auf
                  diesen Seiten sind die jeweiligen Betreiber verantwortlich.
                </p>
              </Section>

              <Section title="7. Ihre Rechte">
                <p>
                  Nach dem Schweizer Datenschutzgesetz (DSG) und der DSGVO haben Sie folgende Rechte:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Auskunft über gespeicherte Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten (soweit keine gesetzliche Aufbewahrungspflicht besteht)</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                  <a href="mailto:info@serviweb.ch" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@serviweb.ch
                  </a>
                </p>
              </Section>

              <Section title="8. Änderungen dieser Datenschutzerklärung">
                <p>
                  Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Die jeweils aktuelle
                  Version ist auf dieser Seite abrufbar.
                </p>
              </Section>

              <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
                Stand: April 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}
