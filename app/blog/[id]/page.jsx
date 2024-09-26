import React from 'react'

const page = ({params}) => {
    let {id} = params;
   return (
    <div>Blog {id}</div>
  )
}

export default page