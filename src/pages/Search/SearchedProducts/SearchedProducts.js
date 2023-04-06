import React from 'react';
import { Card, CardMedia } from '@mui/material';
import Soldout from '../../../assets/images/soldout.png';
import * as S from './SearchedProducts.style';
import { useNavigate } from 'react-router-dom';

const SearchedProducts = ({ productData }) => {
  const navigate = useNavigate();
  const {
    id,
    bidStatus,
    description,
    imageUrl,
    itemName,
    productionYear,
    startingBid,
    width,
    length,
    height,
    authorName,
  } = productData;

  const moveToDetail = () => {
    if (!localStorage.getItem('login-token')) {
      alert('로그인이 필요한 페이지입니다.');
      return;
    }
    if (bidStatus === '낙찰완료') {
      alert('이미 낙찰된 상품입니다.');
      return;
    } else {
      navigate(`/detail/${id}`);
    }
  };
  return (
    <S.ProductContainer onClick={moveToDetail}>
      <Card>
        {bidStatus === '낙찰완료' && <S.Soldout src={Soldout} alt="soldout" />}
        <CardMedia sx={{ width: 190, height: 160 }} image={imageUrl} />
        <S.ProductTitle>{itemName}</S.ProductTitle>
        <S.ProductContents>
          설명 :
          {description.length > 30
            ? description.slice(0, 15) + '...'
            : description}
        </S.ProductContents>
        <S.ProductContents>제작연도 : {productionYear}</S.ProductContents>
        <S.ProductContents>가로 : {width}</S.ProductContents>
        <S.ProductContents>세로 : {length}</S.ProductContents>
        <S.ProductContents>깊이 : {height}</S.ProductContents>
        <S.ProductContents>작가 : {authorName}</S.ProductContents>
        <S.ProductContents>
          ----------------------------------
        </S.ProductContents>
        <S.ProductTitle>{startingBid}</S.ProductTitle>
        <S.ProductContents>경매 시작가</S.ProductContents>
      </Card>
    </S.ProductContainer>
  );
};

export default SearchedProducts;
