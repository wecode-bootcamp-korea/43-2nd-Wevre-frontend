import React from 'react';
import { API } from '../../../config';
import { Card } from '@mui/material';
import { Button, Box } from '@mui/joy';
import { QUAL_INFO } from './QUAL_INFO';
import * as S from './BuyerQualification.style';

const BuyerQualification = () => {
  const handleAgreeButton = () => {
    fetch(API.BUYER, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <S.BuyerSection>
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
        <S.Title>경매 입찰 자격 취득</S.Title>
        <S.BuyerTextBox>
          {QUAL_INFO.map(({ title, subTitle, id }) => (
            <React.Fragment key={id}>
              <S.BuyerTitle>{title}</S.BuyerTitle>
              <S.BuyerSubText>{subTitle}</S.BuyerSubText>
            </React.Fragment>
          ))}
        </S.BuyerTextBox>
        <Box
          sx={{
            margin: '50px',
          }}
        >
          <Button
            size="lg"
            onClick={() => handleAgreeButton()}
            color="neutral"
            variant="solid"
          >
            동 의
          </Button>
        </Box>
      </Card>
    </S.BuyerSection>
  );
};

export default BuyerQualification;
