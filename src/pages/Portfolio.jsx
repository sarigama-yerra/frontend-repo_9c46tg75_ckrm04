export default function Portfolio(){
  const projects = [
    { title: 'Landscaping Business Website', result: 'Mobile-first design + SEO → +40% calls' },
    { title: 'Plumbing Company Local SEO', result: 'Google Business overhaul → 3× visibility' },
    { title: 'Bakery Social Launch', result: 'Branding + Instagram → 60% more foot traffic' },
    { title: 'Tutoring Center Chatbot', result: 'Automated booking → 50% less admin work' },
  ]

  return (
    <main className="pt-6">
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Portfolio</h1>
          <p className="mt-2 text-gray-700">Selected outcomes from projects we love — created for local service businesses.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="h-40 rounded-md bg-gray-100 border border-gray-200 mb-4" />
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{p.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
