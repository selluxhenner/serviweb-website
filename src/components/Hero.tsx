import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import Navbar from './Navbar'

// ── Variants ──────────────────────────────────────────────────────────────────

const curtainContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}
const curtainLine: Variants = {
  hidden: { y: '115%' },
  visible: { y: '0%', transition: { duration: 1.0, ease: [0.215, 0.61, 0.355, 1] } },
}

const contentStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.85 } },
}
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] } },
}

const cardGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const cardItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
}

// ── Magnetic button ───────────────────────────────────────────────────────────

function MagneticButton({
  children, to, primary,
}: { children: React.ReactNode; to: string; primary?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 280, damping: 28 })
  const sy = useSpring(my, { stiffness: 280, damping: 28 })
  const shouldReduce = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    if (shouldReduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28)
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  const cls = `inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold cursor-pointer ${
    primary ? 'text-white' : 'text-slate-300'
  }`
  const sty = primary ? {
    background: 'linear-gradient(135deg,#2563EB 0%,#3B82F6 60%,#1D4ED8 100%)',
    boxShadow: '0 0 0 1px rgba(59,130,246,0.4), 0 4px 28px rgba(37,99,235,0.55)',
  } : {
    border: '1px solid rgba(59,130,246,0.32)',
    background: 'rgba(59,130,246,0.08)',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
    >
      <Link to={to} className={cls} style={sty}>{children}</Link>
    </motion.div>
  )
}

// ── Feature card ──────────────────────────────────────────────────────────────

interface CardProps {
  iconBg: string; iconGlow: string; icon: React.ReactNode
  title: string; body: string; dotColor: string; accent: string; tag: string
}
function FeatureCard(p: CardProps) {
  const shouldReduce = useReducedMotion()
  return (
    <motion.article
      variants={cardItem}
      whileHover={shouldReduce ? {} : { y: -5, borderColor: 'rgba(59,130,246,0.4)' }}
      transition={{ duration: 0.22 }}
      className="rounded-2xl p-6 cursor-default"
      style={{
        background: 'rgba(13,21,38,0.74)',
        border: '1px solid rgba(59,130,246,0.13)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
      }}
    >
      <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}
        style={{ boxShadow: p.iconGlow }} aria-hidden="true">{p.icon}</div>
      <h2 className="text-base font-bold text-white mb-2">{p.title}</h2>
      <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
      <div className={`mt-5 flex items-center gap-2 text-xs font-medium ${p.accent}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor}`} aria-hidden="true" />
        {p.tag}
      </div>
    </motion.article>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const Arrow = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)
const Eye = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

// ── Main ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const { scrollY } = useScroll()
  const contentY       = useTransform(scrollY, [0, 600], [0, -90])

  const rawX = useMotionValue(0.5)
  const rawY = useMotionValue(0.5)
  useEffect(() => {
    if (shouldReduce) return
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth)
      rawY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY, shouldReduce])

  const o1x = useSpring(useTransform(rawX, [0, 1], [50, -50]),  { stiffness: 45, damping: 30 })
  const o1y = useSpring(useTransform(rawY, [0, 1], [35, -35]),  { stiffness: 45, damping: 30 })
  const o2x = useSpring(useTransform(rawX, [0, 1], [-40, 40]),  { stiffness: 35, damping: 25 })
  const o2y = useSpring(useTransform(rawY, [0, 1], [-30, 30]),  { stiffness: 35, damping: 25 })
  const o3x = useSpring(useTransform(rawX, [0, 1], [30, -30]),  { stiffness: 55, damping: 35 })
  const o3y = useSpring(useTransform(rawY, [0, 1], [20, -20]),  { stiffness: 55, damping: 35 })

  return (
    <>
      <style>{`
        @keyframes aurora {
          0%,100% { transform:translate(0%,0%) scale(1);     opacity:.42; }
          33%      { transform:translate(3%,-4%) scale(1.06); opacity:.60; }
          66%      { transform:translate(-3%,3%) scale(.97);  opacity:.50; }
        }
        .orb-inner {
          border-radius:9999px; pointer-events:none; filter:blur(100px);
          animation: aurora 12s ease-in-out infinite;
        }
        .grid-overlay {
          position:absolute; inset:0; pointer-events:none;
          background-image:linear-gradient(rgba(59,130,246,.04) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(59,130,246,.04) 1px,transparent 1px);
          background-size:60px 60px;
          mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,black 0%,transparent 100%);
        }
        .gradient-text {
          background:linear-gradient(135deg,#F8FAFC 0%,#93C5FD 50%,#A78BFA 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:.35} }
        .pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        @media (prefers-reduced-motion:reduce) {
          .orb-inner, .pulse-slow { animation:none; }
        }
      `}</style>

      <Navbar />

      <main>
        <section
          className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
          style={{ background: '#070B14' }}
          aria-label="Hero-Bereich"
        >
          {/* Aurora orbs */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <motion.div className="absolute top-[-200px] left-[-150px]" style={{ x: o1x, y: o1y }}>
              <div className="orb-inner" style={{ width:700, height:700,
                background:'radial-gradient(circle,rgba(59,130,246,.22) 0%,transparent 70%)' }} />
            </motion.div>
            <motion.div className="absolute top-[100px] right-[-100px]" style={{ x: o2x, y: o2y }}>
              <div className="orb-inner" style={{ width:600, height:600, animationDelay:'-4s',
                background:'radial-gradient(circle,rgba(139,92,246,.18) 0%,transparent 70%)' }} />
            </motion.div>
            <motion.div className="absolute bottom-0 left-[30%]" style={{ x: o3x, y: o3y }}>
              <div className="orb-inner" style={{ width:400, height:400, animationDelay:'-8s',
                background:'radial-gradient(circle,rgba(6,182,212,.14) 0%,transparent 70%)' }} />
            </motion.div>
          </div>

          <div className="grid-overlay" aria-hidden="true" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
              className="max-w-3xl"
              style={shouldReduce ? {} : { y: contentY }}
            >

              {/* Personal badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-8"
                style={{ background:'rgba(59,130,246,0.08)', border:'1px solid rgba(59,130,246,0.22)' }}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">
                  Kevin Schmid
                  <span className="text-slate-500 font-normal"> · Entwickler aus der Ostschweiz</span>
                </span>
                <div className="w-px h-4 bg-blue-500/30" aria-hidden="true" />
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-slow" aria-hidden="true" />
                  <span className="text-xs text-emerald-400 font-medium">Verfügbar</span>
                </div>
              </motion.div>

              {/* Headline — one semantic <h1> spanning all three animated lines */}
              <motion.h1 variants={curtainContainer} initial="hidden" animate="visible">
                <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.15em' }}>
                  <motion.span
                    variants={curtainLine}
                    className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight"
                    style={{ display: 'block' }}
                  >
                    <span className="gradient-text">Ihre Online-Präsenz.</span>
                  </motion.span>
                </span>
                <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.15em' }}>
                  <motion.span
                    variants={curtainLine}
                    className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white"
                    style={{ display: 'block' }}
                  >
                    Professionell.
                  </motion.span>
                </span>
                <span style={{ display: 'block', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <motion.span
                    variants={curtainLine}
                    className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight"
                    style={{ display: 'block' }}
                  >
                    <span className="text-white">Persönlich. </span>
                    <span className="text-blue-400">Fertig.</span>
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div variants={contentStagger} initial="hidden" animate="visible">

                <motion.p variants={fadeUp}
                  className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
                  Ich entwickle Websites und Apps für Restaurants, Bars und Dienstleister in der Schweiz –{' '}
                  <span className="text-slate-300 font-medium">ohne Agentur-Overhead</span>, ohne Fachchinesisch,
                  mit direktem Draht zu mir.
                </motion.p>

                {/* Trust chips */}
                <motion.div variants={fadeUp}
                  className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-10"
                  role="list" aria-label="Vertrauenspunkte">
                  {[
                    { icon: <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, label: '10+ echte Kundenprojekte', cls: 'bg-blue-500/10 border-blue-500/20' },
                    { icon: <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, label: 'Schnell umgesetzt', cls: 'bg-violet-500/10 border-violet-500/20' },
                    { icon: <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>, label: 'Direkt erreichbar', cls: 'bg-cyan-500/10 border-cyan-500/20' },
                  ].map((chip, i) => (
                    <div key={i} role="listitem">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${chip.cls}`}>
                        {chip.icon}
                        <span className="text-sm font-semibold text-slate-200">{chip.label}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <MagneticButton to="/kontakt" primary>
                    Projekt starten <Arrow />
                  </MagneticButton>
                  <MagneticButton to="/projekte">
                    Projekte ansehen <Eye />
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Feature cards */}
            <div className="mt-20 md:mt-24">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-8"
              >
                Warum Serviweb
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                variants={cardGrid} initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              >
                <FeatureCard
                  iconBg="bg-blue-500/15" iconGlow="0 0 20px rgba(59,130,246,0.4)"
                  icon={<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>}
                  title="Persönlich" body="Direkter Kontakt zu mir – keine Zwischenhändler, keine anonymen Tickets. Sie sprechen immer mit demselben Menschen."
                  dotColor="bg-blue-400" accent="text-blue-400" tag="Individuelle Betreuung"
                />
                <FeatureCard
                  iconBg="bg-violet-500/15" iconGlow="0 0 20px rgba(139,92,246,0.4)"
                  icon={<svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                  title="Schnell" body="Kurze Reaktionszeiten, keine langen Warteschlangen. Von der Idee bis zur fertigen Website – effizient und zügig."
                  dotColor="bg-violet-400" accent="text-violet-400" tag="Effiziente Umsetzung"
                />
                <FeatureCard
                  iconBg="bg-cyan-500/15" iconGlow="0 0 20px rgba(6,182,212,0.4)"
                  icon={<svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>}
                  title="Flexibel" body="Kein starres Template. Ich passe mich Ihren Bedürfnissen an – ob kleines Restaurant oder wachsender Dienstleister."
                  dotColor="bg-cyan-400" accent="text-cyan-400" tag="Massgeschneidert"
                />
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex justify-center mt-16" aria-hidden="true"
            >
              <div className="flex flex-col items-center gap-2 text-slate-600">
                <span className="text-xs tracking-widest uppercase font-medium">Mehr entdecken</span>
                <motion.div
                  animate={shouldReduce ? {} : { y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
