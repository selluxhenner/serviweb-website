import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
<<<<<<< HEAD
=======
  useMotionTemplate,
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
  Variants,
} from 'framer-motion'

// ── 3D Tilt Card ──────────────────────────────────────────────────────────────

function TiltCard({ children, className, style }: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

<<<<<<< HEAD
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 28 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 28 })
=======
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [11, -11]), { stiffness: 200, damping: 28 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 200, damping: 28 })

  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100])
  const glare  = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.065) 0%, transparent 60%)`
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className ?? ''}`}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
<<<<<<< HEAD
=======
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{ background: glare }}
      />
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
    </motion.div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED = [
  {
    icon: (
<<<<<<< HEAD
      <svg className="w-7 h-7" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Website-Entwicklung',
    desc: 'Professionelle Websites von der einfachen Landing Page bis zur komplexen Webapp mit Login, Buchungssystem und Online-Shop.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    features: ['Responsive & mobile-optimiert', 'Reservierung, Shop, Formulare, Login'],
  },
  {
    icon: (
      <svg className="w-7 h-7" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: 'App-Entwicklung',
    desc: 'Native mobile Apps für iOS und Android mit React Native – für ein nahtloses Benutzererlebnis auf allen Geräten.',
    tags: ['React Native', 'iOS', 'Android'],
    features: ['iOS & Android aus einer Codebasis', 'React Native für optimale Performance', 'Benutzerkonten, Push-Nachrichten, Offline-Modus'],
=======
      <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'bg-blue-500/12', iconGlow: '0 0 22px rgba(59,130,246,0.38)',
    accentBorder: 'rgba(59,130,246,0.18)', accentHover: 'rgba(59,130,246,0.4)',
    label: 'Website-Entwicklung',
    desc: 'Professionelle Websites von der einfachen Landing Page bis zur komplexen Webapp mit Login, Buchungssystem und Online-Shop.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    features: ['Responsive & mobile-optimiert', 'Reservierung, Shop, Formulare, Login'],
    ctaColor: 'text-blue-400 hover:text-blue-300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'bg-violet-500/12', iconGlow: '0 0 22px rgba(139,92,246,0.38)',
    accentBorder: 'rgba(139,92,246,0.18)', accentHover: 'rgba(139,92,246,0.4)',
    label: 'App-Entwicklung',
    desc: 'Native mobile Apps für iOS und Android mit React Native – für ein nahtloses Benutzererlebnis auf allen Geräten.',
    tags: ['React Native', 'iOS', 'Android'],
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    features: ['iOS & Android aus einer Codebasis', 'React Native für optimale Performance', 'Benutzerkonten, Push-Nachrichten, Offline-Modus'],
    ctaColor: 'text-violet-400 hover:text-violet-300',
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
  },
]

const SMALL = [
  {
<<<<<<< HEAD
    icon: (<svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
=======
    icon: (<svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
    iconBg: 'bg-cyan-500/12', iconGlow: '0 0 18px rgba(6,182,212,0.3)',
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
    label: 'SEO & Social Media Setup',
    desc: 'Technische Optimierung für bessere Auffindbarkeit und professionelle Social Media Einrichtung.',
  },
  {
<<<<<<< HEAD
    icon: (<svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
=======
    icon: (<svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    iconBg: 'bg-emerald-500/12', iconGlow: '0 0 18px rgba(16,185,129,0.3)',
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
    label: 'Fotografie',
    desc: 'Professionelle Bilder für deine Website, Social Media und Marketing-Materialien.',
  },
]

// ── Variants ─────────────────────────────────────────────────────────────────

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const gridItem: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
}

const CheckIcon = () => (
<<<<<<< HEAD
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
=======
  <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

// ── Section ───────────────────────────────────────────────────────────────────

export default function Services() {
  return (
<<<<<<< HEAD
    <section id="leistungen" className="relative py-24 md:py-32" style={{ background: '#F1F5F9' }}>
=======
    <section id="leistungen" className="relative py-24 md:py-32" style={{ background: '#070B14' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)', filter:'blur(60px)' }} aria-hidden="true" />

>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-80px' }} transition={{ duration:0.7 }}
          className="mb-14"
        >
<<<<<<< HEAD
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748B' }}>Was ich anbiete</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: '#1E3A8A' }}>
            Meine <span style={{ color: '#2563EB' }}>Leistungen</span>
=======
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Was ich anbiete</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Meine{' '}
            <span style={{ background:'linear-gradient(135deg,#93C5FD 0%,#A78BFA 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Leistungen
            </span>
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
          </h2>
        </motion.div>

        {/* Featured – 3D tilt */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"
          variants={grid} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-60px' }}>
          {FEATURED.map((s) => (
            <motion.div key={s.label} variants={gridItem}>
              <TiltCard className="h-full rounded-2xl p-7 flex flex-col" style={{
<<<<<<< HEAD
                background:'#FFFFFF', border:'1px solid #E2E8F0',
                boxShadow:'0 1px 3px rgba(15,23,42,0.05)',
              }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(37,99,235,0.1)' }} aria-hidden="true">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>{s.label}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium border"
                      style={{ background: 'rgba(37,99,235,0.06)', color: '#2563EB', borderColor: 'rgba(37,99,235,0.2)' }}>{t}</span>
=======
                background:'rgba(13,21,38,0.76)', border:`1px solid ${s.accentBorder}`,
                backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)',
              }}>
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}
                  style={{ boxShadow:s.iconGlow }} aria-hidden="true">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${s.tagColor}`}>{t}</span>
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
                  ))}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.features.map((f) => (
<<<<<<< HEAD
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#0F172A' }}>
=======
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
                      <CheckIcon />{f}
                    </li>
                  ))}
                </ul>
                <Link to="/leistungen"
<<<<<<< HEAD
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer hover:opacity-80"
                  style={{ color: '#2563EB' }}>
=======
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.ctaColor} transition-colors duration-200 cursor-pointer`}>
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
                  Mehr zu diesem Service
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Small cards */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={grid} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-60px' }}>
          {SMALL.map((s) => (
            <motion.article key={s.label} variants={gridItem}
<<<<<<< HEAD
              whileHover={{ y:-3 }}
              transition={{ duration:0.22 }}
              className="rounded-2xl p-6 flex items-start gap-5"
              style={{ background:'#FFFFFF', border:'1px solid #E2E8F0',
                boxShadow:'0 1px 3px rgba(15,23,42,0.05)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,99,235,0.1)' }} aria-hidden="true">{s.icon}</div>
              <div>
                <h3 className="text-base font-bold mb-1.5" style={{ color: '#1E3A8A' }}>{s.label}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748B' }}>{s.desc}</p>
                <Link to="/leistungen"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 cursor-pointer hover:opacity-80"
                  style={{ color: '#2563EB' }}>
=======
              whileHover={{ y:-3, borderColor:'rgba(59,130,246,0.3)' }}
              transition={{ duration:0.22 }}
              className="rounded-2xl p-6 flex items-start gap-5"
              style={{ background:'rgba(13,21,38,0.6)', border:'1px solid rgba(59,130,246,0.1)',
                backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)' }}>
              <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}
                style={{ boxShadow:s.iconGlow }} aria-hidden="true">{s.icon}</div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{s.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{s.desc}</p>
                <Link to="/leistungen"
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
>>>>>>> 86a17aa693b6f0eba0f19f692bd96f1fb586f8f2
                  Mehr erfahren
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
