import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductNote from './ProductNote'
import MobileCarousel from './MobileCarousel'
const ProductImageComp = ({ detail }) => {
    const [width, setWidth] = useState();
    const breakpoint = 800;

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false)
    }, [width])

    return width < breakpoint ? (<div><MobileCarousel /></div>) : (
        <div className='hidden p-3 w-[50%] md:flex flex-col flex-1 left-[300px] absolute items-center'>
            <div className=''>
                <img src={detail.urls.regular}
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
                <img src={detail.urls.regular}
                    className=' p-1'
                    loading='lazy'
                />
            </div>
            <div className='mt-2'>
                <img src={detail.urls.regular}
                    className=' p-1'
                    loading='lazy'
                />
            </div>
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