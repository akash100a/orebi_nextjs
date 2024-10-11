import React from 'react'

const Home = () => {
  let ar = ["rimjim","Akash","Aeyat"]
  let newar= ar.map((val)=>{
    return val.toLowerCase()
  })
  console.log(ar);
  console.log(newar);
  console.log(newar.includes("rimjim"));
  console.log(newar.indexOf("aeyat",-1));
  
  return (
    <div>Home Page</div>
  )
}

export default Home