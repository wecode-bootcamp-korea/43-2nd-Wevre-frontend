import React from 'react';
import { Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './Carousel.style';

const Carousel = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <S.Carousel>
      <Card sx={{ width: '100%', height: '600px' }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          autoplay
          loop
        >
          {SLIDER_DATA.map(slider => (
            <SwiperSlide key={slider.id}>
              <S.CarouselImg src={`${slider.img}`} alt="slideImg" />
              <S.CarouselContents>{slider.site}</S.CarouselContents>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </S.Carousel>
  );
};

export default Carousel;

const SLIDER_DATA = [
  {
    id: 1,
    site: '한국미술협회',
    img: 'https://images.unsplash.com/photo-1538342014732-212dc8f76863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3005&q=80',
    link: 'https://kfaa.or.kr/',
    contents:
      '저희 Wevre는 한국미술협회와 제휴중이며 다양한 상품을 거래하고 있습니다.',
  },
  {
    id: 2,
    site: '현대백화점미아점',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTk4JTg4JUVDJTg4JUEwJUVEJTkyJTg4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://www.ehyundai.com/newPortal/DP/DP000000_V.do?branchCd=B00141000',
  },
  {
    id: 3,
    site: '한국연극협회',
    img: 'https://images.unsplash.com/photo-1588928781379-c355ab3edc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: 'http://ktheater.bravod.co.kr/sub3_1.html',
  },
  {
    id: 4,
    site: '한국장애인국제예술단',
    img: 'https://i.pinimg.com/564x/af/7b/ff/af7bffcde56915e9942d06b92c97cbe1.jpg',
    link: 'http://www.idok.co.kr/',
  },
  {
    id: 5,
    site: '와이즈발레단',
    img: 'https://images.unsplash.com/photo-1602781723875-7e7edaa1e5ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1499&q=80',
    link: 'https://www.wiseballettheater.com/',
  },
];
