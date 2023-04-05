import styled from 'styled-components';

export const RcContainer = styled.div`
  position: fixed;
  top: 22%;
  right: 3%;
  z-index: 2;
`;

export const RcBox = styled.div`
  height: 600px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.silver};
  overflow: scroll;
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontStyle.logo};
  font-size: ${({ theme }) => theme.sizes.large};
`;

export const Count = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.sizes.medium};
`;

export const ListBox = styled.div`
  width: 100%;
  height: 85%;
  margin-top: 10px;
`;
