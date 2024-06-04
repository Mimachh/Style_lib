import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="cursors/1">Cursor 1</Link>
        <Link href="cursors/2">Cursor 2</Link>
    </div>
  )
}

export default page