import React, { useEffect, useState } from 'react';
import { API } from '../../../config';
import { Card, CardMedia, Button } from '@mui/material';
import * as S from './Bid.style';

const Bid = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API.BIDS)
      .then(res => res.json())
      .then(data => {
        setList(data.bids);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <S.CategoryContainer>
      <S.Title>입찰 내역</S.Title>
      <S.BidList>
        {list.map(items => {
          const {
            itemId,
            itemName,
            authorName,
            startingBid,
            currentPrice,
            bidStatus,
            biddingEnd,
            imageUrl,
            myLastBidPrice,
          } = items;
          const masterpiece = [
            { id: 1, name: '작품명', 작품명: itemName },
            { id: 2, name: '작가명', 작가명: authorName },
            { id: 3, name: '현재가', 현재가: currentPrice },
            { id: 4, name: '시작가', 시작가: startingBid },
            { id: 5, name: '경매마감', 경매마감: biddingEnd },
          ];
          return (
            <Card
              key={itemId}
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '80%',
                height: '100%',
                padding: '50px',
                marginBottom: '5vh',
                backgroundColor: 'rgba(0,0,0,0.01)',
              }}
            >
              <CardMedia
                image={imageUrl}
                sx={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '10px',
                }}
              />
              <S.CardBox>
                {masterpiece.map(description => {
                  const { id, name } = description;
                  return <div key={id}>{`${name} : ${description[name]}`}</div>;
                })}
              </S.CardBox>
              {bidStatus === '낙찰완료' ? (
                currentPrice === myLastBidPrice ? (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F7E600',
                      '&:hover': { backgroundColor: '#3A1D1D' },
                      fontSize: 16,
                    }}
                  >
                    주문 하기
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      fontSize: 16,
                    }}
                  >
                    낙찰 완료
                  </Button>
                )
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    fontSize: 16,
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 1)' },
                  }}
                >
                  입찰 하기
                </Button>
              )}
            </Card>
          );
        })}
      </S.BidList>
    </S.CategoryContainer>
  );
};

export default Bid;
