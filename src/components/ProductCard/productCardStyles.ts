import styled from "styled-components";


export const Card = styled.article`
   background-color: white;
   width: 100%;
   border-radius: 1rem;
   padding: 2rem;
   box-shadow: 0 0 .5rem rgba(0, 0, 0, .15);

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
`

export const ProductImage = styled.img`
   width: 100%;
   height: 32rem;
   object-fit: contain;
`

export const H2 = styled.h2`
   text-align: center;
   margin-top: 2.5rem;
   min-height: 4.8rem;
`

export const Div = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 .6rem;
   align-items: center;
   margin-top: 1.6rem;
`

export const ReviewSpan = styled.span`
   display: flex;
   align-items: center;
   gap: .2rem;
   font-size: 1.2rem;

   svg {
      font-size: 1.4rem;
   }
`

export const PriceStrong = styled.strong``

export const AddCartButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: .5rem;
   margin: 2rem auto;
   border: none;
   background-color: tan;
   color: white;
   border-radius: .7rem;
   width: 100%;
   height: 3rem;
`

export const RemoveCartButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: .5rem;
   margin: 2rem auto;
   border: none;
   background-color: violet;
   color: white;
   border-radius: .7rem;
   width: 100%;
   height: 3rem;
`
