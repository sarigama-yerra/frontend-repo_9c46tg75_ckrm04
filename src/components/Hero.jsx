import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/70 backdrop-blur rounded-xl p-6 sm:p-8 shadow-lg border border-white/60">
          <p className="text-xs uppercase tracking-widest text-[#E53935] font-semibold">GenDev IT</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mt-2">Powering Future Tech</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">We help local businesses modernize, automate, and grow with digital solutions built for impact.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-[#E53935] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">Get a Free Website Audit</Link>
            <Link to="/contact" className="inline-flex items-center rounded-md border border-gray-300 text-black px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition">Book a Consultation</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
