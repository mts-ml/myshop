import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever as RemoveIcon } from "react-icons/md";
import { RootReducer } from '../../redux/root-reducer';
import { removeProduct } from '../../redux/CartReducer/cart-slice';

import * as S from './cartStyles'


interface CartProps {
   showCart: boolean
   handleCartClose: () => void
}

export const Cart: React.FC<CartProps> = (props) => {
   const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

   const dispatch = useDispatch()


   const total = cart.reduce((total, product) => {
      return total + product.price
   }, 0)


   return (
      <S.Aside $showCart={props.showCart}>
         <S.Div>
            <S.H1>Cart</S.H1>
            <S.CloseCartIcon onClick={props.handleCartClose} />
         </S.Div>

         <S.Ul>
            {cart.map((product) => (
               <S.Li key={product.id}>
                  <S.DivLi>
                     {product.title} -
                     <S.Strong> ${product.price}</S.Strong>
                  </S.DivLi>

                  <RemoveIcon onClick={ () => dispatch(removeProduct(product) )}></RemoveIcon>
               </S.Li>
            ))}
         </S.Ul>

         <S.Total>
            Total: ${total}
         </S.Total>
      </S.Aside >
   )
}
