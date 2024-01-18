import Hero from '@/components/Hero'
import Me from '@/components/Me'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero/>
      <Me/>
    </main>
  )
}
