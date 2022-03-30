import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductNote from './ProductNote'
const ProductImageComp = () => {
    const { productDetails } = useSelector((state) => state.product)
    const [width, setWidth] = useState();
    const detail = productDetails[0];
    console.log("our data is", detail)
    const breakpoint = 800;

    const handleResize = () =>{
         setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false)
    },[width])

    if(!detail) {
        return (
            <div className=" p-3 w-[50%] flex flex-col flex-1 left-[300px] absolute">
            Loading ......
            </div>
        )
    }

    return width < breakpoint ? (<div>Mobile View</div>) : (
        <div className='sm:hidden p-3 w-[50%] md:flex flex-col flex-1 left-[300px] absolute items-center'>
            <div className=''>
                <img src={detail.urls.raw}
                    alt="name"
                    className='p-1 '
                    loading='lazy' />
            </div>
            <div className='flex  mt-2 gap-10 '>
                <div>
                    <img src={detail.urls.small}
                        alt="small image"
                        className=''
                        loading='lazy' />
                </div>
                <div>
                    <img src={detail.urls.small}
                        alt="small image"
                        className=''
                        loading='lazy' />
                </div>
            </div>
            <div className='mt-2 flex'>
                <img src={detail.urls.small}
                    className=' p-1'
                    loading='lazy'
                />
            </div>
            <div className='mt-2'>
                <img src={detail.urls.small}
                    className=' p-1'
                    loading='lazy'
                />
            </div>
            {/* mobile design */}

            <div className='flex mt-10 px-4 mx-auto my-auto'>
                <p className='uppercase underline font-normal text-sm p-2'>JONATHAN SIMKHAI</p>
                <p className='uppercase underline font-normal text-sm p-2'>BLAZERS</p>
                <p className='uppercase underline font-normal text-sm p-2'>VISCOSE</p>
            </div>
            <ProductNote />
        </div>
    )
}

export const ProductImage = React.memo(ProductImageComp);

export default ProductImage