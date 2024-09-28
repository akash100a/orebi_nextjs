import Image from 'next/image'
import React from 'react'
import { getPlaiceholder } from 'plaiceholder'
import fs from "node:fs/promises"

const ColorBlur = async() => {
    const buffer = await fs.readFile(`./public${src}`)
    const {color} = await getPlaiceholder(buffer);
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

export default ColorBlur