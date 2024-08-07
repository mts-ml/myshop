import React, { useState } from "react"
import { RiLoginBoxFill as LoginIcon, RiLogoutBoxFill as LogoutIcon } from "react-icons/ri";
import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { FaShopify as ShopIcon } from "react-icons/fa";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/UserReducer/user-slice";

import * as S from "./headerStyles"


export const Header: React.FC = () => {
   const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)

   const dispatch = useDispatch()

   const [isLogged, setIsLogged] = useState(false)

   const [showCart, setShowCart] = useState(false)


   function handleLogin() {
      setIsLogged(!isLogged)

      // usuário não logado
      if (user === null) {
         // despachar a action de login
         dispatch(login({
            name: 'Mateus',
            email: 'emailExemplo@email.com'
         })
         )
      } else {
         // despachar a action de logout
         dispatch(logout())
      }
   }


   // Função para fechar a aba do carrinho
   // Passada como prop para o Cart.tsx e usada no botão.
   function handleCartClose() {
      setShowCart(false)
      console.log('Função handleCartClose')
   }


   return (
      <S.StyledHeader>
         <S.Div>
            <S.H1>
               Shop
               <ShopIcon />
            </S.H1>

            <S.ButtonDiv>
               <S.AutButton onClick={handleLogin} $isLogged={isLogged}>
                  {isLogged ? "Logout" : "Login"}
                  {isLogged ? <LogoutIcon /> : <LoginIcon />}
               </S.AutButton>

               <S.CartButton onClick={() => setShowCart(!showCart)}>
                  Cart
                  <CartIcon />
               </S.CartButton>
            </S.ButtonDiv>
         </S.Div>

         <Cart showCart={showCart} handleCartClose={handleCartClose} />
      </S.StyledHeader>
   )
}
