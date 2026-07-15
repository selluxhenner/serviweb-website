import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }

const Check = () => (
  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

function StoreBadge({ store }: { store: 'ios' | 'android' }) {
  const isIos = store === 'ios'
  const appStoreUrl = "https://apps.apple.com/ch/app/school-companion-production/id6760979206";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=app.school_companion";

return (
  <a
    href={isIos ? appStoreUrl : googlePlayUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2.5 px-5 py-3 rounded-xl cursor-pointer"
    style={{ background: '#0F172A', border: '1px solid #0F172A', textDecoration: 'none' }}
  >
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      {isIos
        ? <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        : <path d="M3.18 23.76c.4.22.87.22 1.27 0l9.9-5.62v-3.5L3.18 23.76zM21.83 10.5c-.4-.22-.87-.22-1.27 0l-1.38.8-3.51 2L21.83 10.5zM3.18.24C2.78.46 2.5.88 2.5 1.34v21.32c0 .46.28.88.68 1.1l11.17-11.88L3.18.24zm17.38 9.16l-2.16-1.23-3.17-1.8L3.95.04l-.77-.04 13.23 11.89 4-2.23z"/>}
    </svg>
    <div>
      <p className="text-[10px] text-white/60 font-medium leading-none mb-0.5">{isIos ? 'Download on the' : 'Get it on'}</p>
      <p className="text-sm font-bold text-white leading-none">{isIos ? 'App Store' : 'Google Play'}</p>
    </div>
  </a>
);
}

const FEATURES = [
  { icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', title:'Hausaufgaben-Manager', desc:'Erfasse, verwalte und hake Hausaufgaben ab. Fälligkeitsdaten, Prioritäten und Fachzuordnung inklusive.' },
  { icon:'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title:'Stundenplan', desc:'Wöchentlicher Stundenplan mit Fächern, Lehrpersonen und Raumangaben – immer griffbereit.' },
  { icon:'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title:'Noten-Tracking', desc:'Behalte den Überblick über alle Noten und berechne automatisch deinen Notendurchschnitt.' },
  { icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', title:'Notizen & Mitschriften', desc:'Strukturierte Notizen pro Fach und Datum. Formatierte Texte, Listen und wichtige Markierungen.' },
  { icon:'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', title:'Erinnerungen', desc:'Push-Benachrichtigungen für Hausaufgaben-Deadlines, Prüfungen und wichtige Termine.' },
  { icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title:'Cloud-Sync', desc:'Alle Daten werden sicher in der Cloud gespeichert und automatisch zwischen iPhone, iPad und Android synchronisiert.' },
]

export default function SchoolCompanionPage() {
  return (
    <PageLayout>
      <SEO
        title="School Companion – Schüler-App aus der Ostschweiz"
        description="School Companion ist eine App für Schülerinnen und Schüler – Stundenplan, Hausaufgaben, Noten und Prüfungen immer im Griff. Entwickelt von Kevin Schmid (Serviweb) in St. Gallen."
        canonical="/projekte/school-companion"
        keywords="School Companion App, Schüler App Schweiz, Hausaufgaben App, Stundenplan App, App Entwicklung St. Gallen, Bildungs-App Ostschweiz"
      />
      <div className="relative">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{ background:'#FFFFFF' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-80px] left-[-80px] h-[500px] w-[500px] rounded-full"
              style={{ background:'radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 70%)', filter:'blur(80px)' }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <Link to="/projekte" className="inline-flex items-center gap-2 text-sm transition-colors mb-8 cursor-pointer hover:opacity-80" style={{ color: '#64748B' }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Zurück zu Projekten
            </Link>

            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8 }}
                className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
                  style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.3)', color:'#047857' }}>
                  Eigene App · iOS & Android
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  <span className="block mb-2" style={{ color: '#1E3A8A' }}>School</span>
                  <span className="block" style={{ color: '#10B981' }}>
                    Companion
                  </span>
                </h1>
                <p className="text-xl leading-relaxed mb-8 max-w-lg" style={{ color: '#64748B' }}>
                  Die umfassende Schul-App für Schüler: Hausaufgaben, Stundenplan, Noten und Notizen – alles an einem Ort, immer synchronisiert.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <StoreBadge store="ios" />
                  <StoreBadge store="android" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React Native','Expo','Cloud-Sync','Push-Notifications','Offline-Modus'].map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-xl text-xs font-medium"
                      style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.25)', color:'#047857' }}>{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* App mockup */}
              <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.8, delay:0.2 }} className="flex-shrink-0">
                {/* Phone mockup */}
                <div className="relative w-52 sm:w-60 rounded-[2rem] p-1.5"
                  style={{ background:'#F1F5F9', border:'1px solid #E2E8F0', boxShadow:'0 24px 60px rgba(15,23,42,0.12)' }}>
                  <div className="rounded-[1.6rem] overflow-hidden" style={{ background:'#FFFFFF', border:'1px solid #E2E8F0' }}>
                    <img src="/app/home.jpeg" alt="School Companion App – Startbildschirm mit aktueller Lektion und Wochenplan"
                      className="w-full h-auto block" loading="eager" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ background:'#F1F5F9' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:'-60px' }} transition={{ duration:0.7 }} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: '#1E3A8A' }}>Was die App kann</h2>
              <p className="max-w-xl" style={{ color: '#64748B' }}>Alle Funktionen, die Schüler im Alltag wirklich brauchen.</p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-40px' }}>
              {FEATURES.map(f => (
                <motion.div key={f.title} variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{ background:'#FFFFFF', border:'1px solid #E2E8F0' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background:'rgba(16,185,129,0.1)' }}>
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Included ──────────────────────────────────────────────────── */}
        <section className="py-16" style={{ background:'#FFFFFF' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6 }}
              className="rounded-3xl p-8 md:p-12"
              style={{ background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.25)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#1E3A8A' }}>Kostenlos im Store</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: '#64748B' }}>
                    School Companion ist kostenlos im App Store und Google Play Store erhältlich. Einfach runterladen, Account erstellen, loslegen.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <StoreBadge store="ios" />
                    <StoreBadge store="android" />
                  </div>
                </div>
                <div className="space-y-3">
                  {['Kostenlos herunterladen','Kein Abo, keine versteckten Kosten','Alle Kernfunktionen kostenlos','Automatische Updates','Datenschutz nach Schweizer Standard'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <Check />
                      <span className="text-sm font-medium" style={{ color: '#0F172A' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}
              className="text-center mt-12">
              <p className="mb-4 text-sm" style={{ color: '#64748B' }}>Ähnliche App aufbauen?</p>
              <Link to="/kontakt">
                <motion.span whileHover={{ y:-2 }} whileTap={{ scale:0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white cursor-pointer"
                  style={{ background:'#2563EB', boxShadow:'0 4px 16px rgba(37,99,235,0.25)', display:'inline-flex' }}>
                  Projekt starten
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}
