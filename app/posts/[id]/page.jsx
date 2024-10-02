import Container from '@/app/components/layers/Container';
import getData from '@/app/lib/getData';
import React from 'react'

const page = async ({ params }) => {
    const { id } = params;
    let post = await getData(id);
    return (
        <>
            <Container>
                <h2>Single Post</h2>
                <ul className='my-3'>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            </Container>
        </>
    )
}

export default page