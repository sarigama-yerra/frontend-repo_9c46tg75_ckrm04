export default function Testimonials(){
  const items = [
    { quote: 'GenDev IT revamped our website and we saw calls jump in weeks.', author: 'Owner, GreenLeaf Landscaping' },
    { quote: 'Their chatbot cut back-and-forth and booked us more appointments.', author: 'Manager, City Plumbing' },
    { quote: 'They launched our socials and we had real customers walking in.', author: 'Founder, SweetCrust Bakery' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <blockquote key={i} className="p-6 rounded-xl border border-gray-200 bg-white">
              <p className="text-gray-800 italic">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
