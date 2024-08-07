import styled from "styled-components";


export const Container = styled.main`
   max-width: 124rem;
   margin: 6.4rem auto;
   padding: 0 3.2rem;

   display: flex;
   justify-content: space-between;
   align-items: stretch;
   gap: 3.2rem;
   flex-wrap: wrap;

   & > * {
      flex: 1 30rem;
   }
`
