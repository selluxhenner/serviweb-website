import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const Check = ({ color = '#3B82F6' }: { color?: string }) => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const SERVICES = [
  {
    id: 'website',
    label: 'Website-Entwicklung',
    tagline: 'Von der Idee zur fertigen Website',
    desc: 'Professionelle Websites, die Kunden überzeugen – responsive, schnell und suchmaschinenoptimiert. Von der einfachen Landing Page bis zur komplexen Webapp.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', glow: '0 0 30px rgba(59,130,246,0.25)',
    border: 'rgba(59,130,246,0.18)',
    tags: ['HTML / CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS'],
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    timeline: '2–4 Wochen',
    included: [
      'Responsive Design für alle Geräte',
      'Kontaktformular & Reservierungssystem',
      'Google Maps Integration',
      'Bildergalerie & Medienverwaltung',
      'SEO-Grundoptimierung',
      'Hosting-Setup & Domain-Beratung',
      'SSL-Zertifikat',
    ],
    process: [
      { step:'01', title:'Beratung', desc:'Erstes Gespräch über Ziele, Zielgruppe und Wünsche. Kostenlos und unverbindlich.' },
      { step:'02', title:'Konzept', desc:'Ich erstelle eine Struktur und erste Wireframes für die geplante Website.' },
      { step:'03', title:'Design', desc:'Visuelles Design passend zu deiner Marke – modern, klar, professionell.' },
      { step:'04', title:'Entwicklung', desc:'Umsetzung mit sauberem Code. Regelmässige Updates und Feedback-Runden.' },
      { step:'05', title:'Launch', desc:'Finales Testing, Optimierung und Go-Live. Ich begleite den Start.' },
      { step:'06', title:'Support', desc:'Auch nach dem Launch bin ich bei Fragen, Änderungen und Updates erreichbar.' },
    ],
  },
  {
    id: 'app',
    label: 'App-Entwicklung',
    tagline: 'iOS & Android aus einer Codebasis',
    desc: 'Native Mobile Apps für iOS und Android – mit React Native entwickelt für optimale Performance auf beiden Plattformen.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)', glow: '0 0 30px rgba(139,92,246,0.25)',
    border: 'rgba(139,92,246,0.18)',
    tags: ['React Native', 'Expo', 'iOS', 'Android', 'Firebase'],
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    timeline: '4–10 Wochen',
    included: [
      'iOS & Android aus einer Codebasis',
      'Benutzerkonten & Authentifizierung',
      'Push-Benachrichtigungen',
      'Offline-Funktionalität',
      'App Store & Play Store Einreichung',
      'Cloud-Backend & Datenbank',
      'Regelmässige Updates & Wartung',
    ],
    process: [
      { step:'01', title:'Konzept', desc:'Wir definieren gemeinsam die Kernfunktionen und User Flows der App.' },
      { step:'02', title:'Design', desc:'UI/UX Design für iOS und Android – native Designsprache, modernes Look & Feel.' },
      { step:'03', title:'Entwicklung', desc:'React Native Entwicklung mit iterativen Sprints und regelmässigem Feedback.' },
      { step:'04', title:'Testing', desc:'Umfangreiche Tests auf echten Geräten und verschiedenen OS-Versionen.' },
      { step:'05', title:'Store-Einreichung', desc:'Ich übernehme den gesamten Einreichungsprozess für App Store und Play Store.' },
      { step:'06', title:'Launch & Pflege', desc:'Begleitung beim Launch und laufende Wartung mit regelmässigen Updates.' },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Social Media',
    tagline: 'Gefunden werden, Kunden gewinnen',
    desc: 'Technische Optimierung für bessere Auffindbarkeit in Suchmaschinen und professioneller Social Media Aufritt.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    color: '#06B6D4', bg: 'rgba(6,182,212,0.1)', glow: '0 0 30px rgba(6,182,212,0.2)',
    border: 'rgba(6,182,212,0.16)',
    tags: ['Google My Business', 'Meta Tags', 'Analytics', 'Sitemap'],
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    timeline: '1–2 Wochen Setup',
    included: [
      'Google My Business Einrichtung',
      'Meta-Tags & Open Graph Optimierung',
      'Sitemap & robots.txt',
      'Google Analytics / Search Console',
      'Pagespeed Optimierung',
      'Lokale SEO für Ostschweiz',
    ],
    process: [
      { step:'01', title:'Analyse', desc:'Aktuellen Stand analysieren: Was ist gut? Was fehlt? Wo sind die grössten Hebel?' },
      { step:'02', title:'Technische Optimierung', desc:'Meta-Tags, Ladezeiten, mobile Optimierung und strukturierte Daten.' },
      { step:'03', title:'Lokales SEO', desc:'Google My Business, lokale Keywords und Einträge für die Ostschweiz.' },
      { step:'04', title:'Monitoring', desc:'Einrichten von Analytics Tools für langfristiges Tracking und Verbesserungen.' },
    ],
  },
  {
    id: 'fotografie',
    label: 'Fotografie',
    tagline: 'Professionelle Bilder für deinen Auftritt',
    desc: 'Hochwertige Fotos für Website, Social Media und Marketing – damit dein Online-Auftritt einen starken ersten Eindruck macht.',
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    color: '#10B981', bg: 'rgba(16,185,129,0.1)', glow: '0 0 30px rgba(16,185,129,0.2)',
    border: 'rgba(16,185,129,0.16)',
    tags: ['Produktfotografie', 'Teamfotos', 'Interieur', 'Social Media'],
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    timeline: '1–3 Tage',
    included: [
      'Professionelles Shooting vor Ort',
      'Vollständige Bildbearbeitung',
      'Optimierte Versionen für Web & Social',
      'Druckfähige Originaldateien',
      'Unbegrenzte Lizenz zur Nutzung',
    ],
    process: [
      { step:'01', title:'Terminplanung', desc:'Gemeinsame Planung des Shootings – Standort, Timing, Was soll fotografiert werden?' },
      { step:'02', title:'Shooting', desc:'Professionelles Shooting vor Ort – Produkte, Team, Innenräume, Atmosphäre.' },
      { step:'03', title:'Bearbeitung', desc:'Professionelle Nachbearbeitung für optimale Qualität.' },
      { step:'04', title:'Lieferung', desc:'Fertige Bilder als Download in allen benötigten Formaten und Auflösungen.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <SEO
        title="Leistungen – Webdesign, Apps & SEO Ostschweiz"
        description="Webdesign, App-Entwicklung mit React & Next.js, SEO und Fotografie für Unternehmen in St. Gallen und der Ostschweiz. Massgeschneiderte Lösungen von Kevin Schmid – persönlich und fair."
        canonical="/leistungen"
        keywords="Webdesign St. Gallen, Webagentur Ostschweiz, App Entwicklung Ostschweiz, SEO Ostschweiz, React Webentwicklung Schweiz, Next.js Agentur Schweiz, Fotografie Unternehmen Ostschweiz"
        breadcrumbs={[{ name: 'Leistungen', url: '/leistungen' }]}
      />
      <Breadcrumbs items={[{ name: 'Leistungen', url: '/leistungen' }]} />
      <div className="relative">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ background:'#070B14' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2  h-[400px] pointer-events-none"
            style={{ background:'radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)', filter:'blur(60px)' }} />
          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
              className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Was ich anbiete</p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
                Meine{' '}
                <span style={{ background:'linear-gradient(135deg,#93C5FD 0%,#A78BFA 100%)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Leistungen
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                Von der Website bis zur App – ich begleite dich durch den gesamten Prozess, persönlich und direkt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────────── */}
        {SERVICES.map((s, i) => (
          <section key={s.id} id={s.id}
            className="py-20 md:py-28 relative"
            style={{ background: i % 2 === 0 ? '#07101E' : '#070B14' }}>
            <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} h-[400px] pointer-events-none`}
              style={{ background:`radial-gradient(ellipse,${s.color}08 0%,transparent 70%)`, filter:'blur(60px)' }} />

            <div className="relative max-w-6xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Left: Header + description + included */}
                <motion.div initial={{ opacity:0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:'-60px' }}
                  transition={{ duration:0.7 }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background:s.bg, boxShadow:s.glow }}>
                      <svg className="w-6 h-6" style={{ color:s.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider" style={{ color:s.color }}>{s.tagline}</div>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{s.label}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tags.map(t => (
                      <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${s.tagColor}`}>{t}</span>
                    ))}
                  </div>

                  <div className="rounded-2xl p-6 mb-6"
                    style={{ background:'rgba(13,21,38,0.76)', border:`1px solid ${s.border}` }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color:s.color }}>Inbegriffen</p>
                    <ul className="space-y-2.5">
                      {s.included.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check color={s.color} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4" style={{ color:s.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lieferzeit: <strong className="text-white">{s.timeline}</strong></span>
                    </div>
                    <Link to="/kontakt">
                      <motion.span whileHover={{ y:-1 }} whileTap={{ scale:0.97 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
                        style={{ color:s.color, display:'inline-flex' }}>
                        Anfragen <Arrow />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>

                {/* Right: Process steps */}
                <motion.div initial={{ opacity:0, x: i % 2 === 0 ? 24 : -24 }}
                  whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:'-60px' }}
                  transition={{ duration:0.7, delay:0.1 }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color:s.color }}>So läuft es ab</p>
                  <div className="space-y-4">
                    {s.process.map((step, si) => (
                      <motion.div key={step.step}
                        initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }}
                        viewport={{ once:true, margin:'-30px' }}
                        transition={{ duration:0.5, delay: si * 0.08 }}
                        className="flex gap-4 rounded-2xl p-5"
                        style={{ background:'rgba(13,21,38,0.6)', border:`1px solid ${s.border}` }}>
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black"
                          style={{ background:s.bg, color:s.color }}>{step.step}</div>
                        <div>
                          <p className="font-bold text-white text-sm mb-1">{step.title}</p>
                          <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* ── Pricing CTA ───────────────────────────────────────────────── */}
        <section className="py-20" style={{ background:'#07101E' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7 }}>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Preise & Pakete</h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
                Transparente Preise ohne versteckte Kosten. Pakete ab CHF 890.–
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#preise">
                  <motion.span whileHover={{ y:-2 }} whileTap={{ scale:0.97 }}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 cursor-pointer"
                    style={{ border:'1px solid rgba(59,130,246,0.3)', background:'rgba(59,130,246,0.08)', display:'inline-flex' }}>
                    Preise ansehen <Arrow />
                  </motion.span>
                </Link>
                <Link to="/kontakt">
                  <motion.span whileHover={{ y:-2 }} whileTap={{ scale:0.97 }}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white cursor-pointer"
                    style={{ background:'linear-gradient(135deg,#2563EB,#3B82F6)', boxShadow:'0 4px 20px rgba(37,99,235,0.4)', display:'inline-flex' }}>
                    Direkt anfragen <Arrow />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}
