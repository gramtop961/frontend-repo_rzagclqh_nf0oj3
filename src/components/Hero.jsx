import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            Strategie che trasformano attenzione in crescita
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-blue-100 text-lg leading-relaxed"
          >
            Siamo un'agenzia di marketing full‑service: performance, brand e contenuti. Minimalismo elegante, risultati misurabili.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#contatti" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">Parliamo del tuo progetto</a>
            <a href="#servizi" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">I nostri servizi</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
