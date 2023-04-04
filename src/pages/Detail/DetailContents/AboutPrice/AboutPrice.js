import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MyChart from './Chart/MyChart';
import ModalPortal from '../../../../components/Modal/Portal/Portal';
import Modal from '../../../../components/Modal/Modal';
import { isLoginedState, setModal } from '../../../../recoil';
import useSocket from '../../../../hooks/useSocket';
import { Button } from '@mui/joy';
import * as S from './AboutPrice.style';
import swal from 'sweetalert';

const AboutPrice = ({ info, productId }) => {
  const isLogined = useRecoilValue(isLoginedState);
  const [modalOpen, setModalOpen] = useRecoilState(setModal);
  const [biddingPrice, setBiddingPrice] = useState(0);

  const { currentPrice, myBiddingPrice, chartData } = useSocket(
    0,
    productId,
    biddingPrice
  );
  const { starting_bid } = info;

  const openModal = () => {
    if (isLogined) {
      if (biddingPrice === myBiddingPrice) {
        swal(
          '고객님께서 입찰하신 가격이 현재 상한가입니다. 추가 입금을 할 수 없습니다.'
        );
        return;
      }
      setModalOpen({
        ...modalOpen,
        isOpenModal: true,
        usage: 'participate',
        data: { info, currentPrice, setBiddingPrice },
      });
    } else {
      swal('로그인이 필요한 페이지입니다.');
      setModalOpen({
        ...modalOpen,
        isOpenModal: true,
        usage: 'login',
        data: {},
      });
    }
  };

  return (
    <div>
      <S.Button>
        {' '}
        <Button
          sx={{
            marginTop: 5,
            width: '70%',
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            opacity: 0.8,
          }}
          disabled
          color="primary"
        >
          <S.PriceTxt>현재가</S.PriceTxt>
          <S.PriceValue>{currentPrice.toLocaleString()}원</S.PriceValue>
        </Button>
        <Button
          sx={{
            marginTop: 1,
            width: '70%',
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            opacity: 0.8,
          }}
          disabled
        >
          {' '}
          <S.PriceTxt>시작가</S.PriceTxt>
          <S.PriceValue>{Number(starting_bid).toLocaleString()}원</S.PriceValue>
        </Button>
        <Button
          sx={{
            marginTop: 5,
            width: '70%',
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            fontSize: 20,
            opacity: 0.9,
          }}
          onClick={openModal}
        >
          입 찰
        </Button>
      </S.Button>

      <S.ChartArea />
      {chartData && <MyChart chartData={chartData} />}
      <ModalPortal>
        {modalOpen.isOpenModal && <Modal data={modalOpen} />}
      </ModalPortal>
    </div>
  );
};

export default AboutPrice;
