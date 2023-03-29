import styled from 'styled-components';
import theme from '../../../styles/theme';

export const BuyerSection = styled.div`
  ${theme.mixins.flexBox('center', 'center')}
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 5vh;
  font-size: 36px;
`;

export const BuyerTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BuyerTitle = styled.p`
  font-size: 20px;
  line-height: 50px;
`;

export const BuyerSubText = styled.p`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 30px;
`;
