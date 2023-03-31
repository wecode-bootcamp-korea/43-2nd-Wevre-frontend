import React, { useEffect, useState } from 'react';
import useFetch from '../../../../hooks/useFetch';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as S from './ProductInfo.style';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../../../config';

const ProductInfo = ({ info }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [isUpdateWishListFlag, setIsUpdateWishListFlag] = useState(false);

  const {
    author_name,
    description,
    height,
    item_name,
    length,
    materials,
    production_year,
    weight,
    width,
  } = info;

  const artMaterials = materials.map((material, index) => {
    if (materials[index] !== materials[materials.length - 1]) {
      return (material = `${material}, `);
    } else {
      return material;
    }
  });

  //FIXME - mock data devUrl
  //const getAllWishList = '/data/wishlistOne.json';

  const getAllWishList = `${API.WISHLIST}`;

  const { loading, data } = useFetch(getAllWishList);

  useEffect(() => {
    if (!loading) {
      data.data.map(data => {
        if (data.item_id === Number(params.id)) {
          setIsUpdateWishListFlag(true);
        }
      });
    }
  }, [loading]);

  const toggleItemToWishList = id => {
    const toggleUrl = `${getAllWishList}/items/${id}`;
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(toggleUrl, params).then(res => {
      if (res.ok) {
        setIsUpdateWishListFlag(prev => !prev);
      } else throw new Error(res);
    });

    navigate(`/detail/${id}`);
  };

  const controlWishList = id => {
    toggleItemToWishList(id);
  };

  return (
    <div>
      <S.Title>작품명 : {item_name}</S.Title>
      <S.Contents description={true}>작품 설명 : {description}</S.Contents>
      <S.Contents>작가 : {author_name}</S.Contents>
      <S.Contents>너비 : {width} cm</S.Contents>
      <S.Contents>높이 : {length} cm</S.Contents>
      <S.Contents>깊이 : {height} cm</S.Contents>
      <S.Contents>무게 : {weight} kg</S.Contents>
      <S.Contents>제작년도 : {production_year} 년</S.Contents>
      <S.Contents>소재 : {artMaterials}</S.Contents>

      <S.WishListArea onClick={() => controlWishList(params.id)}>
        위시리스트
        {isUpdateWishListFlag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </S.WishListArea>
    </div>
  );
};

export default ProductInfo;
