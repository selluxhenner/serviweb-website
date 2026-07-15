import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
}

const VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    number: '01',
    title: 'Qualität',
    body: 'Ich lege grossen Wert auf saubere Technik, klare Struktur und ein modernes Design, das zu deinem Betrieb passt.',
  },
  {
    icon: (
      <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    number: '02',
    title: 'Guter Service',
    body: 'Direkter Kontakt per Handy, schnelle Reaktionszeiten und ehrliche Beratung ohne Fachchinesisch.',
  },
  {
    icon: (
      <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    number: '03',
    title: 'Kundenzufriedenheit',
    body: 'Ich arbeite eng mit dir zusammen, bis du mit dem Ergebnis wirklich zufrieden bist.',
  },
]

export default function Values() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748B' }}>
            Meine Grundsätze
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: '#1E3A8A' }}>
            Meine <span style={{ color: '#2563EB' }}>Werte</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {VALUES.map((v) => (
            <motion.article
              key={v.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
              className="rounded-2xl p-7 relative overflow-hidden cursor-default"
              style={{
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
              }}
            >
              {/* Faint number watermark */}
              <span
                className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
                style={{ color: 'rgba(30,58,138,0.06)', lineHeight: 1 }}
                aria-hidden="true"
              >
                {v.number}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(37,99,235,0.1)' }}
                aria-hidden="true"
              >
                {v.icon}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1E3A8A' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{v.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
