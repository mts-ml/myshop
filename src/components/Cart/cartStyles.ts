import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";



interface AsideProps {
   $showCart: boolean
}

export const Aside = styled.aside<AsideProps>`
   position: fixed;
   top: 0;
   right: ${({ $showCart }) => $showCart ? '0' : '-40rem'};
   width: 40rem;
   background-color: white;
   height: 100vh;
   padding: 3.2rem;
   box-shadow: -.5rem 0 1.5rem rgba(0, 0, 0, .3);
   transition: right .6s;
   `

export const Div = styled.div`
   display: flex;
   justify-content: space-between;
`

export const H1 = styled.h1`
   color: black;
   `

export const CloseCartIcon = styled(IoMdCloseCircle)`
   cursor: pointer;
   width: 3rem;
   height: 3rem;
   color: #FA8072;
   transition: transform 0.3s, color 0.3s, box-shadow 0.3s; /* Transições suaves */
   
   &:hover {
      transform: scale(1.1); /* Aumenta o tamanho */
      color: #FF6347;
   }
   `

export const Ul = styled.ul`
   list-style: none;
   margin-top: 4rem;

   display: flex;
   flex-direction: column;
   gap: 2rem;
`

export const Li = styled.li`
   color: black;
   display: flex;
   justify-content: space-between;
   align-items: center;

   svg {
      font-size: 2rem;
   }
`

export const DivLi = styled.div`

`

export const Strong = styled.strong`
   svg {
      cursor: pointer;
      font-size: 2rem;
   }

`

export const Total = styled.strong`
   margin-top: 4rem;
   color: black;
`
