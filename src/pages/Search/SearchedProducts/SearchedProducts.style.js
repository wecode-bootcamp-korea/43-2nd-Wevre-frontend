import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  width: 190px;
  margin: 10px 5px 20px 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Soldout = styled.img`
  position: absolute;
  width: 100%;
  height: 45%;
  opacity: 0.8;
`;

export const ProductTitle = styled.p`
  padding: 5px;
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
`;

export const ProductContents = styled.p`
  padding: 3px;
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: 300;
`;
