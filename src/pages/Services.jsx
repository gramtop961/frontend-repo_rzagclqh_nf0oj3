import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Target, BarChart3, PenTool, LineChart, Megaphone, Rocket } from 'lucide-react'

const services = [
  { icon: Target, title: 'Strategia', desc: 'Analisi, posizionamento e roadmap per obiettivi chiari e misurabili.' },
  { icon: BarChart3, title: 'Paid Media', desc: 'Gestione campagne su Google, Meta, LinkedIn con focus su ROI.' },
  { icon: PenTool, title: 'Brand Design', desc: 'Identità visiva e linee guida pulite, coerenti e distintive.' },
  { icon: LineChart, title: 'SEO & Content', desc: 'Architettura informativa, keyword strategy e contenuti editoriali.' },
  { icon: Megaphone, title: 'Comunicazione', desc: 'Tone of voice, copywriting e concept creativi per ogni canale.' },
  { icon: Rocket, title: 'Go-To-Market', desc: 'Lancio di prodotti e servizi: messaggi, canali e automazioni.' }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Servizi</h1>
            <p className="mt-4 text-blue-100/90">Pacchetti modulari, pensati per essere essenziali e ad alto impatto.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-slate-900/50 p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
