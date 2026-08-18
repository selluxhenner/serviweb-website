import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
  Variants,
} from 'framer-motion'

// ── Image imports ──────────────────────────────────────────────────────────────
import tigerImg      from '../assets/images/projects/tiger.jpg'
import happytunesImg from '../assets/images/projects/happytunes.jpg'
import visionWilImg  from '../assets/images/projects/vision-wil.jpg'
import skiserviceImg from '../assets/images/projects/skiservice-joel.jpg'

import vocafyImg     from '../assets/images/social/vocafy.png'
import schoolImg     from '../assets/images/social/school-companion.png'
import dailyGoalsImg from '../assets/images/social/daily-goals.png'
import kantiImg      from '../assets/images/social/kanti-companion.png'

// ── Spotlight card ────────────────────────────────────────────────────────────

function SpotlightCard({ children, href, to, className, style, onClick }: {
  children: React.ReactNode
  href?: string
  to?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, rgba(37,99,235,0.06), transparent 70%)`

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }
  const onLeave = () => { mx.set(-300); my.set(-300) }

  const inner = (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden ${className ?? ''}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(15,23,42,0.1)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{ background: spotlight }}
      />
    </motion.div>
  )

  if (to) return <Link to={to} className="block cursor-pointer">{inner}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">{inner}</a>
  return <div onClick={onClick} className={onClick ? 'cursor-pointer' : undefined}>{inner}</div>
}

// ── Data ──────────────────────────────────────────────────────────────────────

const WEBSITES = [
  {
    name: 'Tiger Wil', subtitle: 'Thai Restaurant in Wil', url: 'tiger-wil.ch',
    desc: 'Moderne Website mit umfassendem Menü, Galerie und Reservierungsfunktion.',
    features: ['Menü-Übersicht', 'Bildergalerie', 'Öffnungszeiten', 'Kontakt & Standort'],
    category: 'Restaurant', image: tigerImg,
  },
  {
    name: 'DJ Happy Tunes', subtitle: 'DJ & Entertainment', url: 'djhappytunes.com',
    desc: 'Dynamische Portfolio-Website für DJ mit Musikproben, Event-Historie und Buchungsanfrage.',
    features: ['Portfolio', 'Musikproben', 'Event-Liste', 'Buchungsformular'],
    category: 'Entertainment', image: happytunesImg,
  },
  {
    name: 'VISION KUNST CAFÉBAR', subtitle: 'Urban Bar & Event – Wil', url: 'vision-wil.ch',
    desc: 'Premium-Cocktails, Barista-Kaffee und Industrial-Art-Atmosphäre vereint in einem modernen Webauftritt.',
    features: ['Galerie', 'Event-Kalender', 'Kontaktformular', 'Social Media Integration'],
    category: 'Café & Bar', image: visionWilImg,
  },
  {
    name: 'Ski Service Joel', subtitle: 'Skiservice in Wil', url: 'skiservice-joel.ch',
    desc: 'Professionelle Skiservice-Website mit Terminplanung, Service-Übersicht und Kontaktformular.',
    features: ['Terminplanung', 'Service-Übersicht', 'Kontaktformular', 'Responsive Design'],
    category: 'Service', image: skiserviceImg,
  },
]

const APPS: {
  name: string; subtitle: string; url: string | null; desc: string
  tags: string[]; image: string; initBg: string
  store: { ios: boolean; android: boolean; comingSoon: boolean }
  detailPath: string | null
}[] = [
  {
    name: 'Kanti Companion', subtitle: 'Begleit-App für Kantischüler', url: null,
    desc: 'Begleit-App für Kantischüler mit Stundenplan, Noten-Tracking und organisatorischen Tools.',
    tags: ['React Native', 'Offline-Modus', 'Kalender', 'Benachrichtigungen'],
    image: kantiImg, initBg: 'linear-gradient(135deg,#EAB308,#F97316)',
    store: { ios: false, android: false, comingSoon: false },
    detailPath: null,
  },
  {
    name: 'School Companion', subtitle: 'Umfassende Schul-App', url: null,
    desc: 'Umfassende Schul-App mit Hausaufgabenverwaltung, Notizen und Stundenplänen.',
    tags: ['React Native', 'Cloud-Sync', 'Aufgaben-Manager', 'Kalender'],
    image: schoolImg, initBg: 'linear-gradient(135deg,#10B981,#06B6D4)',
    store: { ios: true, android: true, comingSoon: false },
    detailPath: '/projekte/school-companion',
  },
  {
    name: 'Daily Goals', subtitle: 'Motivations-App', url: null,
    desc: 'Motivations-App zum Setzen und Verfolgen von täglichen Zielen und Gewohnheiten.',
    tags: ['React Native', 'Gewohnheits-Tracking', 'Statistiken'],
    image: dailyGoalsImg, initBg: 'linear-gradient(135deg,#EC4899,#8B5CF6)',
    store: { ios: false, android: false, comingSoon: true },
    detailPath: '/projekte/daily-goals',
  },
]

// ── Variants ──────────────────────────────────────────────────────────────────

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const gridItem: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] } },
}
const tabContent: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

const CARD_STYLE: React.CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #E2E8F0',
  boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
}

// ── Website card ──────────────────────────────────────────────────────────────

function WebCard({ p }: { p: typeof WEBSITES[0] }) {
  return (
    <motion.div variants={gridItem}>
      <SpotlightCard
        href={`https://${p.url}`}
        className="rounded-2xl h-full"
        style={CARD_STYLE}
      >
        {/* Image header */}
        <div className="h-44 relative overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10 text-white/80 bg-black/40"
            style={{ backdropFilter: 'blur(6px)' }}>
            {p.category}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(30,58,138,0.6)' }} aria-hidden="true">
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Website öffnen
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-base leading-tight" style={{ color: '#1E3A8A' }}>{p.name}</h3>
              <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{p.subtitle}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748B' }}>{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.features.slice(0, 3).map((f) => (
              <span key={f} className="text-[10px] px-2 py-0.5 rounded-md border"
                style={{ color: '#64748B', background: '#F1F5F9', borderColor: '#E2E8F0' }}>
                {f}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[11px] font-medium" style={{ color: '#2563EB' }}>{p.url}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── App card ──────────────────────────────────────────────────────────────────

const AppBadge = ({ label }: { label: string }) => (
  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border"
    style={{ borderColor: 'rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.06)', color: '#2563EB' }}>
    {label}
  </span>
)

function AppCard({ p }: { p: typeof APPS[0] }) {
  return (
    <motion.div variants={gridItem}>
      <SpotlightCard
        to={p.detailPath ?? undefined}
        href={!p.detailPath && p.url ? `https://${p.url}` : undefined}
        className="rounded-2xl h-full"
        style={CARD_STYLE}
      >
        {/* Image header */}
        <div className="h-40 relative overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {p.store.comingSoon && (
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-700 border border-amber-300 bg-amber-100">
              Coming Soon
            </div>
          )}
          {p.detailPath && !p.store.comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(30,58,138,0.6)' }}>
              <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                Details ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-bold text-base leading-tight mb-0.5" style={{ color: '#1E3A8A' }}>{p.name}</h3>
          <p className="text-xs mb-2" style={{ color: '#64748B' }}>{p.subtitle}</p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748B' }}>{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map((t) => <AppBadge key={t} label={t} />)}
          </div>
          <div className="flex items-center gap-2">
            {p.store.comingSoon ? (
              <span className="text-xs italic" style={{ color: '#94A3B8' }}>App Store & Play Store – demnächst</span>
            ) : (p.store.ios ? (
              <>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border"
                  style={{ background: '#F1F5F9', borderColor: '#E2E8F0' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: '#64748B' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-[10px] font-medium" style={{ color: '#64748B' }}>App Store</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border"
                  style={{ background: '#F1F5F9', borderColor: '#E2E8F0' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: '#64748B' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.76c.4.22.87.22 1.27 0l9.9-5.62v-3.5L3.18 23.76zM21.83 10.5c-.4-.22-.87-.22-1.27 0l-1.38.8-3.51 2L21.83 10.5zM3.18.24C2.78.46 2.5.88 2.5 1.34v21.32c0 .46.28.88.68 1.1l11.17-11.88L3.18.24zm17.38 9.16l-2.16-1.23-3.17-1.8L3.95.04l-.77-.04 13.23 11.89 4-2.23z"/>
                  </svg>
                  <span className="text-[10px] font-medium" style={{ color: '#64748B' }}>Play Store</span>
                </div>
              </>
            ) : null)}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── Featured Vocafy hero card ──────────────────────────────────────────────────

function FeaturedVocafy() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Link to="/projekte/vocafy" className="block group cursor-pointer">
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,23,42,0.1)' }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden"
          style={CARD_STYLE}
        >
          <div className="flex flex-col md:flex-row" style={{ minHeight: 280 }}>
            {/* Image */}
            <div className="relative h-56 md:h-auto md:w-[44%] overflow-hidden flex-shrink-0">
              <img src={vocafyImg} alt="Vocafy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none hidden md:block"
                style={{ background: 'linear-gradient(to right, transparent 55%, rgba(255,255,255,0.95) 100%)' }} />
              <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none md:hidden"
                style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)' }} />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-amber-700"
                  style={{ background: 'rgba(255,251,235,0.9)', border: '1px solid rgba(245,158,11,0.4)', backdropFilter: 'blur(8px)' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Flagship-Projekt
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563EB' }}>
                Web & Mobile · Eigenes Projekt
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2" style={{ color: '#1E3A8A' }}>
                Voca<span style={{ color: '#2563EB' }}>fy</span>
              </h3>
              <p className="text-sm leading-relaxed mb-4 max-w-md" style={{ color: '#64748B' }}>
                Interaktive Lernplattform zum Erstellen und Üben von Vokabeln – mit Benutzerkonten, Fortschrittsverfolgung und eigenem Learning-Algorithmus.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Node.js', 'React', 'Html', 'MySQL', 'Benutzerkonten'].map(t => (
                  <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border"
                    style={{ borderColor: 'rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.06)', color: '#2563EB' }}>{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#2563EB' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  vocafy.ch
                </span>
                <span style={{ color: '#CBD5E1' }}>·</span>
                <span className="text-sm transition-colors flex items-center gap-1.5" style={{ color: '#64748B' }}>
                  Details ansehen
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'websites', label: 'Kundenwebsites', count: WEBSITES.length },
  { id: 'apps',     label: 'Eigene Apps',     count: APPS.length },
  { id: 'featured', label: '★ Featured',      count: 1 },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'websites' | 'apps' | 'featured'>('websites')

  return (
    <section id="projekte" className="relative py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-80px' }} transition={{ duration:0.7 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748B' }}>Meine Projekte</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3" style={{ color: '#1E3A8A' }}>
            Websites, Apps und <span style={{ color: '#2563EB' }}>Plattformen</span>
          </h2>
          <p className="text-sm max-w-xl" style={{ color: '#64748B' }}>
            Websites für Restaurants, Bars und lokale Unternehmen in der Ostschweiz – und eigene Mobile-Apps.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }} transition={{ duration:0.5, delay:0.1 }}
          className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl w-fit"
          style={{ background:'#F1F5F9', border:'1px solid #E2E8F0' }}
          role="tablist"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as 'websites' | 'apps' | 'featured')}
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-200"
              style={{ color: activeTab === tab.id ? '#FFFFFF' : '#64748B' }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background:'#2563EB',
                    boxShadow:'0 4px 12px rgba(37,99,235,0.25)' }}
                  transition={{ type:'spring', stiffness:350, damping:30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-slate-200'
                }`}>
                  {tab.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'websites' && (
            <motion.div key="websites" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={grid} initial="hidden" animate="visible"
              >
                {WEBSITES.map((p) => <WebCard key={p.name} p={p} />)}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'apps' && (
            <motion.div key="apps" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={grid} initial="hidden" animate="visible"
              >
                {APPS.map((p) => <AppCard key={p.name} p={p} />)}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'featured' && (
            <motion.div key="featured" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <FeaturedVocafy />
              <p className="mt-6 text-center text-xs" style={{ color: '#94A3B8' }}>
                Weitere Featured-Projekte folgen.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.5, delay:0.2 }}
          className="flex justify-center mt-12"
        >
          <Link to="/projekte">
            <motion.span
              whileHover={{ y:-2 }}
              whileTap={{ scale:0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer transition-colors"
              style={{ border:'1px solid #CBD5E1', background:'#FFFFFF', color: '#1E3A8A', display:'inline-flex' }}
            >
              Alle Projekte ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
