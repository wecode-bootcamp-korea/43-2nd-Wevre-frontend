import React, { useState } from 'react';
import { API } from '../../../config';
import { BANK_INFO } from './BANK_INFO';
import { Button, Box } from '@mui/joy';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  Alert,
} from '@mui/material';
import * as S from './SellerQualification.style';
import { useNavigate } from 'react-router-dom';

const SellerQualification = () => {
  const navigate = useNavigate();
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
        Authorization: localStorage.getItem('login-token'),
      },
      body: JSON.stringify(inputValue),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESSFULLY_REGISTERED') {
          <Alert severity="success">전송이 완료되었습니다.</Alert>;
          navigate('/mypage');
        } else {
          <Alert severity="error">전송 실패</Alert>;
        }
      });
  };

  return (
    <S.SellerQualContainer>
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
        <S.Title>경매 등록 자격 취득</S.Title>
        <FormControl sx={{ width: '40%', marginBottom: '50px' }}>
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
          sx={{ width: '40%', marginBottom: '50px' }}
          id="standard-basic"
          label="계좌번호입력"
          variant="outlined"
          name="bankAccount"
          onChange={handleValueChange}
        />
        <TextField
          sx={{ width: '40%', marginBottom: '50px' }}
          id="standard-basic"
          label="회원번호입력"
          variant="outlined"
          name="artistRegistration"
          onChange={handleValueChange}
        />
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
            onClick={handleSellerSubmit}
            color="neutral"
            variant="solid"
          >
            동 의
          </Button>
        </Box>
      </Card>
    </S.SellerQualContainer>
  );
};

export default SellerQualification;
