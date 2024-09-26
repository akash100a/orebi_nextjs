const getAllData = async () => {
    let response = await fetch(`https://dummyjson.com/products/`)
    let data = await response.json()
    let prod = await data.products
    return await prod
}

export default getAllData