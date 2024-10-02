import Comments from '@/app/components/layers/Comments';
import Container from '@/app/components/layers/Container';
import getAllComments from '@/app/lib/getAllComments';
import getComment from '@/app/lib/getComment';
import getData from '@/app/lib/getData';
import React, { Suspense } from 'react'

export let generateMetadata = async ({ params }) => {
    const { id } = params;
    let post = await getData(id);
    return {
        title: `${id} ${post.title}`,
        description: `Des: ${post.body}`,
    }
}
const page = async ({ params }) => {
    const { id } = params;
    let postPromise = await getData(id);
    let commentPromise = await getAllComments(id);
    let post = await postPromise;
    // let [post, comment] = await Promise.all([postPromise, commentPromise]);
    // console.log(comment);

    return (
        <>
            <Container>
                <h2>Single Post</h2>
                <ul className='my-3'>
                    <li>Post Title : {post.title}</li>
                    <li>Post Body : {post.body}</li>
                </ul>
                <hr />

                <Suspense fallback='<h1>Loading Comments</h1>'>
                    <Comments commentPromise={commentPromise}/>
                </Suspense>

            </Container>
        </>
    )
}

export default page