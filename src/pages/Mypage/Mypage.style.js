import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding-top: 200px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 80px 80px;
`;

export const CategoryTitle = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: 30px;
`;

export const CategorySubTitle = styled.h2`
  font-size: 20px;
  margin-top: 30px;
`;

export const ListText = styled.h3`
  font-size: ${({ theme }) => theme.sizes.medium};
  color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  width: 70vw;
`;
