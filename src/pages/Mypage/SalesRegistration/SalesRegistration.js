import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
import { API } from '../../../config';
import PropTypes from 'prop-types';
import { MATERIALS_INFO } from './MATERIALS_INFO';
import { CATEGORY_SELECT } from './CATEGORY_SELECT';
import { ITEM_INPUT_INFO } from './ITEM_INPUT_INFO';
import { PRODUCTION_INFO } from './PRODUCTION_INFO';
import { BIDDING_DAY } from './BIDDING_DAY';
import * as S from './SalesRegistration.style';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Autocomplete,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  InputAdornment,
  FormHelperText,
  Input,
  Card,
  CardMedia,
} from '@mui/material';
import { Button } from '@mui/joy';
import swal from 'sweetalert';

//material UI 숫자 입력 3자리 마다 자동 쉼표
const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="₩"
    />
  );
});
NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SalesRegistration = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    itemName: '',
    authorName: '',
    weight: '',
    width: '',
    length: '',
    height: '',
    productionYear: '',
    categoryName: '',
    materials: '',
    description: '',
    startingBid: '',
    biddingStart: '',
    biddingTerm: '',
    image: '',
  });

  const handleFile = event => {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile);

    fileReader.onload = function () {
      setFormdata({
        ...formdata,
        image: fileReader.result,
      });
    };
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const handleChange = (e, values) => {
    let { value, name } = !e.$y && e.target;

    if (e.$y) {
      const ymd =
        String(e.$y) +
        (String(e.$M).length === 1
          ? '0' + String(e.$M + 1)
          : String(e.$M + 1)) +
        (String(e.$D).length === 1 ? '0' + String(e.$D) : String(e.$D));
      name = 'biddingStart';
      value = ymd;
    } else if (values) {
      name = Array.isArray(values) ? values[0].title : name;
      value = Array.isArray(values)
        ? values.map(value => value.value).join(', ')
        : value;
    } else if (name === 'image') {
      value = e.target.files[0];
    }
    setFormdata({ ...formdata, [name]: value });
  };

  const sendData = () => {
    const sendFormData = new FormData();
    Object.keys(formdata).map(data =>
      sendFormData.append(data, formdata[data])
    );
    for (let a of sendFormData.values()) {
      console.log(a);
    }
    axios
      .post(API.ITEMS, sendFormData, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem('login-token'),
        },
      })
      .then(res => {
        if (res.data.message === 'SUCCESSFULLY_REGISTERED') {
          swal('등록이 완료되었습니다.');
          navigate('/store');
        }
      })
      .catch(err => alert(err));
  };

  return (
    <S.Container>
      <S.CategoryTitle>경매 등록</S.CategoryTitle>
      <S.CardBox>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 800,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>작품 정보</S.Title>
            {ITEM_INPUT_INFO.map(({ id, info, unit, name }) => (
              <FormControl
                key={id}
                variant="standard"
                sx={{ m: 1, mt: 3, width: '100%' }}
                value={formdata.itemName}
                onChange={handleChange}
              >
                <Input
                  name={name}
                  endAdornment={
                    <InputAdornment position="end">{unit}</InputAdornment>
                  }
                  inputProps={{
                    'aria-label': `${info}`,
                  }}
                />
                <FormHelperText>{info}</FormHelperText>
              </FormControl>
            ))}
            <FormControl sx={{ minWidth: 300, marginTop: 5, marginBottom: 5 }}>
              <InputLabel>제작 년도</InputLabel>
              <Select
                sx={{ height: '100%' }}
                onClose={handleToggle}
                onOpen={handleToggle}
                value={formdata.productionYear}
                name="productionYear"
                label="제작 년도"
                placeholder="제작 년도"
                onChange={handleChange}
              >
                {PRODUCTION_INFO.map(({ id, yaer }) => (
                  <MenuItem key={id} value={yaer}>
                    {yaer}
                  </MenuItem>
                ))}
              </Select>
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
            <S.Title>작품 카테고리</S.Title>
            <FormControl sx={{ minWidth: 300, marginBottom: 5 }}>
              <InputLabel>카테고리</InputLabel>
              <Select
                sx={{ height: '100%' }}
                onClose={handleToggle}
                onOpen={handleToggle}
                value={formdata.categoryName}
                name="categoryName"
                label="카테고리"
                placeholder="카테고리"
                onChange={handleChange}
              >
                {CATEGORY_SELECT.map(({ id, name }) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <S.Title>작품 재료</S.Title>
            <Autocomplete
              multiple
              options={MATERIALS_INFO}
              getOptionLabel={option => option.value}
              name="materials"
              onChange={handleChange}
              filterSelectedOptions
              renderInput={params => (
                <TextField
                  {...params}
                  name="materials"
                  value={formdata.materials}
                  label="재료 선택"
                  placeholder="재료를 선택해주세요."
                />
              )}
            />
          </S.CardText>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 300,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>작품 설명</S.Title>
            <TextField
              onChange={handleChange}
              value={formdata.description}
              name="description"
              sx={{ width: '100%' }}
              multiline
              rows={4}
              label="직품 설명"
              placeholder="작품 설명을 적어주세요."
            />
          </S.CardText>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 500,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>작품 경매 설정</S.Title>
            <TextField
              sx={{ marginBottom: 5 }}
              label="경매 시작가"
              placeholder="경매 시작가를 입력하세요."
              value={formdata.startingBid}
              onChange={handleChange}
              name="startingBid"
              InputProps={{
                inputComponent: NumericFormatCustom,
              }}
              variant="standard"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{ width: '100%' }}
                components={['DesktopDatePicker']}
                onChange={handleChange}
                value={formdata.biddingStart}
                name="biddingStart"
              >
                <DemoItem label="경매 시작일">
                  <DesktopDatePicker
                    defaultValue={dayjs('2023-04-07')}
                    onChange={handleChange}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <FormControl sx={{ minWidth: 300, marginTop: 5, marginBottom: 5 }}>
              <InputLabel>경매 기간</InputLabel>
              <Select
                sx={{ height: '100%' }}
                onClose={handleToggle}
                onOpen={handleToggle}
                value={formdata.biddingTerm}
                name="biddingTerm"
                label="경매 기간"
                placeholder="경매 기간"
                onChange={handleChange}
              >
                {BIDDING_DAY.map(({ id, day }) => (
                  <MenuItem key={id} value={day}>
                    {day}일
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </S.CardText>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '40%',
            height: 500,
            marginBottom: '50px',
          }}
        >
          <S.CardText>
            <S.Title>작품 사진 첨부</S.Title>
            {formdata.image && (
              <CardMedia
                sx={{ maxWidth: 300, maxHeight: 300 }}
                component="img"
                name="image"
                image={formdata.image}
              />
            )}
            <Input type="file" name="image" onChange={handleChange} />
          </S.CardText>
        </Card>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            width: '40%',
            height: '50px',
            fontSize: '20px',
            backgroundColor: '#cdb8f1',
            '&:hover': { backgroundColor: '#babbf6' },
          }}
          onClick={sendData}
        >
          전송
        </Button>
      </S.CardBox>
    </S.Container>
  );
};
export default SalesRegistration;
