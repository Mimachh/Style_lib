import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='relative container mx-auto px-4 h-20 flex items-center z-50'>
          <nav className='flex items-center gap-4'>
            <Link href='/'>Accueil</Link>
              <Link href='/sliders/1'>Slider 1</Link>
              <Link href='/sliders/2'>Slider 2</Link>
              <Link href='/sliders/3'>Slider 3</Link>

              <Link href='/cards/1'>Card</Link>
              <Link href='/effects/magnetic'>Magnetic effect</Link>
              <Link href='/effects/zoom'>Zoom effect</Link>

              <Link href='/effects/parallax/1'>Parallax effect 1</Link>
              <Link href='/effects/parallax/2'>Parallax effect 2</Link>

              <Link href='/effects/hover/1'>Effet de survol 1</Link>
          </nav>

        
    </header>
  )
}
