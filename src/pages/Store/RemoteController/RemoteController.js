import React, { useEffect, useState } from 'react';
import WishList from './WishList/WishList';
import { Button } from '@mui/joy';
import { API } from '../../../config';
import * as S from './RemoteController.style';

const RemoteController = () => {
  // FIXME - test url
  //const url = '/data/wishList.json';
  const [wishListData, setWishListData] = useState([]);

  const loginToken = localStorage.getItem('login-token');

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: loginToken,
    },
  };

  useEffect(() => {
    fetch(API.WISHLIST, params)
      .then(res => res.json())
      .then(data => setWishListData(data));
  }, []);

  return (
    <S.RcContainer>
      <S.RcBox>
        <Button
          sx={{ width: 150, fontSize: 20 }}
          color="black"
          size="lg"
          disabled
          variant="plain"
        >
          Wishlist
        </Button>
        <S.Count>
          총 {wishListData.data ? wishListData.data.length : 0}개
        </S.Count>
        <S.ListBox>
          {wishListData.data &&
            wishListData.data.map((list, index) => (
              <WishList key={index} data={list} />
            ))}
        </S.ListBox>
      </S.RcBox>
    </S.RcContainer>
  );
};

export default RemoteController;
