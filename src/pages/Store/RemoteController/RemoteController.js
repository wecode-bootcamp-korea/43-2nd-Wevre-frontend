import React from 'react';
import useFetch from '../../../hooks/useFetch';
import * as S from './RemoteController.style';
import WishList from './WishList/WishList';

const RemoteController = () => {
  // FIXME - test url
  const url = '/data/wishList.json';

  const { loading, data } = useFetch(url);

  return (
    <S.RcContainer>
      <S.RcBox>
        <S.Title>WishList 🧞‍♂️</S.Title>
        <S.Count>총 {!loading ? data.data.length : 0}개</S.Count>
        <S.ListBox>
          {!loading &&
            data.data.map((list, index) => (
              <WishList key={index} data={list} />
            ))}
        </S.ListBox>
      </S.RcBox>
    </S.RcContainer>
  );
};

export default RemoteController;
