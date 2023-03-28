import React from 'react';
import { MYPAGE_CATEGORY } from '../MYPAGE_CATEGORY';
import * as S from './UserInfo.style';

const UserInfo = ({ id }) => {
  const title = MYPAGE_CATEGORY[id].title;

  return (
    <S.CategoryContainer>
      <S.Title>{title}</S.Title>
    </S.CategoryContainer>
  );
};

export default UserInfo;
