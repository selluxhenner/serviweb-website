import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, Variants } from 'framer-motion'

type FeaturedItem = {
  name: string; subtitle: string; initBg: string; initial: string; to?: string; href?: string
}
type MegaLink = { name: string; dot: string; to?: string | null; href?: string; comingSoon?: boolean }

const FEATURED: FeaturedItem[] = [
  {
    name: 'Vocafy',
    subtitle: 'Lernplattform & iOS/Android App',
    to: '/projekte/vocafy',
    initBg: 'linear-gradient(135deg,#3B82F6,#8B5CF6)',
    initial: 'VO',
  },
  {
    name: 'Vision Wil',
    subtitle: 'Kunstbar in Wil',
    href: 'https://vision-wil.ch',
    initBg: 'linear-gradient(135deg,#F97316,#EF4444)',
    initial: 'VW',
  },
]

const MEGA_WEBSITES: MegaLink[] = [
  { name: 'VISION KUNST',         href: 'https://vision-wil.ch',        dot: '#EC4899' },
  { name: 'Trinkstube zum Hartz', href: 'https://trinkstubezumhartz.ch', dot: '#06B6D4' },
  { name: 'ILGE Piano Bar',       href: 'https://ilge-pianobar.ch',      dot: '#8B5CF6' },
]

const MEGA_APPS: MegaLink[] = [
  { name: 'School Companion', to: '/projekte/school-companion', dot: '#10B981' },
  { name: 'Daily Goals',      to: '/projekte/daily-goals',      dot: '#EC4899', comingSoon: true },
]

const DIVIDER = 'border-l border-blue-500/[0.08]'

const MOBILE_PROJECTS = [
  { name: 'Vocafy', init: 'VO', bg: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', to: '/projekte/vocafy' as string | null, href: undefined as string | undefined },
  { name: 'School', init: 'SC', bg: 'linear-gradient(135deg,#10B981,#06B6D4)', to: '/projekte/school-companion',          href: undefined },
  { name: 'Vision', init: 'VW', bg: 'linear-gradient(135deg,#F97316,#EF4444)', to: null,                                  href: 'https://vision-wil.ch' },
]

const navItem: Variants = {
  hidden:  { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32 } },
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive = (to: string) => pathname === to || (to !== '/' && pathname.startsWith(to))
  const isProjekteActive = pathname.startsWith('/projekte')

  const openMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 130)
  }
  const closeAll = () => { setOpen(false); setMegaOpen(false) }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(7,11,20,0.78)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(59,130,246,0.08)',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          role="navigation" aria-label="Hauptnavigation">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center"
              style={{ boxShadow: '0 0 18px rgba(59,130,246,0.5)' }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Serviweb
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium" role="list">
            <li>
              <Link to="/leistungen" className="transition-colors duration-200 cursor-pointer"
                style={{ color: isActive('/leistungen') ? 'white' : 'rgba(148,163,184,0.85)' }}>
                Leistungen
                {isActive('/leistungen') && (
                  <motion.div layoutId="nav-underline" className="h-px mt-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
              </Link>
            </li>

            <li className="relative flex items-center self-stretch" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <Link to="/projekte" onClick={() => setMegaOpen(false)}
                className="flex flex-col cursor-pointer transition-colors duration-200"
                style={{ color: isProjekteActive || megaOpen ? 'white' : 'rgba(148,163,184,0.85)' }}
                aria-haspopup="true" aria-expanded={megaOpen}>
                <span className="flex items-center gap-1">
                  Projekte
                  <motion.svg animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
                    className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </span>
                {isProjekteActive && (
                  <motion.div layoutId="nav-underline" className="h-px mt-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
              </Link>
            </li>

            <li>
              <Link to="/kontakt" className="transition-colors duration-200 cursor-pointer"
                style={{ color: isActive('/kontakt') ? 'white' : 'rgba(148,163,184,0.85)' }}>
                Kontakt
                {isActive('/kontakt') && (
                  <motion.div layoutId="nav-underline" className="h-px mt-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
              </Link>
            </li>
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/kontakt"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
              style={{
                background: 'linear-gradient(135deg,#2563EB 0%,#3B82F6 60%,#1D4ED8 100%)',
                boxShadow: '0 0 0 1px rgba(59,130,246,0.35), 0 4px 20px rgba(37,99,235,0.4)',
              }}>
              Projekt starten
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <button className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {/* ── Mega Menu ───────────────────────────────────────────────── */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div key="mega-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6, transition: { duration: 0.14 } }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={openMega} onMouseLeave={closeMega}
              style={{
                borderTop: '1px solid rgba(59,130,246,0.08)',
                borderBottom: '1px solid rgba(59,130,246,0.1)',
                background: 'rgba(5,8,16,0.97)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
              }}>
              <div className="max-w-6xl mx-auto px-6 py-7">
                <div className="grid grid-cols-3 gap-0">

                  <div className="pr-8">
                    <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4">Featured</p>
                    <div className="flex flex-col gap-1.5">
                      {FEATURED.map(item => {
                        const card = (
                          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group cursor-pointer">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0 shadow-lg"
                              style={{ background: item.initBg }}>
                              {item.initial}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-tight">{item.name}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">{item.subtitle}</p>
                            </div>
                            {item.to ? (
                              <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            ) : (
                              <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </div>
                        )
                        if (item.to) return <Link key={item.name} to={item.to} onClick={() => setMegaOpen(false)} className="block">{card}</Link>
                        return <a key={item.name} href={item.href ?? '#'} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
                      })}
                      <Link to="/projekte" onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-1.5 px-3 py-2 text-xs text-blue-400 hover:text-blue-300 transition-colors mt-1">
                        Alle Projekte ansehen
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className={`${DIVIDER} pl-8 pr-8`}>
                    <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4">Kundenwebsites</p>
                    <ul className="flex flex-col gap-0.5">
                      {MEGA_WEBSITES.map(w => (
                        <li key={w.name}>
                          <a href={w.href ?? '#'} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-white/[0.04] transition-colors group cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: w.dot }} />
                            <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors flex-1">{w.name}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${DIVIDER} pl-8`}>
                    <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4">Apps</p>
                    <ul className="flex flex-col gap-0.5">
                      {MEGA_APPS.map(a => (
                        <li key={a.name}>
                          {a.to ? (
                            <Link to={a.to} onClick={() => setMegaOpen(false)}
                              className="flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-white/[0.04] transition-colors group cursor-pointer">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors flex-1">{a.name}</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </Link>
                          ) : (
                            <div className="flex items-center gap-2.5 py-2 px-2">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-40" style={{ background: a.dot }} />
                              <span className="text-sm text-slate-600">{a.name}</span>
                              <span className="ml-auto text-[9px] font-semibold text-amber-500/60 uppercase tracking-wider">Soon</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile overlay – full screen ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[55] md:hidden flex flex-col overflow-hidden"
            style={{ background: '#04080F' }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(59,130,246,0.1) 0%,transparent 70%)', filter: 'blur(60px)' }} />

            {/* Top bar */}
            <div className="relative flex items-center justify-between px-6 h-16 flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(59,130,246,0.08)' }}>
              <Link to="/" onClick={closeAll} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center"
                  style={{ boxShadow: '0 0 18px rgba(59,130,246,0.5)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight text-white">Servi<span className="text-blue-400">Web</span></span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Menü schließen"
                className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <motion.div
              className="relative flex-1 overflow-y-auto px-6"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
              initial="hidden"
              animate="visible"
            >
              {/* 01 – Leistungen */}
              <motion.div variants={navItem}>
                <Link to="/leistungen" onClick={closeAll}
                  className="flex items-center justify-between py-5 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-slate-700 w-5 flex-shrink-0">01</span>
                    <span className="text-xl font-black tracking-tight transition-colors duration-200"
                      style={{ color: isActive('/leistungen') ? '#3B82F6' : 'white' }}>
                      Leistungen
                    </span>
                    {isActive('/leistungen') && (
                      <span className="text-[10px] text-blue-400 font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.12)' }}>aktiv</span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* 02 – Projekte with visual project tiles */}
              <motion.div variants={navItem}>
                <div className="py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-mono text-slate-700 w-5 flex-shrink-0">02</span>
                      <span className="text-xl font-black tracking-tight"
                        style={{ color: isProjekteActive ? '#3B82F6' : 'white' }}>
                        Projekte
                      </span>
                    </div>
                    <Link to="/projekte" onClick={closeAll}
                      className="flex items-center gap-1 text-xs text-slate-600 hover:text-blue-400 transition-colors">
                      Alle ansehen
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  {/* Project preview tiles */}
                  <div className="grid grid-cols-4 gap-2.5 pl-9">
                    {MOBILE_PROJECTS.map(p =>
                      p.to ? (
                        <Link key={p.name} to={p.to} onClick={closeAll} className="flex flex-col items-center gap-1.5">
                          <div className="w-full aspect-square rounded-2xl flex items-center justify-center text-xs font-black text-white shadow-lg"
                            style={{ background: p.bg }}>
                            {p.init}
                          </div>
                          <p className="text-[9px] text-slate-600 text-center leading-tight">{p.name}</p>
                        </Link>
                      ) : (
                        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                          onClick={() => setOpen(false)} className="flex flex-col items-center gap-1.5">
                          <div className="w-full aspect-square rounded-2xl flex items-center justify-center text-xs font-black text-white shadow-lg"
                            style={{ background: p.bg }}>
                            {p.init}
                          </div>
                          <p className="text-[9px] text-slate-600 text-center leading-tight">{p.name}</p>
                        </a>
                      )
                    )}
                    <Link to="/projekte" onClick={closeAll} className="flex flex-col items-center gap-1.5">
                      <div className="w-full aspect-square rounded-2xl flex items-center justify-center text-xs font-black text-blue-400"
                        style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
                        +9
                      </div>
                      <p className="text-[9px] text-slate-600 text-center">Mehr</p>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* 03 – Kontakt */}
              <motion.div variants={navItem}>
                <Link to="/kontakt" onClick={closeAll}
                  className="flex items-center justify-between py-5 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-slate-700 w-5 flex-shrink-0">03</span>
                    <span className="text-xl font-black tracking-tight transition-colors duration-200"
                      style={{ color: isActive('/kontakt') ? '#3B82F6' : 'white' }}>
                      Kontakt
                    </span>
                    {isActive('/kontakt') && (
                      <span className="text-[10px] text-blue-400 font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.12)' }}>aktiv</span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="relative px-6 pb-8 pt-5 flex-shrink-0"
              style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                  style={{ boxShadow: '0 0 8px rgba(16,185,129,0.7)' }} />
                <span className="text-sm font-medium text-emerald-400">Aktuell verfügbar</span>
                <span className="text-xs text-slate-600">· Antwort in 24h</span>
              </div>
              <Link to="/kontakt" onClick={closeAll}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-bold text-white text-base cursor-pointer"
                style={{ background: 'linear-gradient(135deg,#2563EB,#3B82F6)', boxShadow: '0 4px 24px rgba(37,99,235,0.4)' }}>
                Projekt starten
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="flex items-center justify-center gap-5 mt-4">
                <Link to="/impressum" onClick={closeAll}
                  className="text-xs text-slate-700 hover:text-slate-500 transition-colors cursor-pointer">
                  Impressum
                </Link>
                <span className="w-1 h-1 rounded-full bg-slate-800" aria-hidden="true" />
                <Link to="/datenschutz" onClick={closeAll}
                  className="text-xs text-slate-700 hover:text-slate-500 transition-colors cursor-pointer">
                  Datenschutz
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
