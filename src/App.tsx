import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  )
}

// The router lives outside App: main.tsx wraps it in a BrowserRouter for the
// client, entry-server.tsx in a StaticRouter for build-time prerendering.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}
