import React from 'react';
import { API } from '../../../config';
import { Card } from '@mui/material';
import { Button, Box } from '@mui/joy';
import { QUAL_INFO } from './QUAL_INFO';
import swal from 'sweetalert';
import * as S from './BuyerQualification.style';

const BuyerQualification = () => {
  const handleAgreeButton = () => {
    fetch(API.BUYER, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
    })
      .then(res => res.json())
      .then(data => data);
    swal('등록이 완료되었습니다.');
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
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{ width: '20%', height: '40px', fontSize: 20 }}
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
