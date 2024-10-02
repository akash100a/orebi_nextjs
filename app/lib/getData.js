const getData = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data = response.json()
    return data;
}

export default getData