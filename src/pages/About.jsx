import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">About us</h1>
            <p className="mt-4 text-blue-100/90">Essenzialità, rigore e cura del dettaglio: è il nostro modo di lavorare.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <h3 className="text-white font-medium">Approccio</h3>
              <p className="mt-2 text-blue-100/80 leading-relaxed">
                Uniamo pensiero strategico e disciplina creativa. Ogni iniziativa nasce da obiettivi concreti, metriche chiare e un'esecuzione pulita.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <h3 className="text-white font-medium">Metodo</h3>
              <p className="mt-2 text-blue-100/80 leading-relaxed">
                Ricerca, prototipazione rapida, test e iterazioni. Preferiamo la semplicità, i processi leggeri e la trasparenza totale.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
