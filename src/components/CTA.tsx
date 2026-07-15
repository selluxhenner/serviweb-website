import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#FFFFFF' }}
      aria-label="Kontakt aufnehmen"
    >
      {/* Soft background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
        }}
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
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="text-xs font-medium" style={{ color: '#0F172A' }}>Bereit loszulegen</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6" style={{ color: '#1E3A8A' }}>
            Bereit für dein <span style={{ color: '#2563EB' }}>Projekt?</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Lass uns gemeinsam deine Online-Präsenz auf das nächste Level bringen.
            Kostenlose Erstberatung – direkt mit Kevin.
          </p>

          <motion.a
            href="mailto:info@serviweb.ch"
            whileHover={{ y: -3, filter: 'brightness(1.08)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-bold text-white cursor-pointer"
            style={{
              background: '#2563EB',
              boxShadow: '0 6px 24px rgba(37,99,235,0.3)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Kostenlose Beratung vereinbaren
          </motion.a>

          {/* Supporting info */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8 text-sm" style={{ color: '#64748B' }}>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Kostenlos & unverbindlich
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Antwort innerhalb 24h
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
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
