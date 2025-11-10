import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded bg-[#E53935]" />
            <span className="text-xl font-bold">GenDev IT</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">Powering Future Tech for local businesses. We build modern websites, automation, SEO, branding, and AI-driven marketing that help you grow.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> info@gendevit.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +1 (xxx) xxx-xxxx</li>
            <li>San Ramon • Dublin • Pleasanton • Bay Area</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition" aria-label="Facebook"><Facebook size={18}/></a>
            <a href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} GenDev IT. All rights reserved.</div>
    </footer>
  )
}
