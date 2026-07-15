import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

const FEATURES = [
  { icon:'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title:'Tägliche Ziele', desc:'Setze dir täglich erreichbare Ziele und hake sie der Reihe nach ab.', color:'#EC4899' },
  { icon:'M13 10V3L4 14h7v7l9-11h-7z', title:'Streak-System', desc:'Halte deinen Streak am Leben – täglich Ziele erledigen hält die Motivation hoch.', color:'#F59E0B' },
  { icon:'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title:'Statistiken', desc:'Wöchentliche und monatliche Auswertungen zeigen Muster und Fortschritte.', color:'#8B5CF6' },
  { icon:'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title:'Gewohnheits-Tracker', desc:'Etabliere neue Gewohnheiten mit dem täglichen Check-in-System.', color:'#06B6D4' },
  { icon:'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', title:'Smarte Erinnerungen', desc:'Push-Notifications zum richtigen Zeitpunkt – nicht zu oft, aber genau dann wenn du sie brauchst.', color:'#10B981' },
  { icon:'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title:'Motivation & Belohnungen', desc:'Virtuelle Badges und Meilensteine für erreichte Ziele sorgen für anhaltende Motivation.', color:'#F97316' },
]

export default function DailyGoalsPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageLayout>
      <SEO
        title="Daily Goals – Ziele & Gewohnheiten App"
        description="Daily Goals ist eine App für tägliche Ziele, Gewohnheits-Tracking und persönliche Produktivität. Entwickelt von Kevin Schmid (Serviweb) in der Ostschweiz / St. Gallen."
        canonical="/projekte/daily-goals"
        keywords="Daily Goals App, Gewohnheits App, Produktivitäts App Schweiz, Ziele App, App Entwicklung Ostschweiz, Kevin Schmid Serviweb"
      />
      <div className="relative">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{ background:'#070B14' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2  h-[600px] rounded-full"
              style={{ background:'radial-gradient(circle,rgba(236,72,153,0.14) 0%,rgba(139,92,246,0.08) 50%,transparent 70%)', filter:'blur(80px)' }} />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <Link to="/projekte" className="mr-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-10 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Zurück zu Projekten
            </Link>

            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-sm font-bold"
              style={{ background:'linear-gradient(135deg,rgba(236,72,153,0.15),rgba(139,92,246,0.1))', border:'1px solid rgba(236,72,153,0.35)', color:'#F9A8D4' }}>
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              In Entwicklung – Coming Soon
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Daily{' '}
              <span style={{ background:'linear-gradient(135deg,#EC4899,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Goals
              </span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
              className="text-xl text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
              Die App für tägliche Ziele, Gewohnheiten und persönliches Wachstum. Motivierend, simpel, effektiv.
            </motion.p>

            {/* Progress bar */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
              className="max-w-sm mx-auto mb-10">
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Entwicklungsfortschritt</span>
                <span>65%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                <motion.div
                  initial={{ width: 0 }} animate={{ width: '65%' }}
                  transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background:'linear-gradient(90deg,#EC4899,#8B5CF6)' }} />
              </div>
            </motion.div>

            {/* Email signup */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-semibold text-emerald-400"
                    style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Wir benachrichtigen dich beim Launch!
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={(e) => { e.preventDefault(); if(email) setSubmitted(true) }}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="deine@email.ch"
                      className="flex-1 px-5 py-3.5 rounded-2xl text-sm text-white placeholder-slate-600 outline-none transition-colors duration-200"
                      style={{ background:'rgba(13,21,38,0.9)', border:'1px solid rgba(236,72,153,0.25)' }}
                    />
                    <motion.button type="submit"
                      whileHover={{ y:-2 }} whileTap={{ scale:0.97 }}
                      className="px-6 py-3.5 rounded-2xl text-sm font-bold text-white cursor-pointer flex-shrink-0"
                      style={{ background:'linear-gradient(135deg,#EC4899,#8B5CF6)', boxShadow:'0 4px 20px rgba(236,72,153,0.35)' }}>
                      Beim Launch benachrichtigen
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
              <p className="text-xs text-slate-600 mt-3">Kein Spam. Nur eine Nachricht beim Launch.</p>
            </motion.div>
          </div>
        </section>

        {/* ── Feature Preview ───────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ background:'#07101E' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:'-60px' }} transition={{ duration:0.7 }} className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold"
                style={{ background:'rgba(236,72,153,0.1)', border:'1px solid rgba(236,72,153,0.25)', color:'#F9A8D4' }}>
                Feature-Vorschau
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Was Daily Goals bieten wird</h2>
              <p className="text-slate-400 max-w-md mx-auto">Alle geplanten Features auf einen Blick – entwickelt mit echtem Nutzerfeedback.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:'-40px' }}
                  transition={{ duration:0.55, delay: i * 0.07 }}
                  className="rounded-2xl p-6 relative overflow-hidden"
                  style={{ background:'rgba(13,21,38,0.76)', border:`1px solid ${f.color}18` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background:`${f.color}14`, boxShadow:`0 0 18px ${f.color}25` }}>
                    <svg className="w-5 h-5" style={{ color:f.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  {/* Coming soon overlay hint */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
                      style={{ background:`${f.color}20`, color:f.color }}>GEPLANT</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── App Preview Mockup ────────────────────────────────────────── */}
        <section className="py-20" style={{ background:'#070B14' }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-12">
              <h2 className="text-3xl font-black text-white mb-3">App-Vorschau</h2>
              <p className="text-slate-500 text-sm">Frühe Design-Konzepte. Das finale Design kann abweichen.</p>
            </motion.div>

            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.8 }}
              className="inline-block relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem]"
                style={{ background:'radial-gradient(ellipse,rgba(236,72,153,0.25) 0%,transparent 70%)', filter:'blur(40px)', transform:'scale(1.3)' }} />

              {/* Phone */}
              <div className="relative w-44 sm:w-56 rounded-[3rem] p-3"
                style={{ background:'rgba(13,21,38,0.95)', border:'1px solid rgba(236,72,153,0.3)', boxShadow:'0 0 0 1px rgba(236,72,153,0.15), 0 40px 100px rgba(236,72,153,0.2)' }}>
                <div className="rounded-[2.4rem] overflow-hidden" style={{ background:'#0A0F1E', minHeight:'420px' }}>
                  <div className="p-4 pt-7">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <p className="text-white font-black text-base">Heute</p>
                        <p className="text-[10px] text-slate-600">Freitag, 25. April</p>
                      </div>
                      <div className="text-right">
                        <p className="text-pink-400 font-black text-xl">🔥 7</p>
                        <p className="text-[10px] text-slate-600">Tage Streak</p>
                      </div>
                    </div>

                    {/* Progress ring */}
                    <div className="flex justify-center mb-5">
                      <div className="relative w-24 h-24">
                        <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(236,72,153,0.1)" strokeWidth="3" />
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#pink-grad)" strokeWidth="3"
                            strokeDasharray="75 100" strokeLinecap="round" />
                          <defs>
                            <linearGradient id="pink-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#EC4899" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-white font-black text-lg leading-none">75%</span>
                          <span className="text-[8px] text-slate-500">erledigt</span>
                        </div>
                      </div>
                    </div>

                    {/* Goals */}
                    {[
                      { label:'30 min Sport', done:true, color:'#10B981' },
                      { label:'Buch lesen', done:true, color:'#3B82F6' },
                      { label:'Meditation', done:false, color:'#EC4899' },
                      { label:'Kalt duschen', done:false, color:'#F59E0B' },
                    ].map(g => (
                      <div key={g.label} className="flex items-center gap-2.5 mb-2 px-3 py-2 rounded-xl"
                        style={{ background:g.done ? `${g.color}12` : 'rgba(255,255,255,0.03)', border:`1px solid ${g.done ? g.color+'25' : 'rgba(255,255,255,0.05)'}` }}>
                        <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                          style={{ background: g.done ? g.color : 'transparent', border: g.done ? 'none' : `2px solid ${g.color}50` }}>
                          {g.done && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className={`text-[11px] font-medium ${g.done ? 'line-through' : 'text-slate-300'}`}
                          style={{ color: g.done ? g.color + '80' : undefined }}>{g.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────────── */}
        <section className="py-16" style={{ background:'#07101E' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6 }}>
              <h2 className="text-2xl font-black text-white mb-8">Geplanter Launch</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {[
                  { phase:'Beta', date:'Q3 2026', status:'geplant', color:'#8B5CF6' },
                  { phase:'App Store', date:'Q4 2026', status:'geplant', color:'#3B82F6' },
                  { phase:'Android', date:'Q4 2026', status:'geplant', color:'#10B981' },
                ].map(p => (
                  <div key={p.phase} className="flex-1 rounded-2xl p-5"
                    style={{ background:'rgba(13,21,38,0.76)', border:`1px solid ${p.color}20` }}>
                    <div className="text-lg font-black mb-1" style={{ color:p.color }}>{p.phase}</div>
                    <div className="text-white font-semibold text-sm mb-1">{p.date}</div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider">{p.status}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-sm mt-10 mb-4">Interesse an ähnlichen Apps?</p>
              <Link to="/kontakt">
                <motion.span whileHover={{ y:-2 }} whileTap={{ scale:0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white cursor-pointer"
                  style={{ background:'linear-gradient(135deg,#EC4899,#8B5CF6)', boxShadow:'0 4px 24px rgba(236,72,153,0.35)', display:'inline-flex' }}>
                  App-Projekt besprechen
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}
