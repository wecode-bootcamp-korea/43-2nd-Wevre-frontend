import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding-top: 141px;
`;

export const SearchInner = styled.div`
  margin: 140px 0;
`;

export const SearchInput = styled.input`
  width: 578px;
  height: 48px;
  border: none;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.sizes.large};
  padding: 10px 30px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ResultWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const ResultTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xLarge};
`;

export const ResultSort = styled.div`
  font-size: ${({ theme }) => theme.sizes.medium};
`;

export const ResultListBox = styled.div`
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
