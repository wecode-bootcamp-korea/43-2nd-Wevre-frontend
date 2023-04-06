import React, { useEffect, useState } from 'react';
import { Card, CardCover } from '@mui/joy';
import Banner from './Banner/Banner';
import introVideo from '../../assets/images/Main.mp4';
import * as S from './Main.style';

const Main = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch('/data/mainIntro.json')
      .then(res => res.json())
      .then(data => setBannerData(data));
  }, []);
  return (
    <S.MainContainer>
      <S.IntroVideo>
        <Card sx={{ width: '100%', height: 800 }}>
          <CardCover>
            <S.StyledVideo src={introVideo} autoPlay muted loop />
          </CardCover>
        </Card>
      </S.IntroVideo>
      <S.BannerWrapper>
        <Card
          sx={{
            width: '100%',
            backgroundColor: 'rgba(245, 245, 247)',
          }}
        >
          {bannerData &&
            bannerData.map(banner => <Banner key={banner.id} data={banner} />)}
        </Card>
      </S.BannerWrapper>
    </S.MainContainer>
  );
};

export default Main;
