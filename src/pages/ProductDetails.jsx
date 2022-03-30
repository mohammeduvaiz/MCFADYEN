import React, { useEffect, Suspense } from 'react'
import ProductTabs from '../components/ProductTabs'
import ProductCard from '../components/ProductCard'
// import ProductImage from '../components/ProductImage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../slice/product'
const ProductImage = React.lazy(() => import("../components/ProductImage"))
const ProductDetails = () => {
  const { productDetails } = useSelector((state) => state.product)
  const detail = productDetails[0];
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetails())
  }, [])

  if (!detail) {
    return (
      <div className=" p-3 w-[50%] flex flex-col flex-1 left-[300px] absolute">
        Loading ......
      </div>
    )
  }

  return (
    <div className='flex-col md:flex mt-20 '>
      <ProductTabs />
      <Suspense fallback={<p>Loading....</p>}>
        <ProductImage detail={detail} />
      </Suspense>
      <ProductCard detail={detail} />
    </div>
  )
}

export default ProductDetails