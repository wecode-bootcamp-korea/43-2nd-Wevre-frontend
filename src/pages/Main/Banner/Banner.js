import React, { useEffect } from 'react';
import * as S from './Banner.style';
import MuiButton from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Banner = ({ data }) => {
  const navigate = useNavigate();
  const { id, position, imgUrl, contents, title } = data;
  const moveToStore = () => {
    navigate(`/store/${id}`);
  };

  const imageContainer = (
    <S.BannerImageWrapper position={position}>
      <S.BannerImage src={`${imgUrl}`} alt="banner" />
    </S.BannerImageWrapper>
  );

  const contentsContainer = (
    <S.BannerContentsWrapper position={position}>
      <S.BannerContents>{contents}</S.BannerContents>
      <MuiButton variant="contained" onClick={moveToStore}>
        {' '}
        {title} 작품 감상
      </MuiButton>
    </S.BannerContentsWrapper>
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {position === 'left' ? (
        <S.BannerContainer data-aos="fade-right">
          {imageContainer}
          {contentsContainer}
        </S.BannerContainer>
      ) : (
        <S.BannerContainer data-aos="fade-left">
          {contentsContainer}
          {imageContainer}
        </S.BannerContainer>
      )}
    </div>
  );
};

export default Banner;
