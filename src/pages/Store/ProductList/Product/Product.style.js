import styled from 'styled-components';

export const PrdWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60vh;
  margin: 15vh 0;
  background-color: ${({ theme }) => theme.colors.silver};
`;

export const Soldout = styled.img`
  position: absolute;
  left: 10%;
  width: 40%;
  height: 45%;
  opacity: 0.8;
`;

export const PrdImg = styled.img`
  height: 100%;
`;

export const PrdContents = styled.div`
  line-height: 36px;
  width: 40%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  margin: 40px 0;
`;

export const Info = styled.p`
  padding-left: 33%;
  font-size: ${({ theme }) => theme.sizes.medium};
`;

export const DetailBtnWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: center;
`;

export const DetailBtn = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.orange};
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: ${({ theme }) => theme.colors.orange};
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;
