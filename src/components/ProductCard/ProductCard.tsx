import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { FaStar as FilledStar, FaRegStar as BlankStar, FaStarHalfAlt as HalfStar } from "react-icons/fa";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/CartReducer/cart-slice";

import * as S from './productCardStyles'


interface ProductCardProps {
   product: Product
}


export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const productRateFloor = Math.floor(product.rating.rate); // Número de estrelas cheias
   const hasHalfStar = product.rating.rate % 1 >= 0.5; // Verifica se há uma meia estrela

   const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

   // Variável que informa se o produto está no carrinho
   const isProductOnCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined

   const dispatch = useDispatch()

   function handleAddProduct() {
      dispatch( addProduct(product) )
   }


   function handleRemoveProduct() {
      dispatch( removeProduct(product) )
   }


   return (
      <S.Card >
         <S.ProductImage src={product.image} alt={product.description} />

         <S.H2>{product.title}</S.H2>

         <S.Div>
            <S.ReviewSpan>
               {Array.from({ length: 5 }).map((_, index) => {
                  // Verifica se o índice é MENOR que a nota da avaliação arredondada para baixo
                  // 4.7 == 4.0
                  if (index < productRateFloor) {
                     return <FilledStar key={index} />
                     /* Verifica se o índice atual é IGUAL a nota da avaliação arredondada para baixo
                     e se o resto da divisão da nota é maior que 0.5 */
                  } else if (index === productRateFloor && hasHalfStar) {
                     return <HalfStar key={index} />
                  } else {
                     return <BlankStar key={index} />
                  }
               })}
               ({product.rating.rate})
            </S.ReviewSpan>

            <S.PriceStrong>${product.price}</S.PriceStrong>
         </S.Div>

         {isProductOnCart ?
            <S.RemoveCartButton onClick={handleRemoveProduct}>
               Remove from Cart
               <CartIcon />
            </S.RemoveCartButton>
            :
            <S.AddCartButton onClick={handleAddProduct}>
               Add to Cart
               <CartIcon />
            </S.AddCartButton>
         }
      </S.Card>
   )
}
