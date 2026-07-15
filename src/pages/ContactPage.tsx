import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const inputCls = 'w-full px-4 py-3 rounded-xl text-sm placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2'
const inputStyle = {
  background: '#FFFFFF',
  border: '1px solid #CBD5E1',
  color: '#0F172A',
}
const inputFocusRing = { '--tw-ring-color': 'rgba(37,99,235,0.3)' } as React.CSSProperties

const PROJECT_TYPES = [
  'Restaurant / Bar Website',
  'Dienstleistungs-Website',
  'Online-Shop',
  'Mobile App',
  'Website + App Kombination',
  'SEO & Social Media',
  'Fotografie',
  'Sonstiges / Beratung',
]

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748B' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const CONTACT_ITEMS = [
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    label: 'Telefon',
    value: '+41 79 535 06 03',
    href: 'tel:+41795350603',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'E-Mail',
    value: 'info@serviweb.ch',
    href: 'mailto:info@serviweb.ch',
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Standort',
    value: 'Ostschweiz, Schweiz',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', type:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <PageLayout>
      <SEO
        title="Kontakt – Webdesign Anfrage St. Gallen"
        description="Starte dein Webprojekt mit Serviweb in St. Gallen. Kostenlose Erstberatung, Antwort innerhalb von 24 Stunden. Website, App oder Online-Shop für dein Unternehmen in der Ostschweiz."
        canonical="/kontakt"
        keywords="Webdesign Anfrage St. Gallen, Website Angebot Ostschweiz, Kontakt Serviweb, Webentwickler anfragen Schweiz, Kevin Schmid Kontakt"
        breadcrumbs={[{ name: 'Kontakt', url: '/kontakt' }]}
      />
      <Breadcrumbs items={[{ name: 'Kontakt', url: '/kontakt' }]} />
      <div className="relative py-20 md:py-28">

        <div className="relative max-w-5xl mx-auto px-6">

          {/* Header */}
          <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748B' }}>Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4" style={{ color: '#1E3A8A' }}>
              Projekt <span style={{ color: '#2563EB' }}>starten</span>
            </h1>
            <p className="text-lg max-w-lg leading-relaxed" style={{ color: '#64748B' }}>
              Erzähl mir von deinem Projekt. Ich melde mich innerhalb von <strong style={{ color: '#0F172A' }}>24 Stunden</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* ── Form ───────────────────────────────────────────────── */}
            <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7, delay:0.1 }} className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="success"
                    initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                    className="rounded-3xl p-12 text-center"
                    style={{ background:'#F1F5F9', border:'1px solid rgba(16,185,129,0.4)' }}>
                    <div className="rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
                      style={{ width:72, height:72 }}>
                      <svg className="w-9 h-9 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-black mb-3" style={{ color: '#1E3A8A' }}>Nachricht gesendet!</h2>
                    <p className="leading-relaxed max-w-sm mx-auto" style={{ color: '#64748B' }}>
                      Danke für deine Anfrage. Ich melde mich so schnell wie möglich – in der Regel innerhalb von 24 Stunden.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit}
                    className="rounded-3xl p-5 sm:p-8 space-y-6"
                    style={{ background:'#F1F5F9', border:'1px solid #E2E8F0' }}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Name *" id="name">
                        <input id="name" required value={form.name} onChange={set('name')}
                          placeholder="Max Muster" className={inputCls} style={{ ...inputStyle, ...inputFocusRing }} />
                      </FormField>
                      <FormField label="E-Mail *" id="email">
                        <input id="email" type="email" required value={form.email} onChange={set('email')}
                          placeholder="max@beispiel.ch" className={inputCls} style={{ ...inputStyle, ...inputFocusRing }} />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Telefon (optional)" id="phone">
                        <input id="phone" type="tel" value={form.phone} onChange={set('phone')}
                          placeholder="+41 79 000 00 00" className={inputCls} style={{ ...inputStyle, ...inputFocusRing }} />
                      </FormField>
                      <FormField label="Projektart" id="type">
                        <select id="type" value={form.type} onChange={set('type')}
                          className={inputCls + ' cursor-pointer'} style={{ ...inputStyle, ...inputFocusRing }}>
                          <option value="" disabled>Bitte wählen...</option>
                          {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </FormField>
                    </div>

                    <FormField label="Deine Nachricht *" id="message">
                      <textarea id="message" required rows={6} value={form.message} onChange={set('message')}
                        placeholder="Beschreib mir dein Projekt – was planst du, was ist dein Ziel? Je mehr Details, desto besser."
                        className={inputCls + ' resize-none'} style={{ ...inputStyle, ...inputFocusRing }} />
                    </FormField>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? {} : { y: -2 }}
                      whileTap={loading ? {} : { scale: 0.98 }}
                      className="w-full py-4 rounded-2xl font-bold text-white transition-opacity cursor-pointer flex items-center justify-center gap-3"
                      style={{
                        background: '#2563EB',
                        boxShadow: '0 4px 16px rgba(37,99,235,0.25)',
                        opacity: loading ? 0.8 : 1,
                      }}>
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center" style={{ color: '#94A3B8' }}>
                      Deine Daten werden vertraulich behandelt und nicht weitergegeben.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Contact Info ────────────────────────────────────────── */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7, delay:0.2 }} className="space-y-4">

              {/* Availability */}
              <div className="rounded-2xl p-5 flex items-center gap-4"
                style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.3)' }}>
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" style={{ animation:'pulse 2s infinite' }} />
                <div>
                  <p className="text-emerald-700 font-bold text-sm">Aktuell verfügbar</p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>Antwort innerhalb von 24h</p>
                </div>
              </div>

              {CONTACT_ITEMS.map(item => (
                <div key={item.label} className="rounded-2xl p-5"
                  style={{ background:'#F1F5F9', border:'1px solid #E2E8F0' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background:'rgba(37,99,235,0.1)' }}>
                      <svg className="w-5 h-5" style={{ color:'#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748B' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href}
                          className="font-semibold text-sm transition-colors cursor-pointer hover:opacity-80"
                          style={{ color: '#1E3A8A' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: '#1E3A8A' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* What to expect */}
              <div className="rounded-2xl p-5"
                style={{ background:'#F1F5F9', border:'1px solid #E2E8F0' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#64748B' }}>Was passiert als nächstes?</p>
                <div className="space-y-3">
                  {[
                    { step:'1', text:'Du sendest deine Anfrage' },
                    { step:'2', text:'Ich melde mich innerhalb von 24h' },
                    { step:'3', text:'Kostenloses Erstgespräch' },
                    { step:'4', text:'Konkretes Angebot & Start' },
                  ].map(s => (
                    <div key={s.step} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background:'rgba(37,99,235,0.1)', color: '#2563EB' }}>{s.step}</span>
                      <span className="text-sm" style={{ color: '#0F172A' }}>{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
