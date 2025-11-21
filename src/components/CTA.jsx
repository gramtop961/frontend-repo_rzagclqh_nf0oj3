import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contatti" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-white text-2xl sm:text-3xl font-semibold"
          >
            Pronto a fare il prossimo passo?
          </motion.h3>
          <p className="mt-3 text-blue-100">Prenota una call di 30 minuti: capiremo obiettivi, priorità e piano d'azione.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">Prenota una call</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Scrivici su email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
