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
      style={{ background: '#F1F5F9' }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748B' }}>
            Transparent & fair
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3" style={{ color: '#1E3A8A' }}>
            Website-<span style={{ color: '#2563EB' }}>Pakete</span>
          </h2>
          <p className="text-sm" style={{ color: '#64748B' }}>Flexibel anpassbar an deine individuellen Bedürfnisse</p>
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
                background: '#FFFFFF',
                border: '2px solid #2563EB',
                boxShadow: '0 8px 32px rgba(37,99,235,0.12)',
              } : {
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ background: '#2563EB' }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>{plan.name}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748B' }}>{plan.desc}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#0F172A' }}>
                    <span style={{ color: plan.highlight ? '#2563EB' : '#64748B' }}>
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/kontakt" className="w-full">
                <motion.span
                  whileHover={plan.highlight ? { filter: 'brightness(1.08)' } : {}}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-colors duration-200"
                  style={plan.highlight ? {
                    background: '#2563EB',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 16px rgba(37,99,235,0.25)',
                  } : {
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    color: '#1E3A8A',
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
