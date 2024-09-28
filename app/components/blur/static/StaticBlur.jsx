import Image from 'next/image'
import React from 'react'
import { getPlaiceholder } from 'plaiceholder'
import fs from "node:fs/promises"

const StaticBlur = async({src,width,height}) => {
    const buffer = await fs.readFile(`./public${src}`)
    const {base64} = await getPlaiceholder(buffer);
    return (
    <>
        <Image 
        src={src}
        placeholder='blur'
        alt={src}
        width={width}
        height={height}
        blurDataURL={base64}
        />
    </>
  )
}

export default StaticBlur