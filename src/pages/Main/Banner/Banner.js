import React, { useEffect } from 'react';
import * as S from './Banner.style';
import { Button, Box } from '@mui/joy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';

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
      <Box sx={{ marginTop: '100px' }}>
        <Button size="lg" variant="solid" color="neutral" onClick={moveToStore}>
          {' '}
          {title} 작품 감상
        </Button>
      </Box>
    </S.BannerContentsWrapper>
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {position === 'left' ? (
        <Card sx={{ width: '100%', margin: '120px 0px 120px 0px' }}>
          <S.BannerContainer data-aos="fade-right">
            {imageContainer}
            {contentsContainer}
          </S.BannerContainer>
        </Card>
      ) : (
        <Card sx={{ width: '100%', margin: '120px 0px 120px 0px' }}>
          <S.BannerContainer data-aos="fade-left">
            {contentsContainer}
            {imageContainer}
          </S.BannerContainer>
        </Card>
      )}
    </div>
  );
};

export default Banner;
