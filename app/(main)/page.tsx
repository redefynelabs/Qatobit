import Comparison from '@/components/Home/Comparison'
import Coverage from '@/components/Home/Coverage'
import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import Process from '@/components/Home/Process'
import SecuritySection from '@/components/Home/Security'
import Testimonials from '@/components/Home/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Coverage />
      <Process />
      <Comparison />
      <SecuritySection />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default page
