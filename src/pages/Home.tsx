import { motion } from 'framer-motion'
import Hero     from '../components/Hero'
import Services from '../components/Services'
import Values   from '../components/Values'
import Pricing  from '../components/Pricing'
import Projects from '../components/Projects'
import FAQ      from '../components/FAQ'
import CTA      from '../components/CTA'
import Footer   from '../components/Footer'
import SEO      from '../components/SEO'
import type { Faq } from '../lib/seo'

// Brand-entity + service FAQ — feeds FAQPage schema and gives AI answer engines
// (ChatGPT, Gemini, Claude, Perplexity) self-contained, quotable answers.
const HOME_FAQ: Faq[] = [
  {
    question: 'Was ist Serviweb?',
    answer:
      'Serviweb ist eine persönliche Webagentur aus der Ostschweiz, gegründet von Kevin Schmid. Serviweb entwickelt moderne Websites und mobile Apps mit React und Next.js für Restaurants, Bars und lokale Unternehmen in St. Gallen, Wil, im Toggenburg und der ganzen Ostschweiz.',
  },
  {
    question: 'Wer steckt hinter Serviweb?',
    answer:
      'Hinter Serviweb steht Kevin Schmid, Webentwickler und Designer aus der Ostschweiz. Kunden arbeiten direkt mit ihm zusammen – ohne Agentur-Overhead und ohne wechselnde Ansprechpartner.',
  },
  {
    question: 'Was kostet eine Website bei Serviweb?',
    answer:
      'Websites starten ab CHF 890.– für eine professionelle Landing Page. Mehrseitige Unternehmenswebsites liegen meist zwischen CHF 1’500.– und CHF 4’000.–. Jedes Projekt erhält vorab ein transparentes Fixpreis-Angebot.',
  },
  {
    question: 'Welche Regionen betreut Serviweb?',
    answer:
      'Serviweb betreut Unternehmen in der gesamten Ostschweiz – darunter St. Gallen, Wil, das Toggenburg, der Thurgau und Appenzell. Treffen sind persönlich vor Ort oder online möglich.',
  },
  {
    question: 'Mit welcher Technologie arbeitet Serviweb?',
    answer:
      'Serviweb entwickelt mit React und Next.js – modernen Web-Technologien für schnelle Ladezeiten, gute Google-Werte (Core Web Vitals) und langfristig wartbare Websites und Web-Apps.',
  },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Webdesign & App-Entwicklung aus der Ostschweiz"
        description="Serviweb – Webdesign & Webagentur aus der Ostschweiz. Kevin Schmid entwickelt moderne Websites & Apps mit React und Next.js für Unternehmen in St. Gallen, Wil & im Toggenburg. Persönlich, schnell, fair."
        canonical="/"
        faq={HOME_FAQ}
      />
      <Hero />
      <Services />
      <Values />
      <Pricing />
      <Projects />
      <FAQ items={HOME_FAQ} title="Häufige Fragen zu Serviweb" />
      <CTA />
      <Footer />
    </motion.div>
  )
}
