import React from 'react';
import { API } from '../../../config';
import { Button } from '@mui/material';
import { QUAL_INFO } from './QUAL_INFO';
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
      .then(data => console.log(data));
  };

  return (
    <S.BuyerSection>
      <S.Title>경매 입찰 자격 취득</S.Title>
      <S.BuyerTextBox>
        {QUAL_INFO.map(({ title, subTitle, id }) => (
          <React.Fragment key={id}>
            <S.BuyerTitle>{title}</S.BuyerTitle>
            <S.BuyerSubText>{subTitle}</S.BuyerSubText>
          </React.Fragment>
        ))}
      </S.BuyerTextBox>
      <Button
        onClick={() => handleAgreeButton()}
        sx={{
          height: 50,
          width: 150,
          fontSize: 15,
          marginBottom: '100px',
        }}
        variant="contained"
      >
        동의
      </Button>
    </S.BuyerSection>
  );
};

export default BuyerQualification;
