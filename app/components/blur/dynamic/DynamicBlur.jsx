import Image from 'next/image'
import React from 'react'
import { getPlaiceholder } from 'plaiceholder'


const  DynamicBlur = async({src,width,height}) => {
    const buffer = await fetch(src).then( async(res)=>{
        return Buffer.from(await res.arrayBuffer())
    })
    const {base64} = await getPlaiceholder(buffer);
    return (
    <div>
        <Image 
        src={src}
        placeholder='blur'
        alt={src}
        width={width}
        height={height}
        blurDataURL={base64}
        />
    </div>
  )
}

export default DynamicBlur