import Container from '@/app/Container'
import getData from '@/app/lib/getData'
import Image from 'next/image'
import Bag from '../../../public/products/bag.png'
import Tree from '../../../public/tree.jpg'
import DefaultBlur from '@/app/components/blur/static/DefaultBlur'
import StaticBlur from '@/app/components/blur/static/StaticBlur'
import DynamicBlur from '@/app/components/blur/dynamic/DynamicBlur'
import DynamiColor from '@/app/components/blur/dynamic/DynamiColor'

const page = async ({ params }) => {
    let { id } = params
    let getproduct = await getData(id)
    return (
        <>
            <Container>
                <div className="grid grid-cols-2 grid-rows-2 gap-10">
                    <div className="">
                        <DynamicBlur className='w-[780px] h-[780px] object-contain' width={780} height={780} src={getproduct.thumbnail} alt="aa" />
                    </div>
                    <div className="">
                        <DynamicBlur className='w-[780px] h-[780px] object-contain' width={780} height={780} src={getproduct.thumbnail} alt="vv" />
                    </div>
                    <div className="">
                        <DynamicBlur className='w-[780px] h-[780px] object-contain' width={780} height={780} src={getproduct.thumbnail} alt="dd" />
                    </div>
                    <div className="">
                        <DynamicBlur className='w-[780px] h-[780px] object-contain' width={780} height={780} src={getproduct.thumbnail} alt="vv" />
                    </div>
                </div>



{/* 
                <div className='w-[1200px] h-[900px]'>
                    <h1>Default</h1>
                    <DefaultBlur src={Tree} />
                </div>
                <div className='w-[1200px] h-[900px]'>
                    <h1>Own Static</h1>
                    <StaticBlur src='/tree.jpg' width='1200' height='900'/>
                </div>
                <div className='w-[1200px] h-[900px]'>
                    <h1>Own Static Color</h1>
                    <StaticBlur src='/tree.jpg' width='1200' height='900'/>
                </div> */}
{/* 
                <br />
                <br />
                <br />

                <div className='w-[1200px] h-[900px]'>
                    <h1>Dynamic Default</h1>
                    <DynamicBlur src={getproduct.thumbnail} width='1200' height='900'/>
                </div> */}

            </Container>
        </>
    )
}

export default page