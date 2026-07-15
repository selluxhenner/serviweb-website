import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Faq } from '../lib/seo'

/**
 * Accessible FAQ accordion. Renders answers in the DOM (open or closed) so the text
 * is crawlable and quotable by AI answer engines — pair with faq={...} on <SEO /> for
 * the matching FAQPage JSON-LD.
 */
export default function FAQ({
  items,
  title = 'Häufige Fragen',
  eyebrow = 'FAQ',
}: {
  items: Faq[]
  title?: string
  eyebrow?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-20 md:py-28" style={{ background: '#07101E' }} aria-label="Häufige Fragen">
      <div className="relative max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight mb-10">{title}</h2>

        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.question}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(13,21,38,0.72)', border: '1px solid rgba(59,130,246,0.12)' }}
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                  >
                    <span className="text-base font-bold text-white">{f.question}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
