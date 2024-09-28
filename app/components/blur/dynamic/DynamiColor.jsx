import Image from 'next/image'
import React from 'react'
import { getPlaiceholder } from 'plaiceholder'


const  DynamiColor = async({src,width,height}) => {
    const buffer = await fetch(src).then( async(res)=>{
        return Buffer.from(await res.arrayBuffer())
    })
    const { color } = await getPlaiceholder(buffer);
    return (
    <div style={{backgroundColor: color.hex}}>
        <Image 
        src={src}
        alt={src}
        width={width}
        height={height}
        />
    </div>
  )
}

export default DynamiColor