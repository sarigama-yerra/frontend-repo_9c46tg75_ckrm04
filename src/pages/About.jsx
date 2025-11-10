export default function About(){
  return (
    <main className="pt-6">
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Us</h1>
          <p className="mt-3 text-gray-700 max-w-3xl">GenDev IT is built by a team of young technologists with engineering, computer science, and cybersecurity backgrounds. Our mission is to make powerful digital tools accessible to small businesses, so they can compete and win with modern technology.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-gray-700">Make powerful digital tools accessible to small businesses.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-sm text-gray-700">Empower every local business to compete with modern technology.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">Values</h3>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>Innovation</li>
              <li>Simplicity</li>
              <li>Transparency</li>
              <li>Reliability</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
