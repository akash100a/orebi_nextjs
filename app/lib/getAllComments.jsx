const getAllComments = async (id) => {
    let response = await fetch(`https://dummyjson.com/comments?limit=0&skip=0&select=body${id}`)
    if(response.ok){
        let data = response.json()
        return data;
        // Returning data promise
    }else{
        throw new Error("Ther Was An Error fetching Comments");
        
    }
}

export default getAllComments
