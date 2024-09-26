import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className='flex gap-4'>
        <h1>Blog Page</h1>
        </nav>
        {children}
    </div>
  )
}

export default layout