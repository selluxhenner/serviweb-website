import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#070B14' }}
      aria-label="Kontakt aufnehmen"
    >
      {/* Gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.14) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative top line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }} />
            <span className="text-xs font-medium text-slate-300">Bereit loszulegen</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            Bereit für dein{' '}
            <span style={{
              background: 'linear-gradient(135deg,#93C5FD 0%,#60A5FA 40%,#A78BFA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projekt?
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Lass uns gemeinsam deine Online-Präsenz auf das nächste Level bringen.
            Kostenlose Erstberatung – direkt mit Kevin.
          </p>

          <motion.a
            href="mailto:info@serviweb.ch"
            whileHover={{ y: -3, filter: 'brightness(1.1)', boxShadow: '0 0 0 1px rgba(59,130,246,0.7), 0 8px 40px rgba(37,99,235,0.7)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-bold text-white cursor-pointer"
            style={{
              background: 'linear-gradient(135deg,#2563EB 0%,#3B82F6 60%,#1D4ED8 100%)',
              boxShadow: '0 0 0 1px rgba(59,130,246,0.4), 0 6px 32px rgba(37,99,235,0.55)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Kostenlose Beratung vereinbaren
          </motion.a>

          {/* Supporting info */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Kostenlos & unverbindlich
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Antwort innerhalb 24h
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Direkt mit Kevin Schmid
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
