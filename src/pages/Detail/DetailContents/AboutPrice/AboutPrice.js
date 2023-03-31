import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MyChart from './Chart/MyChart';
import ModalPortal from '../../../../components/Modal/Portal/Portal';
import Modal from '../../../../components/Modal/Modal';
import { isLoginedState, setModal } from '../../../../recoil';
import useSocket from '../../../../hooks/useSocket';
import * as S from './AboutPrice.style';

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
        alert(
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
      alert('로그인이 필요한 페이지입니다.');
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
      <S.PriceArea type="current">
        <S.PriceTxt>현재가</S.PriceTxt>
        <S.PriceValue>{currentPrice.toLocaleString()}원</S.PriceValue>
      </S.PriceArea>
      <S.PriceArea type="start">
        <S.PriceTxt>시작가</S.PriceTxt>
        <S.PriceValue>{Number(starting_bid).toLocaleString()}원</S.PriceValue>
      </S.PriceArea>
      <S.DoBidding onClick={openModal}>입 찰</S.DoBidding>
      <S.ChartArea />
      {chartData && <MyChart chartData={chartData} />}
      <ModalPortal>
        {modalOpen.isOpenModal && <Modal data={modalOpen} />}
      </ModalPortal>
    </div>
  );
};

export default AboutPrice;
