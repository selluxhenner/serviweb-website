import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Navbar />
      <main className="pt-16" style={{ background: '#070B14', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </motion.div>
  )
}
