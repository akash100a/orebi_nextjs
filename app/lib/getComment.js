const getComment = async (id) => {
    let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        {
            // default cache
            // cache:"force-cache", 

            // no cache
            // cache:"no-store", 
            // interval cache

            next : {
                revalidate : 10 ,
            } 

        }
    )
    if(response.ok){
        let data = response.json()
        return data;
        // Returning data promise
    }else{
        throw new Error("Ther Was An Error fetching Comments");
        
    }
}

export default getComment
