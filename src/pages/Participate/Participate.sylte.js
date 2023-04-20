import styled from 'styled-components';
import MUIInput from '@mui/material/Input';

export const BidHead = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 15px;
`;

export const BidImg = styled.img`
  width: 15%;
`;

export const BidText = styled.span`
  font-size: ${({ theme }) => theme.sizes.xLarge};
`;

export const BidWrapper = styled.div`
  margin-top: 30px;
`;

export const ContentsArea = styled.div`
  width: 100%;
  height: 320px;
  padding-top: 50px;
`;

export const Contents = styled.h2`
  font-size: ${({ theme }) => theme.sizes.large};
`;

export const SetPrice = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;

export const PriceTxt = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  padding: 0 10px 0 0;
`;

export const StyledInput = styled(MUIInput)`
  text-align: center;
  width: 55%;
  padding: 0 10px;
`;
export const GuideBox = styled.div`
  display: ${props => (props.checked ? 'none' : 'block')};
  position: absolute;
  right: 7%;
  padding: 15px 30px 0 0;
  color: ${({ theme }) => theme.colors.red};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const PriceBtn = styled.button`
  margin: ${props => (props.checked ? '20px 10px 40px 0' : '50px 10px 10px 0')};
  padding: 10px;
  width: 30%;
  border: 1px solid black;
  border-radius: 15px;

  &:active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const PriceWrapper = styled.div`
  position: relative;
  height: 80px;
  margin: 30px;
`;

export const CurrentPrice = styled.div`
  position: absolute;
  left: 20px;
  font-size: ${({ theme }) => theme.sizes.medium};
`;

export const StartPrice = styled(CurrentPrice)`
  top: 30px;
`;

export const BidBtnDisabled = styled.button`
  position: relative;
  width: 95%;
  padding: 6px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.sizes.large};
  color: #000;
  display: block;
  border: 2px solid #bacddb;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
`;

export const BidBtnActive = styled(BidBtnDisabled)`
  border: 2px solid #f7ca18;
  cursor: pointer;
  background: #efe2ac;

  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nthree;

    &:before {
      left: 0%;
      right: auto;
      width: 100%;
    }
  }

  &:before {
    border-radius: 15px;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #f7ca18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
