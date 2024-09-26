import Link from 'next/link'
import React from 'react'
import Item from './Item'

const page = () => {
    let products =[
        {
            id:1,
            title: "blog 1"
        },
        {
            id:2,
            title: "blog 2"
        },
        {
            id:3,
            title: "blog 3"
        },
        {
            id:4,
            title: "blog 4"
        },
        {
            id:5,
            title: "blog 5"
        }
    ]
  return (
    <div>
        Blog Here....
        <div className="mt-5">
            <ul className='flex flex-col gap-2'>
                {products.map((item)=>{
                    return <Link key={item.id} href={`/blog/${item.id}`}>{item.title}</Link>
                })}
            </ul>
            <Item />
        </div>
    </div>
  )
}

export default page