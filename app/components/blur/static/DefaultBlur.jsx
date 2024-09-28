import Image from 'next/image'
import React from 'react'

const DefaultBlur = ({src}) => {
  return (
    <>
        <Image 
        src={src}
        placeholder='blur'
        alt={src}
        />
    </>
  )
}

export default DefaultBlur