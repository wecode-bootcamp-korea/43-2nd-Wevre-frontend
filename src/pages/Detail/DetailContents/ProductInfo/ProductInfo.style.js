import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.large};
  padding: 10px 0 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Contents = styled.p`
  font-weight: 400;
  color: ${props => (props.description ? '#999999' : '#000000')};
  margin: ${props => (props.description ? '25px 0' : '15px 0')};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
`;
