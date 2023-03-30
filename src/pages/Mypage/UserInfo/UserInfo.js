import React from 'react';
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import { Avatar, Card, CardMedia } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useFetch from '../../../hooks/useFetch';
import * as S from './UserInfo.style';

const UserInfo = () => {
  const { loading, data } = useFetch('/data/mypageWishlist.json');
  const piece = data;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(API.USERS)
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
      <S.Wishlist>
        <S.WishlistTitle>위시리스트</S.WishlistTitle>
        <S.WishlistContainer>
          {!loading &&
            piece.map(piece => (
              <Card key={piece.id}>
                <S.BookMark>
                  <BookmarkIcon />
                </S.BookMark>
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
    </S.CategoryContainer>
  );
};

export default UserInfo;
