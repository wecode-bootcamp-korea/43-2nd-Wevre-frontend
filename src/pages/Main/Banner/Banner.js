import React, { useEffect } from 'react';
import * as S from './Banner.style';
import MuiButton from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = ({ data }) => {
  const { position, imgUrl, contents, title } = data;

  const imageContainer = (
    <S.BannerImageWrapper position={position}>
      <S.BannerImage src={`${imgUrl}`} alt="banner" />
    </S.BannerImageWrapper>
  );

  const contentsContainer = (
    <S.BannerContentsWrapper position={position}>
      <S.BannerContents>{contents}</S.BannerContents>
      <MuiButton variant="contained"> {title} 작품 감상</MuiButton>
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
