import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const sizes = [{ id: '1', name: 'XS' },
{ id: '2', name: 'S' },
{ id: '3', name: 'M' },
{ id: '4', name: 'L' },
{ id: '5', name: 'XXL' }]

const ProductCard = ({ detail }) => {

    return (
        <div className='flex flex-col ml-auto mr-auto p-3 min-h-screen md:w-[25%]  md:fixed right-0 '>
            {/* product name and description */}
            <div className='w-[288px] h-[92px] static'>
                <h2 className='uppercase text-black text-5xl font-normal tracking-tighter'>JONATHAN SIMKHAI</h2>
            </div>
            <div className='static w-[254px] h-[52px] mt-2'>
                <p className='font-normal  text-sm '>Lurex Linen Viscose Jacket in Conchiglia</p>
                <h2 className='font-bold mt-2 text-sm uppercase'>$225</h2>
            </div>
            {/* product color and product image */}
            <div className='flex-col py-2'>
                <p className='uppercase font-bold text-sm text-black'>Color <span className='text-gray-700 uppercase text-sm font-normal leading-none'>Conchiglia</span></p>
                <div className='flex p-1 gap-3'>
                    <div className=''>
                        <img src={detail.urls.thumb} className='w-[130px] h-[120px] rounded-md' />
                    </div>
                    <div className=''>
                        <img src={detail.urls.thumb}  className='w-[100px] h-[100px] rounded-md' />
                    </div>
                </div>
            </div>
            {/* product size */}
            <div className='flex-col'>
                <p className='uppercase font-bold text-sm text-black'>Size<span className='text-black uppercase text-sm font-normal leading-none pl-2'>L</span></p>
                <div className='mt-1  py-2'>
                    {sizes.map(item => (
                        <button className='w-[70px] h-[30px] bg-white text-black rounded-xl border-solid border-2 border-black-200 '>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            {/* add to cart button*/}
            <div className='flex items-center justify-center px-5 bg-black rounded-full text-white box-border text-sm py-3 mt-2'>
                <button className='uppercase' >Add to bag </button>
                <FaArrowRight className='ml-[10px]' />
            </div>
            {/* offers and aditional info */}
            <div className='flex flex-col mt-3 '>
                <p className='font-normal  text-sm'>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                <p className='font-normal  text-sm mt-3'>Speak to a Personal Stylist CHAT NOW</p>
            </div>
        </div>
    )
}

export default ProductCard