import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase = 'text-sm font-medium transition-colors'
  const activeClass = 'text-[#E53935]'
  const inactiveClass = 'text-gray-700 hover:text-black'

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'bg-white/80 backdrop-blur border-b border-gray-200' : 'bg-white/60 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-[#E53935]" />
          <span className="text-lg sm:text-xl font-bold tracking-tight">GenDev <span className="text-[#E53935]">IT</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Home</NavLink>
          <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Services</NavLink>
          <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>About</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Portfolio</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Contact</NavLink>
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="inline-flex items-center rounded-md bg-[#E53935] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition">Book a Consultation</Link>
        </div>

        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 grid gap-2">
            <NavLink onClick={() => setOpen(false)} to="/" end className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/portfolio" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Portfolio</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={({isActive}) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>Contact</NavLink>
            <Link onClick={() => setOpen(false)} to="/contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-[#E53935] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition">Free Website Audit</Link>
          </div>
        </div>
      )}
    </header>
  )
}
