import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import FAQ from '../components/FAQ'
import { serviceSchema } from '../lib/seo'
import { LOCATIONS, type LocationData } from '../data/locations'

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const SERVICES_IN_REGION = [
  { label: 'Webdesign & Website-Entwicklung', to: '/leistungen#website' },
  { label: 'App-Entwicklung (iOS & Android)', to: '/leistungen#app' },
  { label: 'SEO & lokale Auffindbarkeit', to: '/leistungen#seo' },
  { label: 'Fotografie für Web & Social Media', to: '/leistungen#fotografie' },
]

export default function LocationPage({ data }: { data: LocationData }) {
  const others = LOCATIONS.filter((l) => l.slug !== data.slug)

  return (
    <PageLayout>
      <SEO
        title={data.title}
        description={data.metaDescription}
        canonical={data.slug}
        keywords={data.keywords}
        breadcrumbs={[{ name: `Webdesign ${data.city}`, url: data.slug }]}
        faq={data.faq}
        jsonLd={[
          serviceSchema({
            name: `Webdesign ${data.city}`,
            serviceType: 'Webdesign & Webentwicklung',
            description: data.lead,
            url: data.slug,
            areaServed: data.areaServed,
          }),
        ]}
      />

      <Breadcrumbs items={[{ name: `Webdesign ${data.city}`, url: data.slug }]} />

      {/* ── Hero / extractable answer ─────────────────────────────────── */}
      <section className="relative py-16 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#2563EB' }}>Webagentur · {data.city}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6" style={{ color: '#1E3A8A' }}>{data.h1}</h1>
            <p className="text-lg leading-relaxed mb-5" style={{ color: '#0F172A' }}>{data.lead}</p>
            {data.intro.map((p) => (
              <p key={p} className="text-base leading-relaxed mb-4" style={{ color: '#64748B' }}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/kontakt"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-white cursor-pointer"
                style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
                Kostenlose Beratung <Arrow />
              </Link>
              <Link to="/projekte"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold cursor-pointer"
                style={{ border: '1px solid #CBD5E1', background: '#FFFFFF', color: '#1E3A8A' }}>
                Referenzen ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights ────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20" style={{ background: '#F1F5F9' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.highlights.map((h) => (
              <motion.article key={h.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-6"
                style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <h2 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>{h.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{h.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services + local context ──────────────────────────────────── */}
      <section className="relative py-16 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-5" style={{ color: '#1E3A8A' }}>Leistungen in {data.city}</h2>
            <ul className="space-y-3" role="list">
              {SERVICES_IN_REGION.map((s) => (
                <li key={s.to}>
                  <Link to={s.to}
                    className="flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-colors group hover:border-blue-300"
                    style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#0F172A' }}>
                    <span className="text-sm font-semibold">{s.label}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform" style={{ color: '#2563EB' }}><Arrow /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-5" style={{ color: '#1E3A8A' }}>Region {data.city}</h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>
              Serviweb betreut Unternehmen in {data.city} und Umgebung – unter anderem in:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {data.nearby.map((n) => (
                <span key={n} className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', color: '#1E3A8A' }}>{n}</span>
              ))}
            </div>
            <div className="rounded-2xl p-6" style={{ background: '#F1F5F9', border: '1px solid #E2E8F0' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#64748B' }}>Weitere Regionen</p>
              <ul className="space-y-2" role="list">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={o.slug} className="text-sm transition-colors hover:opacity-80" style={{ color: '#2563EB' }}>
                      Webdesign {o.city}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/leistungen" className="text-sm transition-colors hover:opacity-80" style={{ color: '#2563EB' }}>
                    Alle Leistungen ansehen
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={data.faq} title={`Häufige Fragen – Webdesign ${data.city}`} />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-24 text-center" style={{ background: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#1E3A8A' }}>
            Bereit für Ihre neue Website in {data.city}?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: '#64748B' }}>
            Kostenlose und unverbindliche Erstberatung – direkt mit Kevin Schmid. Antwort meist innerhalb von 24 Stunden.
          </p>
          <Link to="/kontakt"
            className="inline-flex items-center gap-2.5 px-9 py-5 rounded-2xl text-base font-bold text-white cursor-pointer"
            style={{ background: '#2563EB', boxShadow: '0 6px 24px rgba(37,99,235,0.3)' }}>
            Projekt starten <Arrow />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
