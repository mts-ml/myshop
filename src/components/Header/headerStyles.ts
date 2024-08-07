import styled from "styled-components";


export const StyledHeader = styled.header`
   background-color: #333;
   color: white;
   `


export const Div = styled.div`
   max-width: 124rem;
   padding: 0 3.2rem;
   margin: 0 auto;
   height: 6rem;

   display: flex;
   justify-content: space-between;
   align-items: center;
`


export const H1 = styled.h1`
   display: flex;
   align-items: center;
   gap: .5rem;

   svg {
      font-size: 4rem;
   }
`


export const ButtonDiv = styled.div`
   display: flex;
   gap: 2rem;
`


interface AutButtonProps {
   $isLogged: boolean
}
export const AutButton = styled.button<AutButtonProps>`
   display: flex;
   align-items: center;
   gap: .5rem;

   border: none;
   border-radius: .7rem;
   padding: 0 .5rem;
   background-color: ${ ( {$isLogged} ) => $isLogged ? '#381952' : 'teal'};
   color: white;
   height: 3rem;
`


export const CartButton = styled.button`
   display: flex;
   align-items: center;
   gap: .2rem;

   border: none;
   border-radius: .7rem;
   padding: 0 .5rem;
   background-color: salmon;
   color: white;
   height: 3rem;

   svg {
      font-size: 1.5rem;
   }
`
