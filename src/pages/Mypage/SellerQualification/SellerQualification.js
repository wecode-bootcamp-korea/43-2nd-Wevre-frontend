import React, { useState } from 'react';
import { API } from '../../../config';
import { BANK_INFO } from './BANK_INFO';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import * as S from './SellerQualification.style';

const SellerQualification = () => {
  const [inputValue, setInputValue] = useState({
    bankName: '',
    bankAccount: '',
    artistRegistration: '',
  });

  const handleValueChange = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSellerSubmit = () => {
    fetch(API.SELLER, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESSFULLY_REGISTERED') {
          alert('전송이 완료되었습니다.');
        }
      });
  };

  return (
    <S.SellerQualContainer>
      <S.Title>경매 등록 자격 취득</S.Title>
      <FormControl sx={{ width: '40%', marginBottom: '20px' }}>
        <InputLabel id="demo-simple-select-label">은행 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="은행 선택"
          value={inputValue.bankName}
          name="bankName"
          onChange={handleValueChange}
        >
          {BANK_INFO.map(({ title, id }) => (
            <MenuItem key={id} value={title}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        sx={{ width: '40%', marginBottom: '20px' }}
        id="standard-basic"
        label="계좌번호입력"
        variant="outlined"
        name="bankAccount"
        onChange={handleValueChange}
      />
      <TextField
        sx={{ width: '40%', marginBottom: '20px' }}
        id="standard-basic"
        label="회원번호입력"
        variant="outlined"
        name="artistRegistration"
        onChange={handleValueChange}
      />
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: 50,
          width: 150,
          fontSize: 15,
          marginTop: '100px',
          marginBottom: '100px',
        }}
        variant="contained"
        onClick={handleSellerSubmit}
      >
        등록하기
      </Button>
    </S.SellerQualContainer>
  );
};

export default SellerQualification;
