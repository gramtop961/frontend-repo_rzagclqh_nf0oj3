import { motion } from 'framer-motion'
import { Target, BarChart3, PenTool } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Strategia & Positioning',
    desc: 'Definizione chiara del posizionamento, messaggi e canali per parlare alle persone giuste.'
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Campagne orientate al ROI su Google, Meta e LinkedIn con ottimizzazione continua.'
  },
  {
    icon: PenTool,
    title: 'Brand & Content',
    desc: 'Identità visuale, copy e contenuti che uniscono estetica e conversione.'
  }
]

export default function Features() {
  return (
    <section id="servizi" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(37,99,235,0.2),transparent),radial-gradient(600px_300px_at_80%_100%,rgba(2,6,23,0.6),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Cosa facciamo</h2>
          <p className="mt-4 text-blue-100/90">Soluzioni essenziali, costruite per crescere con il tuo business.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center mb-4">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
