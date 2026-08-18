import { motion } from 'framer-motion'
import { hasHydrated } from '../lib/hydrated'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <motion.div
      // On the very first paint render visible — otherwise the whole page
      // ships as opacity:0 and stays white until the bundle hydrates.
      initial={hasHydrated() ? { opacity: 0, y: 14 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Navbar />
      <main className="pt-16" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </motion.div>
  )
}
