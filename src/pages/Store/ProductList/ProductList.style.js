import styled from 'styled-components';
export const GuideText = styled.p`
  margin-top: 80px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.xlarge};
  height: 60vh;
`;

export const ResultSort = styled.div`
  position: absolute;
  font-size: ${({ theme }) => theme.sizes.medium};
  right: 19%;
  top: 35%;
`;
