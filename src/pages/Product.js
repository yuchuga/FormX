import { Suspense } from 'react'
import Products from '../components/Product'
import Spinner from '../components/Spinner'

const Product = () => {
  return (
    <Suspense fallback={Spinner}>
      <Products />
    </Suspense>
  )
}

export default Product