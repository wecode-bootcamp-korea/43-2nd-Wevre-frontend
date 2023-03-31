import styled from 'styled-components';

export const StoreContainer = styled.div`
  padding-top: 75px;
`;

export const StoreMain = styled.div`
  width: 80%;
  padding: 5%;
  display: inline-block;
`;

export const AlienceTitle = styled.h1`
  margin: 0 20px 50px 20px;
  font-family: ${({ theme }) => theme.fontStyle.logo};
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
`;

export const WishListRC = styled.div`
  width: 5%;
  padding: 2%;
  display: inline-block;
`;
