import styled from 'styled-components';
import theme from '../../../styles/theme';

export const SellerQualContainer = styled.div`
  ${theme.mixins.flexBox('center', 'center')}
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 50px;
`;
