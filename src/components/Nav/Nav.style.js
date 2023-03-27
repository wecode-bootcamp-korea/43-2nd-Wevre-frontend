import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #e2ddd9;
  z-index: 99;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 80px;
  width: 1280px;
`;

export const Home = styled.div`
  font-family: ${({ theme }) => theme.fontStyle.logo};
`;

export const MenuList = styled.ul`
  display: flex;
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

export const StyledMenuLink = styled.li`
  margin: 0 20px;
  font-size: 20px;

  &:hover,
  &:visited,
  &:link,
  &:active {
    cursor: pointer;
    color: black;
  }
`;

export const StyledHomeLink = styled(StyledLink)`
  font-size: 48px;
  margin: 0;
`;
