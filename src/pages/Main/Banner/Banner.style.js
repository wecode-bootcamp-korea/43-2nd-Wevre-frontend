import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-top: 240px;
  background-color: #e8e2e2;
  overflow: hidden;
`;

export const BannerImageWrapper = styled.div`
  width: 80%;
  margin: 0 80px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const BannerContentsWrapper = styled.div`
  font-size: 24px;
  width: 40%;
  padding: 120px;
  margin: 120px;
`;

export const BannerContents = styled.div`
  width: 60%;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const BannerButton = styled.button`
  width: 60%;
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  margin: 0 20px;

  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
`;
