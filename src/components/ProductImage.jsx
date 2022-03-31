import React, { useEffect, useState } from 'react'
import ProductNote from './ProductNote'
import MobileCarousel from './MobileCarousel'

const ProductImageComp = ({ detail }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth), false);
    })

    return width < breakpoint ? (<div><MobileCarousel detail={detail} /></div>) : (
        <div className='hidden p-3 w-[50%] md:flex flex-col flex-1 left-[300px] relative items-center'>
            <div>
                <img src={detail.urls.regular}
                    alt="product"
                    loading='lazy'
                />
            </div>
            <div className='flex  mt-2 gap-1'>
                <div>
                    <img src={detail.urls.small}
                        alt="product"
                        loading='lazy'
                    />
                </div>
                <div>
                    <img src={detail.urls.small}
                        alt="product"
                        loading='lazy'
                    />
                </div>
            </div>
            <div className='mt-2 flex'>
                <img src={detail.urls.regular}
                    loading='lazy'
                    alt="product"
                />
            </div>
            <div className='mt-2'>
                <img src={detail.urls.regular}
                    loading='lazy'
                    alt="product"
                />
            </div>
            <ProductNote />
        </div>
    )
}

export const ProductImage = React.memo(ProductImageComp);
export default ProductImage