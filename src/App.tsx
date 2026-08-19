import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home                from './pages/Home'
import ProjectsPage        from './pages/ProjectsPage'
import VocafyPage          from './pages/VocafyPage'
import SchoolCompanionPage from './pages/SchoolCompanionPage'
import DailyGoalsPage      from './pages/DailyGoalsPage'
import ServicesPage        from './pages/ServicesPage'
import ContactPage         from './pages/ContactPage'
import ImpressumPage       from './pages/ImpressumPage'
import DatenschutzPage     from './pages/DatenschutzPage'
import LocationPage        from './pages/LocationPage'
import NotFoundPage        from './pages/NotFoundPage'

import { LOCATIONS }       from './data/locations'
import { markHydrated }    from './lib/hydrated'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    // No <AnimatePresence> here, deliberately.
    //
    // It used to wrap these routes with mode="wait", which renders ONLY the
    // outgoing page until that page reports its exit animation finished. When
    // that report never arrived — Framer Motion drives it from
    // requestAnimationFrame, and the page components are nested several levels
    // below AnimatePresence rather than being its direct motion children — the
    // incoming page was never mounted. The result was a permanently white
    // screen with the old page still in the DOM at opacity:0, and the URL
    // already changed. A cosmetic cross-fade is not worth a failure mode that
    // can strand a visitor on a blank page, so routes now render directly.
    <Routes location={location}>
        <Route path="/"                            element={<Home />} />
        <Route path="/projekte"                    element={<ProjectsPage />} />
        <Route path="/projekte/vocafy"             element={<VocafyPage />} />
        <Route path="/projekte/school-companion"   element={<SchoolCompanionPage />} />
        <Route path="/projekte/daily-goals"        element={<DailyGoalsPage />} />
        <Route path="/leistungen"                  element={<ServicesPage />} />

        {/* Location landing pages (Ostschweiz, Wil, Toggenburg) */}
        {LOCATIONS.map((loc) => (
          <Route key={loc.slug} path={loc.slug} element={<LocationPage data={loc} />} />
        ))}

        <Route path="/kontakt"                     element={<ContactPage />} />
        <Route path="/impressum"                   element={<ImpressumPage />} />
        <Route path="/datenschutz"                 element={<DatenschutzPage />} />

        {/* Catch-all: prerendered to dist/404.html; nginx serves it with HTTP 404 */}
        <Route path="*"                            element={<NotFoundPage />} />
      </Routes>
  )
}

// The router lives outside App: main.tsx wraps it in a BrowserRouter for the
// client, entry-server.tsx in a StaticRouter for build-time prerendering.
export default function App() {
  // After the first client render the prerendered markup is live React; from
  // here on entrance animations are safe to play (see lib/hydrated.ts).
  useEffect(() => { markHydrated() }, [])

  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}
