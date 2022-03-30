import React, { useEffect } from 'react'
import ProductTabs from '../components/ProductTabs'
import ProductCard from '../components/ProductCard'
import ProductImage from '../components/ProductImage'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../slice/product'
const ProductDetails = () => {

  const dispatch = useDispatch()
  const { productDetails } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProductDetails())
  }, [])
  
  return (
    <div className='flex mt-20 '>
      <ProductTabs />
      <ProductImage />
      <ProductCard />
    </div>
  )
}

export default ProductDetails