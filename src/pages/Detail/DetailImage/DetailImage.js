import React from 'react';
import * as S from './DetailImage.style';

const DetailImage = ({ data }) => {
  return (
    <S.DetailImgArea>
      <S.PrdImg src={data.image_url} alt="productImage" />
    </S.DetailImgArea>
  );
};

export default DetailImage;
