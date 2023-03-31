import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import CateList from './CateList/CateList';
import ProductList from './ProductList/ProductList';
import RemoteController from './RemoteController/RemoteController';
import * as S from './Store.style';

const Store = () => {
  const params = useParams();
  const isSelectedCate = params.cateCode ? true : false;

  return (
    <S.StoreContainer>
      <S.StoreMain>
        {!isSelectedCate && (
          <>
            <S.AlienceTitle>Affiliated with Wevre</S.AlienceTitle>
            <Carousel />
          </>
        )}
        <CateList />
        <ProductList />
      </S.StoreMain>
      <S.WishListRC>
        <RemoteController />
      </S.WishListRC>
    </S.StoreContainer>
  );
};

export default Store;
