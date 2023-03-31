import React from 'react';
import { Card, CardMedia } from '@mui/material';
import * as S from './WishList.style';
import { useNavigate } from 'react-router-dom';

const WishList = props => {
  const { id, image_url, item_name } = props.data;

  const navigate = useNavigate();

  const moveToDetail = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.WishListContainer onClick={() => moveToDetail(id)}>
      <Card>
        <S.WishListBox>
          <CardMedia sx={{ width: 140, height: 140 }} image={image_url} />
          <S.WishListTxt>{item_name}</S.WishListTxt>
        </S.WishListBox>
      </Card>
    </S.WishListContainer>
  );
};

export default WishList;
