import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='relative container mx-auto px-4 h-20 flex items-center z-50'>
        <nav className='flex items-center gap-6 text-lg'>
            <Link href='/sliders/1'>Slider 1</Link>
            <Link href='/sliders/2'>Slider 2</Link>
            <Link href='/sliders/3'>Slider 3</Link>
        </nav>
    </header>
  )
}
