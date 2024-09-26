import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className='flex gap-4'>
            <Link href='/about/mission'>Mission</Link>
            <Link href='/about/vission'>Vission</Link>
            <Link href='/about/action'>Action</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout