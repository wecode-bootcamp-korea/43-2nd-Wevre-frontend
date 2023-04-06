import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  width: 100%;
  overflow: hidden;
`;

export const BannerImageWrapper = styled.div`
  width: 100%;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BannerContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 120px;
`;

export const BannerContents = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  line-height: 36px;
`;

export const BannerButton = styled.button`
  width: 60%;
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;

  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
`;
