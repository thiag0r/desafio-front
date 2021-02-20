import React, { useState, useEffect } from 'react'
import ProductsService from '../../service/ProductsService'

import ProductInfo from '../../components/product-info/ProductInfo'
import ProductsList from '../../components/product-list/ProductsList'
import Loader from '../../components/loader/Loader'
import {mockedResponse} from './mockedResponse'

import './home.scss'

export default function Home() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [showProductInfo, setShowProductInfo] = useState(false)
  const [productOnCart, setProductsOnCart] = useState([])
 
  useEffect(() => {
    async function loadProducts() {
      setIsFetching(true)

      try {
        const res = await ProductsService.getAllProducts()
        // setProducts(res.data.products)
        setProducts(mockedResponse.products)
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }

    loadProducts()
  },[])

  const showProductDetails = (e) => {
    console.log(e.target)
    setShowProductInfo(true)
    // setProductInfoToShow()
  }

  return (
    <div className="home">
      <div className="home__card" onClick={(e) => showProductDetails(e)}>
        { isFetching ? (
          <Loader />
        ) : (
            showProductInfo ? <ProductInfo product={products[0]} /> : <ProductsList products={products} /> 
        ) }
      </div>
    </div>
  )
}
