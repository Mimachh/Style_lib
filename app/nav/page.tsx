import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Link href='/nav/1'>Nav 1</Link>
        <Link href='/nav/2'>Nav 2</Link>
        <Link href='/nav/3'>Nav 3</Link>
    </div>
  )
}

export default Page