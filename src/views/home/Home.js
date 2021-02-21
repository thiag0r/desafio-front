import React, { useState, useEffect } from 'react'
import ProductsService from '../../service/ProductsService'

import ProductInfo from '../../components/product-info/ProductInfo'
import ProductsList from '../../components/product-list/ProductsList'
import Loader from '../../components/loader/Loader'

//No projeto usei o scss para escrever 'menos' usando a arquitetura BEM
import './home.scss'

export default function Home() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [showProductInfo, setShowProductInfo] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
 
  useEffect(() => {
    async function loadProducts() {
      setIsFetching(true)

      try {
        const res = await ProductsService.getAllProducts()
        setProducts(res.data.products)
      } catch (error) {
        console.error(error)
      } finally {
        setIsFetching(false)
      }
    }

    loadProducts()
  },[])

  const showProductDetails = (i) => {
    setSelectedProduct(products[i])
    setShowProductInfo(!showProductInfo)
  }

  const verifyInventory = () => {

  }

  const removeProduct = () => {
    
  }

  return (
    <div className="home">
      <div className="home__card">
        {/* Eu optei por não usar rotas por ter só esses dois componentes */}
        {/* Adicionei o Loader como fallback da requisição da api */}
        { isFetching ? (<Loader />) : (
          showProductInfo ? (
            <ProductInfo 
              product={selectedProduct}
              showProductDetails={showProductDetails} 
            />) : (
            <ProductsList 
              products={products} 
              showProductDetails={showProductDetails} 
            />)
        ) }
      </div>
    </div>
  )
}
