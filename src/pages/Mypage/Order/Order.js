import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ReactDaumPost from 'react-daumpost-hook';
import { API } from '../../../config';
import {
  Card,
  CardMedia,
  TextField,
  Button,
  Input,
  InputLabel,
  FormControl,
} from '@mui/material';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import * as S from './Order.style';

//MUI INPUT 전화번호 자동 하이픈 입력 함수
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000-0000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Order = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({});
  const [loading, setLoding] = useState(true);
  const [addressData, setAddressData] = useState({
    bidId: Number.MAX_SAFE_INTEGER,
    phoneNumber: '',
    street: '',
    address: '',
    zipcode: '',
    price: Number.MAX_SAFE_INTEGER,
  });
  const { street, address, zipcode } = addressData;
  const params = useParams();

  const {
    imageUrl,
    userName,
    userEmail,
    itemName,
    authorName,
    bidPrice,
    shippingFee,
    totalPrice,
  } = orderData;
  const orderPriceList = [
    {
      id: 1,
      name: '낙찰금액',
      낙찰금액: bidPrice,
    },
    {
      id: 2,
      name: '배송비',
      배송비: shippingFee,
    },
    {
      id: 3,
      name: '부가세',
      부가세: '0원',
    },
  ];

  const handleAddressDatailChange = e => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const postConfig = {
    onComplete: data => {
      setAddressData(prev => ({
        ...prev,
        address: data.address,
        zipcode: data.zonecode,
      }));
    },
  };

  const postCode = ReactDaumPost(postConfig);

  const appendOrderData = () =>
    fetch(`${API.ORDERS}/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
    })
      .then(res => res.json())
      .then(({ orders: [data] }) => {
        setOrderData(data);
        setAddressData({
          ...addressData,
          bidId: data.bidId,
          price: data.totalPrice,
        });
        setLoding(false);
      });

  useEffect(() => {
    appendOrderData();
  }, []);

  const handleOrderSubmit = () => {
    fetch(API.KAKAOPAY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
      body: JSON.stringify(addressData),
    })
      .then(res => res.json())
      .then(data => {
        window.open(data.data);
      });
    navigate('/mypage');
  };

  if (loading) return <div>Loading</div>;

  return (
    <S.Container>
      <S.CardBox>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 150,
            marginBottom: '50px',
          }}
        >
          <CardMedia
            sx={{ width: 150, height: 150 }}
            component="img"
            image={imageUrl}
          />
          <S.CardText>
            <S.Title>{itemName}</S.Title>
            <S.SubTitle>{authorName}</S.SubTitle>
          </S.CardText>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 250,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>주문자 성함 : {userName}</S.Title>
            <S.SubTitle>주문자 이메일 : {userEmail}</S.SubTitle>
            <FormControl sx={{ width: '100%' }} variant="standard">
              <InputLabel>전화번호</InputLabel>
              <Input
                defaultValue="Composed TextField"
                value={addressData.phoneNumber}
                onChange={handleAddressDatailChange}
                name="phoneNumber"
                inputComponent={TextMaskCustom}
                required
              />
            </FormControl>
          </S.CardText>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 400,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>배송 주소</S.Title>
            <S.TextBox>
              <TextField
                sx={{ width: '30%', height: 70 }}
                type="text"
                label="우편번호"
                value={zipcode}
                name="zipcode"
                onClick={postCode}
                required
                disabled
              />
              <Button
                sx={{ width: '30%', height: 55 }}
                type="button"
                onClick={postCode}
              >
                우편번호찾기
              </Button>
            </S.TextBox>
            <TextField
              sx={{ width: '100%', height: 70 }}
              type="text"
              label="주소"
              value={address}
              name="address"
              required
              disabled
            />
            <TextField
              sx={{ width: '100%', height: 70 }}
              type="text"
              label="상세주소"
              value={street}
              name="street"
              onChange={handleAddressDatailChange}
            />
          </S.CardText>
        </Card>
        <Card>
          <S.CardBox />
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 350,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>최종 주문 정보</S.Title>
            <TextField
              sx={{ width: '100%', marginBottom: '20px' }}
              value="총 결제 금액"
              variant="standard"
              disabled
            />
            <S.OrderBox>
              {orderPriceList.map(description => {
                const { id, name } = description;
                return (
                  <S.PriceList key={id}>
                    <span>{`${name}`}</span>
                    <span>{`${description[name]}`}</span>
                  </S.PriceList>
                );
              })}
              <S.TotalPrice>
                <span>최종가격</span>
                <span>{totalPrice}</span>
              </S.TotalPrice>
            </S.OrderBox>
          </S.CardText>
        </Card>
        <Button
          sx={{ height: 50, width: '40%', marginBottom: '50px' }}
          variant="contained"
          onClick={() => handleOrderSubmit()}
        >
          주문하기
        </Button>
      </S.CardBox>
    </S.Container>
  );
};

export default Order;
