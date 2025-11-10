import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import WhyUs from '../components/WhyUs'
import ServicesOverview from '../components/ServicesOverview'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <main>
      <Hero />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Built for Local Business Impact</h2>
          <p className="text-gray-700 max-w-3xl">GenDev IT is a youthful, tech-forward team helping small businesses go digital fast. From websites and branding to AI-driven marketing and automation, we create simple, effective systems that bring in customers and save time.</p>
        </div>
      </section>
      <Trusted />
      <WhyUs />
      <ServicesOverview />
      <Testimonials />
    </main>
  )
}
