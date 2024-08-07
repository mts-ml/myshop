import { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { Product } from '../../data/products'
import axios from 'axios'

import * as S from './productListStyles'


export const ProductList: React.FC = () => {
   const [products, setProducts] = useState<Product[]>([])


    // Buscar dados da API
   useEffect(() => {
      async function fetchProducts() {
         try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
         } catch (error) {
            throw new Error(`Falha ao buscar dados na API: ${error}`)
         }
      }

      fetchProducts()
   }, [])


   return (
      <S.Container>
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </S.Container>
   )
}
