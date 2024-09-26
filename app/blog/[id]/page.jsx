import React from 'react'
import Item from '../Item';
import getAllData from '@/app/lib/getAllData';
import getData from '@/app/lib/getData';

const page = async ({ params }) => {
  let { id } = params;
  let Post = await getData(id);
  return (
    <>
      {id}
      <ul>
          <li>{Post.title}</li>
      </ul>
    </>

  );
}
export default page