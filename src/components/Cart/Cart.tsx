import { useDispatch } from 'react-redux'
import { MdDeleteForever as RemoveIcon } from "react-icons/md";
import { removeProduct } from '../../redux/CartReducer/cart-slice';
import { Product } from '../../data/products';

import * as S from './cartStyles'


interface CartProps {
   showCart: boolean
   handleCartClose: () => void
   cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ showCart, handleCartClose, cart }) => {

   const dispatch = useDispatch()

   const total = cart.reduce((total, product) => {
      return total + product.price
   }, 0)


   return (
      <S.Aside $showCart={showCart}>
         <S.Div>
            <S.H1>Cart</S.H1>

            <S.CloseCartIcon onClick={handleCartClose} />
         </S.Div>

         <S.Ul data-testid={'ul'}>
            {cart.map((product) => (
               <S.Li key={product.id}>
                  <S.DivLi>
                     {product.title} -
                     <S.Strong> ${product.price}</S.Strong>
                  </S.DivLi>

                  <RemoveIcon
                     data-testid={'remove-btn'}
                     onClick={() => dispatch(removeProduct(product))}
                  >
                  </RemoveIcon>
               </S.Li>
            ))}
         </S.Ul>

         <S.Total data-testid={'total'}>
            Total: ${total}
         </S.Total>
      </S.Aside >
   )
}
