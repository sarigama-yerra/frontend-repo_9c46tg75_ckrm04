import { ShieldCheck, Users, Rocket } from 'lucide-react'

export default function Trusted() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[#E53935] font-semibold">Trusted by local businesses</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-gray-500">
          {[ShieldCheck, Users, Rocket, ShieldCheck, Users, Rocket].map((Icon, i) => (
            <div key={i} className="h-12 rounded bg-gray-100/80 border border-gray-200/80 flex items-center justify-center">
              <Icon size={22}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
