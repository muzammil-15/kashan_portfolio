import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Me from '@/components/Me'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonail from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero/>
      <Me/>
      <Projects/>
      <Services/>
      <Testimonail/>


    </main>
  )
}
