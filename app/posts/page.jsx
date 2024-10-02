import React from 'react'
import Link from 'next/link';
import getAllData from '../lib/getAllData';
import Container from '../components/layers/Container';

const page = async () => {
    let posts = await getAllData();
    // console.log(posts);

    return (
        <>
            <Container>
                <div>POSTS</div>
                <ul className='my-4'>
                    {
                        posts.map((item) => (
                            <li key={item.div}>
                                <Link href={`/posts/${item.id}`}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </>
    )
}

export default page