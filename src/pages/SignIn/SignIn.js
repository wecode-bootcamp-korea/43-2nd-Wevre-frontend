import React from 'react';
import { useLocation } from 'react-router-dom';
import { KAKAO_AUTH_URL } from './OAuth/OAuth';
import * as S from './SignIn.style';

const User = () => {
  const location = useLocation();

  const handleHref = () => {
    localStorage.setItem(
      'before-address',
      `${location.pathname}${location.search}`
    );
    //현재 위치 endpoint를 recoil atom에 담는다
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <S.UserContainer key={LOGIN_FORM_INFO.id}>
      <S.Title>{LOGIN_FORM_INFO.text}</S.Title>
      <S.SignBtnArea>
        <S.Button variant="contained" onClick={handleHref}>
          <S.KakaoLogo src={LOGIN_FORM_INFO.logo} />
          {LOGIN_FORM_INFO.contents}
        </S.Button>
      </S.SignBtnArea>
      <S.CouponEvent>회원가입시 받을 수 있는 혜택 🎉</S.CouponEvent>
      <S.CouponArea>
        {COUPON_LIST.map(({ id, imgUrl, text }) => (
          <div key={id}>
            <S.CouponImg src={imgUrl} />
            <S.CouponTxt>{text}</S.CouponTxt>
          </div>
        ))}
      </S.CouponArea>
    </S.UserContainer>
  );
};

export default User;

const LOGIN_FORM_INFO = {
  id: 1,
  type: true,
  text: 'Login',
  contents: '카카오톡 아이디로 간편하게 로그인 하러가기',
  logo: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5f9c58c2017800001.png',
};

const COUPON_LIST = [
  {
    id: 1,
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/1820/1820259.png',
    text: '배송비 무료 쿠폰 지급!',
  },
  {
    id: 2,
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/566/566445.png',
    text: '포인트 5만원 적립',
  },
  {
    id: 3,
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2682/2682446.png',
    text: '생일날 할인 3%',
  },
];
