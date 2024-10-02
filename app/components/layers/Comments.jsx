import React from 'react'

const Comments = async ({commentPromise}) => {
    let comm = await commentPromise.comments;
    let commentsall = await comm;
    return (
        <ul className="my-5">
            {
                commentsall.map((item) => (
                    <>
                        <li>Post Comment : {item.body}</li>
                        <li>Post Email : {item.email}</li>
                    </>
                ))
            }
        </ul>
    )
}

export default Comments