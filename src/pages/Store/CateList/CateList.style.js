import styled from 'styled-components';

export const ResponsiveHeader = styled.nav`
  position: fixed;
`;

export const GuideText = styled.p`
  margin-top: 50px;
  padding: 30px 20px;
  font-family: ${({ theme }) => theme.fontStyle.logo};
  font-size: ${({ theme }) => theme.sizes.large};
`;

export const CategoryList = styled.div`
  padding-top: 20px;
`;

export const CateUl = styled.ul`
  display: flex;
  padding-bottom: 40px;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const CateBtn = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.silver};
  border-color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.navy};

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
