import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { isLoginedState, setModal } from '../../recoil';
import Modal from '../Modal/Modal';
import ModalPortal from '../Modal/Portal/Portal';
import * as S from './Nav.style';

const Nav = () => {
  const [isLogined, setIsLogined] = useRecoilState(isLoginedState);
  const [modalOpen, setModalOpen] = useRecoilState(setModal);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('login-token');
    setIsLogined(false);
    navigate('/');
  };

  const openModal = () => {
    setModalOpen({ ...modalOpen, isOpenModal: true, usage: 'login', data: {} });
  };

  return (
    <S.NavContainer>
      <S.NavWrapper>
        <S.Home>
          <S.StyledHomeLink to="/">Wevre</S.StyledHomeLink>
        </S.Home>
        <S.MenuList>
          {MENU_LIST.map(({ id, text, link }) => {
            if (id === 2) {
              return isLogined ? (
                <S.StyledMenuLink key={id} onClick={logout}>
                  {text[1]}
                </S.StyledMenuLink>
              ) : (
                <S.StyledMenuLink key={id} onClick={openModal}>
                  {text[0]}
                </S.StyledMenuLink>
              );
            } else {
              return (
                <S.StyledLink key={id} to={link}>
                  {text}
                </S.StyledLink>
              );
            }
          })}
          <S.StyledLink to="/search">
            <FaSearch />
          </S.StyledLink>
        </S.MenuList>
      </S.NavWrapper>
      <ModalPortal>
        {modalOpen.isOpenModal && <Modal data={modalOpen} />}
      </ModalPortal>
    </S.NavContainer>
  );
};

export default Nav;

const MENU_LIST = [
  { id: 1, text: '스토어', link: '/store' },
  { id: 2, text: ['로그인', '로그아웃'], link: '/login' },
  { id: 3, text: '마이페이지', link: '/mypage' },
];
