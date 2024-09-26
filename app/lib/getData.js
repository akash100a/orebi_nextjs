const getData = async (id) => {
    let response = await fetch(`https://dummyjson.com/products/${id}`)
    let data = await response.json()
    return await data
}

export default getData