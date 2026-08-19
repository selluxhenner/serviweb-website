import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    // Plain <div> on purpose: a route-level enter/exit animation here is what
    // deadlocked AnimatePresence and left visitors on a white page. See App.tsx.
    <div>
      <Navbar />
      <main className="pt-16" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
