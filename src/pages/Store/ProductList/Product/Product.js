import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Soldout from '../../../../assets/images/soldout.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './Product.style';

const Product = ({ item }) => {
  const navigate = useNavigate();
  const moveToDetail = id => {
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
      {item.bidStatus === '낙찰완료' && (
        <S.Soldout src={Soldout} alt="soldout" />
      )}
      <S.PrdImg src={`${item.imageUrl}`} alt="ProductImage" />
      <S.PrdContents>
        <S.Title>작품명 : {item.itemName}</S.Title>
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
        <S.DetailBtnWrapper>
          <S.DetailBtn onClick={() => moveToDetail(item.id)}>
            상품 보러가기
          </S.DetailBtn>
        </S.DetailBtnWrapper>
      </S.PrdContents>
    </S.PrdWrapper>
  );
};

export default Product;
