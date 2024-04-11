import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='relative container mx-auto px-4 h-20 flex flex-col items-center z-50'>
          <Link href='/'>Accueil</Link>
        <nav className='flex items-center gap-6 text-lg'>
            <Link href='/sliders/1'>Slider 1</Link>
            <Link href='/sliders/2'>Slider 2</Link>
            <Link href='/sliders/3'>Slider 3</Link>
        </nav>
        <nav className='flex items-center gap-6 text-lg'>
            <Link href='/cards/1'>Card 1</Link>
        </nav>

        <nav className='flex items-center gap-6 text-lg'>
            <Link href='/effects/magnetic'>Magnetic effect</Link>
        </nav>

        <nav className='flex items-center gap-6 text-lg'>
            <Link href='/effects/zoom'>Zoom effect</Link>
        </nav>

        
    </header>
  )
}
