import React from 'react';
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import { Avatar, Card, CardMedia } from '@mui/material';
import { Button } from '@mui/joy';
import useFetch from '../../../hooks/useFetch';
import * as S from './UserInfo.style';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(API.USERS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data.user[0]));
  }, []);

  const {
    name,
    email,
    bidAgreement,
    bankName,
    bankAccount,
    artistRegistration,
  } = userInfo;

  return (
    <S.CategoryContainer>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          width: '100%',
          marginBottom: '50px',
        }}
      >
        <S.Title>회원 정보</S.Title>
        <S.UserInfoBox>
          <S.UserInfoDetail>
            <Avatar
              alt="user name"
              sx={{ width: 70, height: 70, marginRight: 5 }}
            >
              {name}
            </Avatar>
            <S.UserInfoDetailBox>
              <S.UserName>{name}</S.UserName>
              <S.UserId>{email}</S.UserId>
            </S.UserInfoDetailBox>
          </S.UserInfoDetail>
          <S.UserQaulDetail>
            <S.UserQaulDetailTitle>입찰자격</S.UserQaulDetailTitle>
            {!bidAgreement ? (
              <S.UserQaulDetailText>등록되지 않았습니다.</S.UserQaulDetailText>
            ) : (
              <S.UserQaulDetailText>{bidAgreement}</S.UserQaulDetailText>
            )}
            <S.UserQaulDetailTitle>판매자격</S.UserQaulDetailTitle>
            {!bankName ? (
              <S.UserQaulDetailText>등록되지 않았습니다.</S.UserQaulDetailText>
            ) : (
              <S.UserQaulDetailText>
                은행명 : {bankName}
                <br />
                계좌번호 : {bankAccount}
                <br />
                회원번호 : {artistRegistration}
              </S.UserQaulDetailText>
            )}
          </S.UserQaulDetail>
        </S.UserInfoBox>
      </Card>
      {/* <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          width: '100%',
          marginBottom: '50px',
        }}
      >
        <S.Wishlist>
          <S.Title>위시리스트</S.Title>
          <S.WishlistContainer>
            {!loading &&
              piece.map(piece => (
                <Card key={piece.id}>
                  <CardMedia
                    sx={{ width: 300, height: 300 }}
                    component="img"
                    image={piece.image}
                  />
                  <S.CardTitle>{piece.title}</S.CardTitle>
                  <S.CardArtist>{piece.artist}</S.CardArtist>
                </Card>
              ))}
          </S.WishlistContainer>
        </S.Wishlist>
      </Card> */}
    </S.CategoryContainer>
  );
};

export default UserInfo;
