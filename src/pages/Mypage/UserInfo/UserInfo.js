import React from 'react';
import { SUB_TITLE } from '../SUB_TITLE';
import BASE_URL from '../../../config';
import { Avatar, Card, CardMedia } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useFetch from '../../../hooks/useFetch';
import * as S from './UserInfo.style';

const UserInfo = () => {
  const { loading, data } = useFetch({ BASE_URL });
  const piece = data;

  return (
    <S.CategoryContainer>
      <S.Title>회원 정보</S.Title>
      <S.UserInfoBox>
        <S.UserInfoDetail>
          <Avatar
            alt="user name"
            sx={{ width: 70, height: 70, marginRight: 5 }}
          >
            정인
          </Avatar>
          <S.UserInfoDetailBox>
            <S.UserName>유정인</S.UserName>
            <S.UserId>jaylenyu96@gmail.com</S.UserId>
          </S.UserInfoDetailBox>
        </S.UserInfoDetail>
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
