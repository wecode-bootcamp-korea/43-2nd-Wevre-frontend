import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import * as S from './Nav.style';

const Nav = () => {
  const navigate = useNavigate();
  const login_token = localStorage.getItem('login-token');

  const logout = () => {
    localStorage.removeItem('login-token');
    navigate('/');
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
              return login_token ? (
                <S.StyledMenuLink key={id} onClick={logout}>
                  {text[1]}
                </S.StyledMenuLink>
              ) : (
                <S.StyledLink key={id} to={link}>
                  {text[0]}
                </S.StyledLink>
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
    </S.NavContainer>
  );
};

export default Nav;

const MENU_LIST = [
  { id: 1, text: '스토어', link: '/store' },
  { id: 2, text: ['로그인', '로그아웃'], link: '/login' },
  { id: 3, text: '마이페이지', link: '/mypage' },
];
