import { Globe, Brain, MapPin, Bot, Megaphone, BarChart3 } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Modern, mobile-friendly websites with SEO-ready content and branding.' },
  { icon: Brain, title: 'AI-Driven Marketing', desc: 'AI-powered content, automated campaigns, targeting, and analytics.' },
  { icon: MapPin, title: 'SEO & Local Visibility', desc: 'Google Business setup, local SEO, keyword planning, and review management.' },
  { icon: Bot, title: 'Chatbots & Automation', desc: 'Lead capture chatbots for booking, FAQs, and customer responses.' },
  { icon: Megaphone, title: 'Social Media Setup & Branding', desc: 'Launch Instagram, Facebook & TikTok with brand kits and a first-month posting plan.' },
  { icon: BarChart3, title: 'Support & Analytics', desc: 'Ongoing help, updates, dashboard analytics, and optimization.' },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon:Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-sm transition">
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
