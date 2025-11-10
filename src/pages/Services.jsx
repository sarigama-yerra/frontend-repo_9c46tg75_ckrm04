export default function Services(){
  const sections = [
    { title: 'Website Development', body: 'Modern, mobile-friendly websites with SEO-ready content and branding.' },
    { title: 'AI-Driven Marketing', body: 'AI-powered content, automated campaigns, targeting, and analytics.' },
    { title: 'SEO & Local Visibility', body: 'Google Business setup, local SEO, keyword planning, and review management.' },
    { title: 'Chatbots & Automation', body: 'Lead capture chatbots for booking, FAQs, and customer responses.' },
    { title: 'Social Media Setup & Branding', body: 'Launch Instagram, Facebook & TikTok with brand kits and a first-month posting plan.' },
    { title: 'Support & Analytics', body: 'Ongoing help, updates, dashboard analytics, and optimization.' },
  ]

  return (
    <main className="pt-6">
      <section className="bg-[#E53935] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Services</h1>
          <p className="text-white/90 mt-2 max-w-2xl">Simple, focused offerings designed for local business growth. No fluff — just outcomes.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          {sections.map((s, i) => (
            <div key={s.title} className="p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold">{i+1}. {s.title}</h2>
              <p className="text-gray-700 mt-2">{s.body}</p>
              <ul className="text-sm text-gray-600 mt-3 list-disc pl-5 space-y-1">
                {s.title === 'Website Development' && (
                  <>
                    <li>Mobile-first, fast-loading, secure</li>
                    <li>On-brand design with clear CTAs</li>
                    <li>SEO-ready copy and structure</li>
                  </>
                )}
                {s.title === 'AI-Driven Marketing' && (
                  <>
                    <li>Content calendars auto-generated with AI</li>
                    <li>Email/SMS sequences and campaign automation</li>
                    <li>Analytics dashboards to track performance</li>
                  </>
                )}
                {s.title === 'SEO & Local Visibility' && (
                  <>
                    <li>Google Business Profile setup & optimization</li>
                    <li>Local citations and review strategy</li>
                    <li>Keyword plan tailored to your area</li>
                  </>
                )}
                {s.title === 'Chatbots & Automation' && (
                  <>
                    <li>Lead capture with instant notifications</li>
                    <li>Booking, FAQs, and customer support flows</li>
                    <li>CRM handoff and tagging</li>
                  </>
                )}
                {s.title === 'Social Media Setup & Branding' && (
                  <>
                    <li>Brand kits: logo, colors, fonts, templates</li>
                    <li>Launch Instagram, Facebook, TikTok</li>
                    <li>30-day starter posting plan</li>
                  </>
                )}
                {s.title === 'Support & Analytics' && (
                  <>
                    <li>Ongoing updates and small enhancements</li>
                    <li>Monthly performance reviews</li>
                    <li>Conversion optimization sprints</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
