import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 80%;
  height: 600px;
  overflow: hidden;
  object-fit: cover;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 600px;
`;

export const CarouselContents = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.skyblue};
  right: 5%;
  bottom: 20%;
`;
