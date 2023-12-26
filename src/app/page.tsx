import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='h-screen flex bg-gradient-to-br from-gray-700 to-gray-900 py-12 text-white'>

        <div className='mx-auto w-full max-w-7xl px-6 '>
            <Button variant={'destructive'} >click me</Button>

        </div>
    </section>
  )
}
