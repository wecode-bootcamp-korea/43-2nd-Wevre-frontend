import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../../../config';
import { useRecoilValue } from 'recoil';
import { isLoginedState } from '../../../../recoil';
import * as S from './ProductInfo.style';
import swal from 'sweetalert';

const ProductInfo = ({ info }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [isUpdateWishListFlag, setIsUpdateWishListFlag] = useState(false);
  const [wishListData, setWishListData] = useState([]);
  const isLogined = useRecoilValue(isLoginedState);

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

  useEffect(() => {
    fetch(API.WISHLIST, getParams)
      .then(res => res.json())
      .then(data => setWishListData(data.data));
  }, []);

  useEffect(() => {
    if (wishListData.length > 0) {
      wishListData.map(data => {
        if (data.item_id === Number(params.id)) {
          setIsUpdateWishListFlag(true);
        }
      });
    }
  }, [wishListData]);

  //FIXME - mock data devUrl
  //const getAllWishList = '/data/wishlistOne.json';

  const getAllWishList = `${API.WISHLIST}`;

  const loginToken = localStorage.getItem('login-token');
  const getParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: loginToken,
    },
  };

  const toggleItemToWishList = id => {
    const toggleUrl = `${getAllWishList}/items/${id}`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: loginToken,
      },
    };

    fetch(toggleUrl, params).then(res => {
      if (res.ok) {
        setIsUpdateWishListFlag(prev => !prev);
      } else throw new Error(res);
    });

    navigate(`/detail/${id}`);
  };

  const controlWishList = id => {
    if (!isLogined) {
      swal('로그인이 필요합니다.');
      return;
    }
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
      <S.Button>
        <Button
          variant="plain"
          sx={{
            marginTop: 10,
            width: '70%',
            height: 50,
            backgroundColor: 'rgb(138,138,139)',
            color: '#fafafa',
            ':hover': {
              backgroundColor: 'rgb(68,68,69)',
            },
          }}
          onClick={() => controlWishList(params.id)}
        >
          위시리스트
          {isUpdateWishListFlag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </Button>
      </S.Button>
    </div>
  );
};

export default ProductInfo;
