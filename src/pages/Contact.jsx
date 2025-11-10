import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit - no backend required for this prompt
    setTimeout(() => setStatus('Thanks! We will get back to you within 24 hours.'), 800)
  }

  return (
    <main className="pt-6">
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s Power Your Future Tech</h1>
            <p className="mt-3 text-gray-700">Tell us about your business and we’ll share quick wins and a simple plan forward.</p>
            <div className="mt-6 text-sm text-gray-700 space-y-1">
              <p>Email: <span className="font-medium">info@gendevit.com</span></p>
              <p>Phone: <span className="font-medium">+1 (xxx) xxx-xxxx</span></p>
              <p>Service area: San Ramon, Dublin, Pleasanton, Bay Area</p>
              <a href="#form" className="inline-block mt-4 rounded-md bg-[#E53935] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition">Book a Free Consultation</a>
            </div>
          </div>

          <form id="form" onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm grid gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input name="name" onChange={handleChange} value={form.name} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E53935]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" onChange={handleChange} value={form.email} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E53935]" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input name="phone" onChange={handleChange} value={form.phone} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E53935]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" onChange={handleChange} value={form.message} rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E53935]"></textarea>
            </div>
            <button className="rounded-md bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-900 transition">Send Message</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}
