import Link from 'next/link'
import React from 'react'

const Li = ({liText,to,className}) => {
  return (
    <>
        <li>
            <Link  className={`font-normal text-sm text-[#767676] font-dm ${className}`} href={to}>{liText}</Link>
        </li>
    </>
  )
}

export default Li