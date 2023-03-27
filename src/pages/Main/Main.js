import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import * as S from './Main.style';
import introVideo from '../../assets/images/Main.mp4';

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
        <S.StyledVideo src={introVideo} autoPlay muted controls loop />
      </S.IntroVideo>
      <S.BannerWrapper>
        {bannerData &&
          bannerData.map(banner => <Banner key={banner.id} data={banner} />)}
      </S.BannerWrapper>
    </S.MainContainer>
  );
};

export default Main;
