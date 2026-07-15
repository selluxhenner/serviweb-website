import { Link } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
}

const PLANS = [
  {
    name: 'Basic Website',
    highlight: false,
    badge: null,
    desc: 'Für kleine Betriebe, die erstmals online sichtbar sein wollen. Eine professionelle Seite mit allen wichtigen Infos.',
    features: [
      'Professionelles Design',
      'Mobile-optimiert',
      'Kontaktformular',
      'Impressum & Datenschutz',
      '1 Seite / Landing Page',
    ],
  },
  {
    name: 'Standard Website',
    highlight: true,
    badge: 'Beliebt',
    desc: 'Mehrere Seiten, Menü, Events, Galerie – perfekt für Restaurants, Bars und kleine Unternehmen.',
    features: [
      'Alles aus Basic',
      'Mehrere Unterseiten',
      'Galerie & Menükarte',
      'Events-Bereich',
      'Google Maps Integration',
      'Social Media Verknüpfung',
    ],
  },
  {
    name: 'Pro Website',
    highlight: false,
    badge: null,
    desc: 'Mit Buchungs- oder Shop-Funktionen, Login-Bereich und individuellen Features für dein Business.',
    features: [
      'Alles aus Standard',
      'Online-Shop oder Buchungssystem',
      'Kunden-Login-Bereich',
      'Individuelle Features',
      'Performance-Optimierung',
      'Laufende Betreuung möglich',
    ],
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Pricing() {
  return (
    <section
      id="preise"
      className="relative py-24 md:py-32"
      style={{ background: '#070B14' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2  h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
            Transparent & fair
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3">
            Website-{' '}
            <span style={{
              background: 'linear-gradient(135deg,#93C5FD 0%,#A78BFA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Pakete
            </span>
          </h2>
          <p className="text-slate-500 text-sm">Flexibel anpassbar an deine individuellen Bedürfnisse</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              variants={item}
              whileHover={{ y: plan.highlight ? -6 : -4 }}
              transition={{ duration: 0.22 }}
              className="rounded-2xl p-7 flex flex-col relative"
              style={plan.highlight ? {
                background: 'rgba(17,28,52,0.9)',
                border: '1px solid rgba(59,130,246,0.45)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 0 0 1px rgba(59,130,246,0.1), 0 8px 48px rgba(37,99,235,0.2)',
              } : {
                background: 'rgba(13,21,38,0.65)',
                border: '1px solid rgba(59,130,246,0.1)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-lg"
                    style={{ boxShadow: '0 0 16px rgba(59,130,246,0.6)' }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {plan.highlight && (
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)' }}
                  aria-hidden="true"
                />
              )}

              <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{plan.desc}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-400'}`}>
                    <span className={plan.highlight ? 'text-blue-400' : 'text-slate-500'}>
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/kontakt" className="w-full">
                <motion.span
                  whileHover={plan.highlight ? { filter: 'brightness(1.1)' } : {}}
                  whileTap={{ scale: 0.97 }}
                  className={`block w-full text-center py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-colors duration-200 ${
                    plan.highlight
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  style={plan.highlight ? {
                    background: 'linear-gradient(135deg,#2563EB 0%,#3B82F6 60%,#1D4ED8 100%)',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                  } : {
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.25)',
                  }}
                >
                  Anfrage senden
                </motion.span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
