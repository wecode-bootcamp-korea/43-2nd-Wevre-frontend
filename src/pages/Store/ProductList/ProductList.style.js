import styled from 'styled-components';
export const GuideText = styled.p`
  margin-top: 80px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.xlarge};
  height: 60vh;
`;

export const ResultSort = styled.div`
  display: flex;
  justify-content: right;
  font-size: ${({ theme }) => theme.sizes.medium};
`;
