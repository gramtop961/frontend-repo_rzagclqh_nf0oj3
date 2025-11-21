import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive ? 'text-white bg-blue-600/20' : 'text-blue-100 hover:text-white hover:bg-blue-600/10'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight">Apex Marketing</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/services" className={linkClasses}>Servizi</NavLink>
          <NavLink to="/about" className={linkClasses}>About us</NavLink>
        </nav>

        <button className="md:hidden text-blue-100" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={linkClasses} onClick={() => setOpen(false)}>Servizi</NavLink>
            <NavLink to="/about" className={linkClasses} onClick={() => setOpen(false)}>About us</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
