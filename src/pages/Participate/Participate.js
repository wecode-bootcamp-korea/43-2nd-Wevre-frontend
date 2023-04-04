import React from 'react';
import { useResetRecoilState } from 'recoil';
import { useState } from 'react';
import { setModal } from '../../recoil';
import * as S from './Participate.sylte';

const Participate = ({ data }) => {
  const closeModal = useResetRecoilState(setModal);

  const { starting_bid } = data.info;
  const { currentPrice, setBiddingPrice } = data;

  const [price, setPrice] = useState('');
  const [isCheckedOk, isSetCheckedOk] = useState(true);
  const [isBidActivation, setIsBidActivation] = useState(false);

  const getIntegerPrice = price => {
    return Number(price.replace(/,/g, ''));
  };

  const enterPrice = ({ target }) => {
    const { value } = target;
    const integerPrice = getIntegerPrice(value);

    if (integerPrice) {
      isSetCheckedOk(true);
      setPrice(integerPrice.toLocaleString());
      if (integerPrice > currentPrice) setIsBidActivation(true);
      else setIsBidActivation(false);
    } else {
      isSetCheckedOk(false);
      setPrice('');
      setIsBidActivation(false);
    }
  };

  const floorOnesPlace = ({ target }) => {
    const { value } = target;
    const integerPrice = getIntegerPrice(value);
    setPrice((Math.floor(integerPrice / 10) * 10).toLocaleString());
  };

  const addPrice = addPrice => {
    const integerPrice = getIntegerPrice(price);
    if (integerPrice + addPrice > currentPrice) setIsBidActivation(true);
    setPrice((integerPrice + addPrice).toLocaleString());
    isSetCheckedOk(true);
  };

  const setBidprice = () => {
    setBiddingPrice(getIntegerPrice(price));
    closeModal();
  };
  return (
    <div>
      <S.BidHead>
        <S.BidText>입찰 진행 중 &nbsp;&nbsp;</S.BidText>
        <S.BidImg src={BID_IMG} alt="bidImage" />
      </S.BidHead>
      <S.BidWrapper>
        <S.ContentsArea>
          <S.SetPrice>
            <S.PriceTxt>입찰가</S.PriceTxt>
            <S.StyledInput
              id="outlined-basic"
              label="outlined"
              variant="outlined"
              placeholder="입찰가를 설정해주세요"
              onChange={enterPrice}
              onBlur={floorOnesPlace}
              value={price}
            />
            <S.PriceTxt>원</S.PriceTxt>
          </S.SetPrice>
          <S.GuideBox isCheckedOk={isCheckedOk}>
            입찰가는 숫자만 입력 가능합니다. 다시 입력해주시기 바랍니다.
          </S.GuideBox>
          <ul>
            {PIRCE_BUTTONS.map(price => (
              <S.PriceBtn
                key={price.id}
                isCheckedOk={isCheckedOk}
                onClick={() => addPrice(price.value)}
              >
                {price.text}
              </S.PriceBtn>
            ))}
          </ul>
          <S.PriceWrapper>
            <S.CurrentPrice>
              현재가 : {currentPrice.toLocaleString()}원
            </S.CurrentPrice>
            <S.StartPrice>
              시작가 : ${Number(starting_bid).toLocaleString()}원
            </S.StartPrice>
          </S.PriceWrapper>
          {isBidActivation ? (
            <S.BidBtnActive onClick={setBidprice}>
              입&nbsp;&nbsp;&nbsp;&nbsp;찰
            </S.BidBtnActive>
          ) : (
            <S.BidBtnDisabled>입&nbsp;&nbsp;&nbsp;&nbsp;찰</S.BidBtnDisabled>
          )}
        </S.ContentsArea>
      </S.BidWrapper>
    </div>
  );
};

export default Participate;
const BID_IMG = 'https://cdn-icons-png.flaticon.com/512/2669/2669309.png';

const PIRCE_BUTTONS = [
  { id: 1, name: '100million', text: '+1억', value: 100000000 },
  { id: 2, name: '10million', text: '+1000만', value: 10000000 },
  { id: 3, name: '1million', text: '+100만', value: 1000000 },
];
