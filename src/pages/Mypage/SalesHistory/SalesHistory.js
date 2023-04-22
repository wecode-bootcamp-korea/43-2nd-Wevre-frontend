// import React, { useEffect, useState } from 'react';
// import { API } from '../../../config';
// import { Card, CardMedia } from '@mui/material';
// import * as S from './SalesHistory.style';

// const SalesHistory = () => {
//   const [loading, setLoading] = useState(false);
//   const [salesData, setSalesData] = useState([]);
//   useEffect(() => {
//     setLoading(true);
//     fetch(API.SALES, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         Authorization: localStorage.getItem('login-token'),
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         setSalesData(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <S.SalesHistoryContainer>
//       <S.CategoryTitle>판매 내역</S.CategoryTitle>
//       {salesData.length > 0 &&
//         salesData.map(items => {
//           const {
//             orderId,
//             imageUrl,
//             itemName,
//             authorName,
//             sellerName,
//             price,
//             shipmentFee,
//             totalPrice,
//             orderStatus,
//             ordersCreatedAt,
//             paymentCreatedAt,
//           } = items;

//           const orderPaymentInfo = [
//             { id: 1, name: '결제상태', 결제상태: orderStatus },
//             { id: 2, name: '판매자이름', 판매자이름: sellerName },
//             { id: 3, name: '낙찰가', 낙찰가: price },
//             { id: 4, name: '배송비', 배송비: shipmentFee },
//             { id: 5, name: '결제가격', 결제가격: totalPrice },
//           ];

//           const orderCreateAt = [
//             { id: 1, name: '주문시각', 주문시각: ordersCreatedAt },
//             { id: 2, name: '결제시각', 결제시각: paymentCreatedAt },
//           ];

//           return (
//             <S.CardBox key={orderId}>
//               <Card sx={{ display: 'flex', width: '100%' }}>
//                 <S.ItemBox>
//                   <CardMedia
//                     sx={{ width: 300, height: 300 }}
//                     image={imageUrl}
//                   />
//                   <S.Title>{itemName}</S.Title>
//                   <S.SubTitle>{authorName}</S.SubTitle>
//                 </S.ItemBox>
//                 <S.ItemInfoBox>
//                   <S.OrderDetail>
//                     <S.Title>결제 정보</S.Title>
//                     {orderPaymentInfo.map(list => {
//                       const { id, name } = list;
//                       return (
//                         <S.SubTitle
//                           key={id}
//                         >{`${name} : ${list[name]}`}</S.SubTitle>
//                       );
//                     })}
//                   </S.OrderDetail>
//                   <S.OrderDetail>
//                     <S.CreateAtBox>
//                       {orderCreateAt.map(list => {
//                         const { id, name } = list;
//                         return (
//                           <S.CreateAt
//                             key={id}
//                           >{`${name} : ${list[name]}`}</S.CreateAt>
//                         );
//                       })}
//                     </S.CreateAtBox>
//                   </S.OrderDetail>
//                 </S.ItemInfoBox>
//               </Card>
//             </S.CardBox>
//           );
//         })}
//     </S.SalesHistoryContainer>
//   );
// };

// export default SalesHistory;
