import styled from 'styled-components';

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontStyle.logo};
  font-size: ${({ theme }) => theme.sizes.xLarge};
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  padding-top: 30px;
  padding-bottom: 35px;
`;

export const SignBtnArea = styled.div`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50px;
    height: 1px;
    transform: translateX(-50%);
    background-color: #dedede;
    content: '';
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  margin: 55px 0 55px 0;
  padding: 18px 0;
  border: none;
  border-radius: 20px;
  background-color: #fae102;

  :hover {
    cursor: pointer;
  }
`;

export const KakaoHref = styled.a`
  text-decoration-line: none;
`;

export const KakaoLogo = styled.img`
  position: absolute;
  top: 15px;
  left: 15%;
  width: 20px;
`;

export const CouponEvent = styled.div`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
`;

export const CouponArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  text-align: center;
`;

export const CouponImg = styled.img`
  width: 50%;
  padding: 5px;
`;

export const CouponTxt = styled.p`
  font-size: ${({ theme }) => theme.sizes.small};
  padding: 5px;
`;
