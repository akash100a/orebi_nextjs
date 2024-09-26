import Link from 'next/link'
import React from 'react'
import Item from './Item'
import getAllData from '../lib/getAllData'

const page = async () => {
      let AllPost = await getAllData();
  return (
    <div>
        Blog Here....
        <div className="mt-5">
            <ul className='flex flex-col gap-2'>
                {
                AllPost.map((item,index)=>{
                    return <Link key={index} href={`/blog/${item.id}`}>{item.title}</Link>
                })
                }
            </ul>
            <Item />
        </div>
    </div>
  )
}

export default page