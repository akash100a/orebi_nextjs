
import Container from '@/app/Container'
import getData from '@/app/lib/getData'
import Image from 'next/image'
import Bag from '../../../public/products/bag.png'

const page = async ({ params }) => {
    let { id } = params
    let getproduct = await getData(id)
    console.log(getproduct.title);
    
    return (
        <>
            <Container>
                <h1>{getproduct.title}</h1>
                <h1>{getproduct.price}</h1>
                <h1>{getproduct.thumbnail}</h1>
            </Container>
        </>
    )
}

export default page