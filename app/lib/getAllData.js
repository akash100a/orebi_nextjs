const getAllData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(response.ok){
        let data = response.json()
        return data;
        // Returning data promise
    }else{
        throw new Error("Ther Was An Error fetching posts");
        
    }
}

export default getAllData