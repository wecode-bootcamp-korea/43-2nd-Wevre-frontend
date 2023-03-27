import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import * as S from './Modal.style';

const Modal = ({ usage, data }) => {
  //usage는 어떤 목적으로 모달창이 사용될 것인지 정하는 변수
  //data는 모달창 구현에 필요한 data가 담긴 변수이다.
  //두 변수는 추후에 어떤 용도로 모달을 활용하는지에 대해 구분하기 위해 사용한다.

  const [height, setHeight] = useState(window.innerHeight);
  const modalRef = useRef();

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
    <S.ModalContainer ref={modalRef}>
      <S.ModalMain>
        <S.ModalInner />
      </S.ModalMain>
    </S.ModalContainer>
  );
};

export default Modal;
