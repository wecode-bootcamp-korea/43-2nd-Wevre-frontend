import React from 'react';
import { API } from '../../../config';
import useFetch from '../../../hooks/useFetch';
import { Card, CardMedia } from '@mui/material';
import * as S from './PurchaseHistory.style';

const PurchaseHistory = () => {
  const { loading, data } = useFetch(API.PURCHASES);
  if (loading) return <div>Loading</div>;
  const orderData = data.purchases;

  return (
    <S.PurchaseContainer>
      <S.CategoryTitle>구매내역</S.CategoryTitle>
      {orderData.map(items => {
        const {
          orderId,
          imageUrl,
          itemName,
          authorName,
          buyerName,
          phoneNumber,
          totalAddress,
          winningBidPrice,
          shipmentFee,
          totalPrice,
          orderStatus,
          ordersCreatedAt,
          paymentNumber,
          paymentMethodType,
          paymentCreatedAt,
        } = items;

        const orderPaymentInfo = [
          { id: 1, name: '낙찰가', 낙찰가: winningBidPrice },
          { id: 2, name: '배송비', 배송비: shipmentFee },
          { id: 3, name: '결제가격', 결제가격: totalPrice },
          { id: 4, name: '결제상태', 결제상태: orderStatus },
          { id: 5, name: '결제카드', 결제카드: paymentMethodType },
          { id: 6, name: '결제번호', 결제번호: paymentNumber },
        ];
        const orderUserInfo = [
          { id: 1, name: '구매자이름', 구매자이름: buyerName },
          { id: 2, name: '입력주소', 입력주소: totalAddress },
          { id: 3, name: '전화번호', 전화번호: phoneNumber },
        ];
        const orderCreateAt = [
          { id: 1, name: '주문시각', 주문시각: ordersCreatedAt },
          { id: 2, name: '결제시각', 결제시각: paymentCreatedAt },
        ];

        return (
          <S.CardBox key={orderId}>
            <Card sx={{ display: 'flex', width: '100%' }}>
              <S.ItemBox>
                <CardMedia sx={{ width: 300, height: 300 }} image={imageUrl} />
                <S.Title>{itemName}</S.Title>
                <S.SubTitle>{authorName}</S.SubTitle>
              </S.ItemBox>
              <S.ItemInfoBox>
                <S.OrderDetail>
                  <S.Title>결제 정보</S.Title>
                  {orderPaymentInfo.map(list => {
                    const { id, name } = list;
                    return (
                      <S.SubTitle
                        key={id}
                      >{`${name} : ${list[name]}`}</S.SubTitle>
                    );
                  })}
                </S.OrderDetail>
                <S.OrderDetail>
                  <S.Title>배송 입력 정보</S.Title>
                  {orderUserInfo.map(list => {
                    const { id, name } = list;
                    return (
                      <S.SubTitle
                        key={id}
                      >{`${name} : ${list[name]}`}</S.SubTitle>
                    );
                  })}
                  <S.CreateAtBox>
                    {orderCreateAt.map(list => {
                      const { id, name } = list;
                      return (
                        <S.CreateAt
                          key={id}
                        >{`${name} : ${list[name]}`}</S.CreateAt>
                      );
                    })}
                  </S.CreateAtBox>
                </S.OrderDetail>
              </S.ItemInfoBox>
            </Card>
          </S.CardBox>
        );
      })}
    </S.PurchaseContainer>
  );
};

export default PurchaseHistory;
