import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './Product.style';

const Product = ({ item }) => {
  const navigate = useNavigate();
  const moveToDetail = id => {
    if (!localStorage.getItem('login-token')) {
      alert('로그인이 필요한 페이지입니다.');
      return;
    }
    if (item.bidStatus === '낙찰완료') {
      alert('이미 낙찰된 상품입니다.');
      return;
    } else {
      navigate(`/detail/${id}`);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <S.PrdWrapper data-aos="fade-right">
      <Card sx={{ display: 'flex', width: '100%', height: '60vh' }}>
        <Card sx={{ width: 500 }}>
          <S.PrdImg src={`${item.imageUrl}`} alt="ProductImage" />
        </Card>
        <S.PrdContents>
          <Button
            sx={{
              marginTop: 5,
              marginLeft: '50%',
              width: 200,
              fontSize: 25,
              marginBottom: 5,
            }}
            color="black"
            size="lg"
            disabled
            variant="plain"
          >
            작품명 : {item.itemName}
          </Button>
          <S.Info>작가 : {item.authorName}</S.Info>
          <S.Info>너비 : {item.width}</S.Info>
          <S.Info>높이 : {item.length}</S.Info>
          <S.Info>두께 : {item.height}</S.Info>
          <S.Info>무게 : {item.weight}</S.Info>
          <S.Info>
            소재 :{' '}
            {item.materialsName.map((material, index) => {
              if (index !== item.materialsName.length - 1)
                return (material = `${material}, `);
              else return material;
            })}
          </S.Info>
          <S.Info>경매시작가 : {item.startingBid}</S.Info>
          <S.Info>경매종료일 : {item.biddingEnd}</S.Info>
          {item.bidStatus === '낙찰완료' ? (
            <Button
              sx={{
                marginTop: '5%',
                marginLeft: '50%',
                width: 200,
                height: 60,
                fontSize: 20,
              }}
              color="neutral"
              disabled
              variant="solid"
              onClick={() => moveToDetail(item.id)}
            >
              낙찰완료
            </Button>
          ) : (
            <Button
              sx={{
                marginTop: '5%',
                marginLeft: '50%',
                width: 200,
                height: 60,
                fontSize: 20,
              }}
              color="primary"
              disabled={false}
              variant="soft"
              onClick={() => moveToDetail(item.id)}
            >
              상품 보러가기
            </Button>
          )}
        </S.PrdContents>
      </Card>
    </S.PrdWrapper>
  );
};

export default Product;
