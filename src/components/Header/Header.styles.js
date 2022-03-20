import styled from 'styled-components'

export const HeaderContainer = styled.header `
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 15px 0;
`

export const LinkHeader = styled.a `
   display: flex;
   justify-content: center;
   align-items: center;
   transition: .4s ease; 
   cursor: pointer;

   &:hover {
      transform: scale(1.1);
   }
` 