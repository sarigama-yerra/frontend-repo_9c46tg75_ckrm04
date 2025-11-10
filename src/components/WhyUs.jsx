import { Cpu, Zap, Gauge, Sparkles, Shield, Headset } from 'lucide-react'

const items = [
  { icon: Cpu, title: 'Young Tech-Driven Team', desc: 'Built by engineers with a passion for solving real business problems.' },
  { icon: Zap, title: 'Affordable', desc: 'Smart, modular packages designed for small business budgets.' },
  { icon: Gauge, title: 'Fast Delivery', desc: 'Launch in weeks, not months — momentum matters.' },
  { icon: Sparkles, title: 'AI-Powered', desc: 'Use automation to create content, capture leads, and optimize performance.' },
  { icon: Shield, title: 'Reliable', desc: 'Clear communication, transparent scope, and solid QA.' },
  { icon: Headset, title: 'End-to-End Support', desc: 'From discovery to growth — we’re your long-term partner.' },
]

export default function WhyUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 hover:shadow-sm transition bg-white">
              <div className="h-10 w-10 rounded bg-[#E53935]/10 text-[#E53935] flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
