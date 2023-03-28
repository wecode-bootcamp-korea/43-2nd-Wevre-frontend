import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { setModal } from '../../recoil';
import SignIn from '../../pages/SignIn/SignIn';
import Participate from '../../pages/Participate/Participate';
import Bid from '../../pages/Mypage/Bid/Bid';
import * as S from './Modal.style';

const Modal = props => {
  const { usage, data } = props.data;
  const [height, setHeight] = useState(window.innerHeight);
  const modalRef = useRef();
  const closeModal = useResetRecoilState(setModal);

  const purposeOfModal = {
    login: <SignIn data={data} />,
    participate: <Participate data={data} />,
    bid: <Bid data={data} />,
  };

  useEffect(() => {
    modalRef.current.style.height = height.toString() + 'px';
  }, [height]);

  const listener = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    //화면 크기가 달라질 때마다 모달 크기도 조절한다.
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });

  return (
    <S.ModalContainer ref={modalRef} onClick={closeModal}>
      <S.ModalMain onClick={e => e.stopPropagation()}>
        <S.ModalInner>{purposeOfModal[usage]}</S.ModalInner>
      </S.ModalMain>
    </S.ModalContainer>
  );
};

export default Modal;
