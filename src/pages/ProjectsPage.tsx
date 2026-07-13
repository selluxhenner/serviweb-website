import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
  Variants,
} from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'

import tigerImg      from '../assets/images/projects/tiger.jpg'
import pianobarImg   from '../assets/images/projects/pianobar.jpg'
import trinkstubeImg from '../assets/images/projects/trinkstube.jpg'
import happytunesImg from '../assets/images/projects/happytunes.jpg'
import visionWilImg  from '../assets/images/projects/vision-wil.jpg'
import skiserviceImg from '../assets/images/projects/skiservice-joel.jpg'
import disruptecImg  from '../assets/images/projects/disruptec.jpg'

import vocafyImg     from '../assets/images/social/vocafy.png'
import schoolImg     from '../assets/images/social/school-companion.png'
import dailyGoalsImg from '../assets/images/social/daily-goals.png'
import kantiImg      from '../assets/images/social/kanti-companion.png'

import noctraImg     from '../assets/images/projects/noctra.jpg'
import artsImg       from '../assets/images/projects/arts.jpg'
import grillkammerImg from '../assets/images/projects/grillkammer.jpg'
import rebstockImg   from '../assets/images/projects/rebstock.jpg'
import swissMeatImg  from '../assets/images/projects/swiss-meat-resti.png'
import djOstschweizImg from '../assets/images/projects/dj-ostschweiz.jpg'
import ironandcutImg from '../assets/images/projects/iron&edge.jpg'
import kapitel4Img   from '../assets/images/projects/kapitel4.jpg'
import terrassenBistroImg from '../assets/images/projects/bistro-zwingen.jpg'
import saentisKebabImg from '../assets/images/projects/säntis-kebab.jpg'



// ── Spotlight card ────────────────────────────────────────────────────────────

function SpotlightCard({ children, href, to, className, style }: {
  children: React.ReactNode
  href?: string
  to?: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, rgba(59,130,246,0.12), transparent 70%)`

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }
  const onLeave = () => { mx.set(-300); my.set(-300) }

  const inner = (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden ${className ?? ''}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.38)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none z-20" style={{ background: spotlight }} />
    </motion.div>
  )

  if (to) return <Link to={to} className="block cursor-pointer h-full">{inner}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer h-full">{inner}</a>
  return <div className="h-full">{inner}</div>
}

// ── Data ──────────────────────────────────────────────────────────────────────

const WEBSITES = [
  {
    name: 'Tiger Wil', subtitle: 'Thai Restaurant in Wil', url: 'tiger-wil.ch', category: 'Restaurant',
    desc: 'Moderne Website mit umfassendem Menü, Galerie und Reservierungsfunktion.',
    features: ['Menü-Übersicht', 'Bildergalerie', 'Öffnungszeiten', 'Kontakt & Standort'],
    image: tigerImg,
  },
  {
    name: 'ILGE Piano Bar', subtitle: 'Bar & Event Location', url: 'ilge-pianobar.ch', category: 'Bar',
    desc: 'Elegante Website mit Event-Kalender, Getränkekarte und stimmungsvoller Galerie.',
    features: ['Event-Bereich', 'Getränkekarte', 'Galerie', 'Social Media Integration'],
    image: pianobarImg,
  },
  {
    name: 'Trinkstube zum Hartz', subtitle: 'Traditionelle Bar', url: 'trinkstubezumhartz.ch', category: 'Bar',
    desc: 'Authentische Website für die traditionsreiche Bar mit gemütlichem Design.',
    features: ['Über uns', 'Öffnungszeiten', 'Kontaktformular', 'Standort-Integration'],
    image: trinkstubeImg,
  },
  {
    name: 'DJ Happy Tunes', subtitle: 'DJ & Entertainment', url: 'djhappytunes.com', category: 'Entertainment',
    desc: 'Dynamische Portfolio-Website für DJ mit Musikproben, Event-Historie und Buchungsanfrage.',
    features: ['Portfolio', 'Musikproben', 'Event-Liste', 'Buchungsformular'],
    image: happytunesImg,
  },
  {
    name: 'VISION KUNST CAFÉBAR', subtitle: 'Urban Bar & Event – Wil', url: 'vision-wil.ch', category: 'Café & Bar',
    desc: 'Premium-Cocktails, Barista-Kaffee und Industrial-Art-Atmosphäre vereint in einem modernen Webauftritt.',
    features: ['Galerie', 'Event-Kalender', 'Kontaktformular', 'Social Media Integration'],
    image: visionWilImg,
  },
  {
    name: 'Ski Service Joel', subtitle: 'Skiservice in Wil', url: 'skiservice-joel.ch', category: 'Service',
    desc: 'Professionelle Skiservice-Website mit Terminplanung, Service-Übersicht und Kontaktformular.',
    features: ['Terminplanung', 'Service-Übersicht', 'Kontaktformular', 'Responsive Design'],
    image: skiserviceImg,
  },
  {
  name: 'DISRUPTEC',
  subtitle: 'Premium PC Manufaktur Schweiz',
  url: 'disruptec.serviweb.ch',
  category: 'Kundenwebsite',
  desc: 'High-End Website für eine Schweizer PC-Manufaktur mit Fokus auf Performance, Präzision und individuelles Branding.',
  features: ['Gaming PC Showcase', 'Custom Builds', 'Dark Premium Design', 'Responsive UI'],
  image: disruptecImg,
},
]


const TEMPLATES = [
  {
    name: 'Noctra',
    subtitle: 'Dunkles Premium Showcase Design',
    url: 'noctra.serviweb.ch',
    category: 'Top Design',
    desc: 'Elegantes Showcase-Design mit dunkler Ästhetik und modernen Animationen.',
    features: ['Dark UI', 'Smooth Animationen', 'Premium Look', 'Responsive Design'],
    image: noctraImg,
  },
  {
    name: 'Arts',
    subtitle: 'Künstlerisches Showcase Design',
    url: 'arts.serviweb.ch',
    category: 'Top Design',
    desc: 'Kreatives und modernes Webdesign mit künstlerischem Fokus.',
    features: ['Creative Layout', 'Moderne Typografie', 'Animationen', 'Responsive Design'],
    image: artsImg,
  },
  {
    name: 'Grillkammer',
    subtitle: 'Bold Restaurant Showcase',
    url: 'grillkammer.serviweb.ch',
    category: 'Restaurant',
    desc: 'Atmosphärisches Restaurant-Design mit Fokus auf Food und Erlebnis.',
    features: ['Hero Section', 'Food Galerie', 'Restaurant Branding', 'Mobile Optimiert'],
    image: grillkammerImg,
  },
  {
    name: 'Rebstock',
    subtitle: 'Modernes Restaurant Design',
    url: 'rebstock.serviweb.ch',
    category: 'Restaurant',
    desc: 'Warme und stilvolle Website für Gastronomie und Events.',
    features: ['Event Bereich', 'Galerie', 'Modernes UI', 'Responsive Design'],
    image: rebstockImg,
  },
  {
    name: 'Swiss Meat Resti',
    subtitle: 'Premium Steakhouse Showcase',
    url: 'swiss-meat-resti.serviweb.ch',
    category: 'Restaurant',
    desc: 'Kraftvolles und hochwertiges Restaurantdesign mit Fokus auf Branding.',
    features: ['Premium Design', 'Food Showcase', 'Dark Theme', 'Animationen'],
    image: swissMeatImg,
  },
  {
  name: 'DJ Ostschweiz',
  subtitle: 'Event & Hochzeit DJ Showcase',
  url: 'dj-ostschweiz.serviweb.ch',
  category: 'Entertainment',
  desc: 'Dynamische Event-Website mit modernem Design und Fokus auf Stimmung und Events.',
  features: ['Event Showcase', 'Animationen', 'Mobile Optimiert', 'Kontaktbereich'],
  image: djOstschweizImg,
},
{
  name: 'Iron&Edge',
  subtitle: 'Bold Barbershop Showcase',
  url: 'ironandedge.serviweb.ch',
  category: 'Barbershop',
  desc: 'Maskulines und modernes Showcase-Design für Barber- und Lifestyle-Brands.',
  features: ['Dark Theme', 'Premium Look', 'Smooth Animationen', 'Responsive Design'],
  image: ironandcutImg,
},
{
  name: 'Kapitel 4',
  subtitle: 'Modernes Café & Bar Design',
  url: 'kapitel4.serviweb.ch',
  category: 'Restaurant',
  desc: 'Atmosphärisches Showcase-Design mit Fokus auf Interior, Drinks und Branding.',
  features: ['Editorial Layout', 'Animationen', 'Galerie', 'Modernes UI'],
  image: kapitel4Img,
},

{
  name: 'Terrassen Bistro',
  subtitle: 'Modernes Outdoor Bistro Design',
  url: 'terrassen-bistro.serviweb.ch',
  category: 'Restaurant',
  desc: 'Elegantes Bistro-Design mit sonniger Terrasse, moderner Typografie und stilvoller Atmosphäre.',
  features: ['Tischreservierung', 'Speisekarte', 'Galerie', 'Modernes UI'],
  image: terrassenBistroImg,
},
{
  name: 'Säntis Kebab',
  subtitle: 'Kebab & Pizzeria Website',
  url: 'säntis-kebab.serviweb.ch',
  category: 'Restaurant',
  desc: 'Moderne und schnelle Restaurant-Website mit Fokus auf Bestellungen und mobile Nutzer.',
  features: ['Speisekarte', 'Kontakt & Standort', 'Mobile Optimiert', 'Call-to-Action'],
  image: saentisKebabImg,
},
]

const APPS: {
  name: string; subtitle: string; url: string | null; desc: string; tags: string[]
  image: string; store: boolean; comingSoon: boolean; detailPath: string | null
}[] = [
  {
    name: 'Kanti Companion', subtitle: 'Begleit-App für Kantischüler', url: null,
    desc: 'Begleit-App für Kantischüler mit Stundenplan, Noten-Tracking und organisatorischen Tools.',
    tags: ['React Native', 'Offline-Modus', 'Kalender', 'Benachrichtigungen'],
    image: kantiImg, store: false, comingSoon: false, detailPath: null,
  },
  {
    name: 'School Companion', subtitle: 'Umfassende Schul-App', url: null,
    desc: 'Umfassende Schul-App mit Hausaufgabenverwaltung, Notizen und Stundenplänen.',
    tags: ['React Native', 'Cloud-Sync', 'Aufgaben-Manager', 'Kalender'],
    image: schoolImg, store: true, comingSoon: false, detailPath: '/projekte/school-companion',
  },
  {
    name: 'Daily Goals', subtitle: 'Motivations-App', url: null,
    desc: 'Motivations-App zum Setzen und Verfolgen von täglichen Zielen und Gewohnheiten.',
    tags: ['React Native', 'Gewohnheits-Tracking', 'Statistiken'],
    image: dailyGoalsImg, store: true, comingSoon: true, detailPath: '/projekte/daily-goals',
  },
]

// ── Variants ──────────────────────────────────────────────────────────────────

const grid: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }
const gridItem: Variants = {
  hidden: { opacity: 1, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
}
// ── Cards ─────────────────────────────────────────────────────────────────────

const cardStyle: React.CSSProperties = {
  background: 'rgba(13,21,38,0.76)', border: '1px solid rgba(59,130,246,0.1)',
  backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
}

function WebCard({ p }: { p: typeof WEBSITES[0] }) {
  return (
    <motion.div variants={gridItem} className="h-full">
      <SpotlightCard href={`https://${p.url}`} className="rounded-2xl h-full" style={cardStyle}>
        <div className="h-48 relative overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[rgba(13,21,38,0.9)] to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-black/40"
            style={{ backdropFilter: 'blur(6px)' }}>
            {p.category}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(7,11,20,0.62)' }}>
            <span className="text-white text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Website öffnen
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-white text-lg leading-tight mb-0.5">{p.name}</h3>
          <p className="text-xs text-slate-500 mb-3">{p.subtitle}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.features.map(f => (
              <span key={f} className="text-[10px] text-slate-500 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/40">{f}</span>
            ))}
          </div>
          <p className="text-[11px] text-blue-400/70 font-medium">{p.url}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

function TemplateCard({ p }: { p: typeof TEMPLATES[0] }) {
  return (
    <motion.div variants={gridItem} className="h-full">
      <SpotlightCard href={`https://${p.url}`} className="rounded-2xl h-full" style={cardStyle}>
        <div className="h-48 relative overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[rgba(13,21,38,0.9)] to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-black/40"
            style={{ backdropFilter: 'blur(6px)' }}>
            {p.category}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(7,11,20,0.62)' }}>
            <span className="text-white text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Website öffnen
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-white text-lg leading-tight mb-0.5">{p.name}</h3>
          <p className="text-xs text-slate-500 mb-3">{p.subtitle}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.features.map(f => (
              <span key={f} className="text-[10px] text-slate-500 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/40">{f}</span>
            ))}
          </div>
          <p className="text-[11px] text-blue-400/70 font-medium">{p.url}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

function AppCard({ p }: { p: typeof APPS[0] }) {
  return (
    <motion.div variants={gridItem} className="h-full">
      <SpotlightCard to={p.detailPath ?? undefined} href={!p.detailPath && p.url ? `https://${p.url}` : undefined}
        className="rounded-2xl h-full" style={cardStyle}>
        <div className="h-48 relative overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[rgba(13,21,38,0.9)] to-transparent pointer-events-none" />
          {p.comingSoon && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-amber-400/30 bg-amber-400/10">
              Coming Soon
            </div>
          )}
          {p.detailPath && !p.comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(7,11,20,0.62)' }}>
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                Details ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-bold text-white text-lg leading-tight mb-0.5">{p.name}</h3>
          <p className="text-xs text-slate-500 mb-3">{p.subtitle}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map(t => (
              <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-blue-500/20 bg-blue-500/8 text-blue-300">{t}</span>
            ))}
          </div>
          {p.store ? (p.comingSoon ? (
            <span className="text-xs text-slate-600 italic">Demnächst im App Store & Play Store</span>
          ) : (
            <div className="flex gap-2">
              {[['M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z', 'App Store'],
              ['M3.18 23.76c.4.22.87.22 1.27 0l9.9-5.62v-3.5L3.18 23.76zM21.83 10.5c-.4-.22-.87-.22-1.27 0l-1.38.8-3.51 2L21.83 10.5zM3.18.24C2.78.46 2.5.88 2.5 1.34v21.32c0 .46.28.88.68 1.1l11.17-11.88L3.18.24zm17.38 9.16l-2.16-1.23-3.17-1.8L3.95.04l-.77-.04 13.23 11.89 4-2.23z', 'Play Store']].map(([d, label]) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40">
                  <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                  <span className="text-[10px] text-slate-400 font-medium">{label}</span>
                </div>
              ))}
            </div>
          )) : null}
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── Featured Vocafy hero card ──────────────────────────────────────────────────

function FeaturedVocafy() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Link to="/projekte/vocafy" className="block group cursor-pointer">
        <motion.div
          whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.38)' }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(13,21,38,0.76)', border: '1px solid rgba(59,130,246,0.15)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="flex flex-col md:flex-row" style={{ minHeight: 300 }}>
            {/* Image */}
            <div className="relative h-60 md:h-auto md:w-[44%] overflow-hidden flex-shrink-0">
              <img src={vocafyImg} alt="Vocafy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none hidden md:block"
                style={{ background: 'linear-gradient(to right, transparent 55%, rgba(13,21,38,0.92) 100%)' }} />
              <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none md:hidden"
                style={{ background: 'linear-gradient(to top, rgba(13,21,38,1) 0%, transparent 100%)' }} />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-amber-300"
                  style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', backdropFilter: 'blur(8px)' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Flagship-Projekt
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#93C5FD' }}>
                Web & Mobile · Eigenes Projekt
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                Voca<span style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>fy</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">
                Interaktive Lernplattform zum Erstellen und Üben von Vokabeln – mit Benutzerkonten, Fortschrittsverfolgung und eigenem Learning-Algorithmus. Verfügbar im App Store und Google Play.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Node.js', 'React', 'MySQL', 'iOS & Android', 'Benutzerkonten', 'Spaced Repetition'].map(t => (
                  <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-blue-500/20 bg-blue-500/8 text-blue-300">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                    </svg>
                  vocafy.ch
                </span>
                <span className="text-slate-700">·</span>
                <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1.5">
                  Zum Projekt
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'websites', label: 'Kundenwebsites', count: WEBSITES.length },
  { id: 'apps', label: 'Eigene Apps', count: APPS.length },
  { id: 'featured', label: '★ Featured', count: 1 },
  { id: 'templates', label: 'Templates', count: TEMPLATES.length },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'websites' | 'apps' | 'featured' | 'templates'>('websites')

  return (
    <PageLayout>
      <SEO
        title="Projekte – Websites & Apps aus St. Gallen"
        description="Webdesign- und App-Entwicklungsprojekte von Serviweb: Restaurants, lokale Unternehmen und eigene Produkte aus St. Gallen und der Ostschweiz. Referenzen von Kevin Schmid."
        canonical="/projekte"
        keywords="Webdesign Projekte St. Gallen, Website Referenzen Ostschweiz, App Entwicklung Projekte, Vocafy, School Companion, Kevin Schmid Serviweb"
      />
      <div className="relative py-20 md:py-28">

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2  h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
              Alle{' '}
              <span style={{
                background: 'linear-gradient(135deg,#93C5FD 0%,#A78BFA 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                Projekte
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Websites für lokale Unternehmen in der Ostschweiz und eigene Mobile-Apps – hier siehst du, was ich bisher gebaut habe.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { value: '6', label: 'Kundenwebsites', color: '#3B82F6' },
              { value: '4', label: 'Eigene Apps', color: '#8B5CF6' },
              { value: '50+', label: 'Projekte gesamt', color: '#06B6D4' },
              { value: '100%', label: 'Zufriedene Kunden', color: '#10B981' },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-3 sm:p-5 text-center"
                style={{ background: 'rgba(13,21,38,0.76)', border: '1px solid rgba(59,130,246,0.1)' }}>
                <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl w-fit"
            style={{ background: 'rgba(13,21,38,0.7)', border: '1px solid rgba(59,130,246,0.12)' }}
            role="tablist">
            {TABS.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as 'websites' | 'apps' | 'featured')}
                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-200"
                style={{ color: activeTab === tab.id ? 'white' : 'rgba(148,163,184,0.8)' }}>
                {activeTab === tab.id && (
                  <motion.div layoutId="page-tab-pill" className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#3B82F6)', boxShadow: '0 4px 16px rgba(37,99,235,0.4)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${activeTab === tab.id ? 'bg-white/20' : 'bg-slate-700/60'}`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'websites' && (
              <motion.div key="websites" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  initial="hidden" animate="visible" variants={grid}>
                  {WEBSITES.map(p => <WebCard key={p.name} p={p} />)}
                </motion.div>
                <p className="mt-8 text-center text-sm text-slate-600">
                  Klick auf eine Website-Karte, um die live Website zu besuchen.
                </p>
              </motion.div>
            )}
            {activeTab === 'apps' && (
              <motion.div key="apps" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  initial="hidden" animate="visible" variants={grid}>
                  {APPS.map(p => <AppCard key={p.name} p={p} />)}
                </motion.div>
                <p className="mt-8 text-center text-sm text-slate-600">
                  Apps mit Detail-Seite zeigen beim Hover einen Pfeil — klick drauf für mehr Infos.
                </p>
              </motion.div>
            )}
            {activeTab === 'featured' && (
              <motion.div key="featured" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <FeaturedVocafy />
                <p className="mt-6 text-center text-xs text-slate-600">
                  Weitere Featured-Projekte folgen.
                </p>
              </motion.div>
            )}
            {activeTab === 'templates' && (
              <motion.div key="templates" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  initial="hidden" animate="visible" variants={grid}>
                  {TEMPLATES.map(p => <TemplateCard key={p.name} p={p} />)}
                </motion.div>
                <p className="mt-8 text-center text-sm text-slate-600">
                  Klick auf eine Vorlage, um sie zu sehen.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 text-center">
            <div className="rounded-3xl p-6 sm:p-10 md:p-14"
              style={{
                background: 'linear-gradient(135deg,rgba(37,99,235,0.12) 0%,rgba(139,92,246,0.08) 100%)',
                border: '1px solid rgba(59,130,246,0.2)'
              }}>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Dein Projekt hier?</h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Lass uns gemeinsam etwas aufbauen – Website, App oder beides.</p>
              <Link to="/kontakt">
                <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white cursor-pointer"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#3B82F6)', boxShadow: '0 4px 24px rgba(37,99,235,0.45)', display: 'inline-flex' }}>
                  Projekt starten
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}
