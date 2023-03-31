import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import AboutPrice from './AboutPrice/AboutPrice';
import * as S from './DetailContents.style';

const DetailContents = ({ data, productId }) => {
  return (
    <div>
      <S.DetailContentsArea>
        <ProductInfo info={data} />
        <AboutPrice info={data} productId={productId} />
      </S.DetailContentsArea>
    </div>
  );
};

export default DetailContents;
