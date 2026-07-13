import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 1, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }

const Check = () => (
  <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)


export default function VocafyPage() {
  return (
    <PageLayout>
      <SEO
        title="Vocafy – KI Vokabel-App entwickelt in St. Gallen"
        description="Vocafy ist eine KI-gestützte Sprachlern-App, entwickelt von Kevin Schmid (Serviweb) in der Ostschweiz. Vokabeln lernen mit künstlicher Intelligenz – smart, schnell und effektiv."
        canonical="/projekte/vocafy"
        keywords="Vocafy App, KI Vokabel App, Sprachlern App Schweiz, App Entwicklung St. Gallen, React Native App Ostschweiz, vocafy.ch"
      />
      <div className="relative">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{ background: '#070B14' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-100px] left-[-100px]  h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.18) 0%,transparent 70%)', filter: 'blur(80px)' }} />
            <div className="absolute top-[50px] right-[-80px]  h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)', filter: 'blur(80px)' }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="flex-1">
                <Link to="/projekte" className="inline-flex pr-6 items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  Zurück zu Projekten
                </Link>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#93C5FD' }}>
                  Eigene App · Web & Mobile
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                  Voca<span style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>fy</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
                  Interaktive Lernplattform zum Erstellen, Verwalten und Üben von Vokabeln – mit Benutzerkonten, Fortschrittsverfolgung und eigenem Learning-Algorithmus.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://vocafy.ch" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-blue-400 cursor-pointer transition-colors duration-200"
                    style={{ border: '1px solid rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                    </svg>vocafy.ch
                  </a>
                  <a href="https://app.vocafy.ch" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-blue-400 cursor-pointer transition-colors duration-200"
                    style={{ border: '1px solid rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                    </svg>app.vocafy.ch
                  </a>
                </div>
              </motion.div>

              {/* App icon mockup */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }} className="flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-[2rem] md:rounded-[2.8rem] flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-2xl"
                  style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', boxShadow: '0 0 0 1px rgba(139,92,246,0.3), 0 32px 80px rgba(59,130,246,0.4)' }}>
                  VO
                </div>
              </motion.div>
            </div>

            {/* Tech stack */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 mt-12">
              {['Node.js', 'Html', 'React', 'MySQL'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-xl text-xs font-medium"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#93C5FD' }}>{t}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── vocafy.ch – Landing Site ──────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ background: '#07101E' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center"
                  style={{ boxShadow: '0 0 16px rgba(59,130,246,0.3)' }}>
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                </div>
                <span className="text-blue-400 font-semibold text-sm">vocafy.ch</span>
                <a href="https://vocafy.ch" target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-slate-600 hover:text-slate-400 flex items-center gap-1 transition-colors cursor-pointer">
                  Besuchen <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Die Marketing-Website</h2>
              <p className="text-slate-400 max-w-xl leading-relaxed">
                Die Landing Page stellt Vocafy vor – Features, Preise und ein direkter Einstieg in die Lernplattform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Klare Value Proposition', desc: 'Besucher verstehen sofort, was Vocafy kann und warum es besser ist als Karteikarten.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Feature Showcase', desc: 'Interaktive Demo-Bereiche zeigen die Kernfunktionen der Lernplattform direkt auf der Landing Page.', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.882v6.235a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' },
                { title: 'Direkter App-Zugang', desc: 'Ein-Klick-Registrierung führt direkt in die Web-App unter app.vocafy.ch.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Responsive Design', desc: 'Optimiert für alle Bildschirmgrössen – vom Smartphone bis zum Desktop-Browser.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
              ].map(f => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
                  className="rounded-2xl p-6 flex gap-4"
                  style={{ background: 'rgba(13,21,38,0.76)', border: '1px solid rgba(59,130,246,0.1)' }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/12 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: '0 0 16px rgba(59,130,246,0.25)' }}>
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── app.vocafy.ch – Web App Insights ──────────────────────────── */}
        <section className="py-20 md:py-28" style={{ background: '#070B14' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  style={{ boxShadow: '0 0 16px rgba(139,92,246,0.3)' }}>
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-violet-400 font-semibold text-sm">app.vocafy.ch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Die Lernplattform</h2>
              <p className="text-slate-400 max-w-xl leading-relaxed">
                Das Herzstück von Vocafy – hier lernen Nutzer ihre Vokabeln mit smarten Algorithmen und Fortschrittsverfolgung.
              </p>
            </motion.div>

            {/* Stats mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: '1,240+', label: 'Vokabeln gelernt', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)' },
                { value: '48', label: 'Vokabel-Sets', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)' },
                { value: '32 Tage', label: 'Längster Streak', color: '#06B6D4', bg: 'rgba(6,182,212,0.1)' },
                { value: '96%', label: 'Erfolgsquote', color: '#10B981', bg: 'rgba(16,185,129,0.1)' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-5 text-center"
                  style={{ background: s.bg, border: `1px solid ${s.color}22` }}>
                  <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Feature list */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
              {[
                { title: 'Vokabeln erstellen & verwalten', desc: 'Erstelle eigene Sets oder importiere bestehende Listen. Kategorisierung, Tags und Suche inklusive.' },
                { title: 'Flashcard-Modus', desc: 'Klassisches Karteikarten-Lernen mit Selbstbewertung und intelligentem Wiederholungsalgorithmus (Spaced Repetition).' },
                { title: 'Fortschrittsverfolgung', desc: 'Detaillierte Statistiken zeigen Lernfortschritt, Schwachstellen und Streaks über Zeit.' },
                { title: 'Benutzerkonten & Sync', desc: 'Sicherer Login, Daten werden in der Cloud gespeichert und auf allen Geräten synchronisiert.' },
                { title: 'iOS & Android App', desc: 'Native App-Experience via React Native – gleicher Lernstand auf allen Geräten.' },
                { title: 'Offline-Modus', desc: 'Auch ohne Internetverbindung lernen – Änderungen werden beim nächsten Sync übertragen.' },
              ].map(f => (
                <motion.div key={f.title} variants={fadeUp}
                  className="flex gap-3 p-5 rounded-2xl"
                  style={{ background: 'rgba(13,21,38,0.76)', border: '1px solid rgba(139,92,246,0.1)' }}>
                  <Check />
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16" style={{ background: '#07101E' }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-slate-400 mb-4">Ähnliche App oder Plattform aufbauen?</p>
              <Link to="/kontakt">
                <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white cursor-pointer"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#3B82F6)', boxShadow: '0 4px 24px rgba(37,99,235,0.4)', display: 'inline-flex' }}>
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
