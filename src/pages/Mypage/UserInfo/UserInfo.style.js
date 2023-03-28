import theme from '../../../styles/theme';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  ${theme.mixins.flexBox('center', 'center')}
  flex-direction: column;
  padding: 50px;
  height: 80%;
  width: 60vw;
`;

export const UserInfoBox = styled.div`
  ${theme.mixins.flexBox('center', 'center')}
  height: 30%;
  width: 100%;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: 2%;
`;

export const UserInfoDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
`;

export const UserName = styled.h2`
  font-size: 20px;
`;

export const UserId = styled.h3`
  font-size: 16px;
`;

export const Wishlist = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WishlistTitle = styled.h1`
  ${theme.mixins.flexBox('center', 'center')}
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: 2%;
`;

export const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const BookMark = styled.div`
  position: relative;
  top: 10%;
  left: 90%;
  opacity: 0.9;
`;

export const CardTitle = styled.h2`
  ${theme.mixins.flexBox('center', 'center')}
  font-size: ${({ theme }) => theme.sizes.medium};
  line-height: 30px;
`;

export const CardArtist = styled.h3`
  ${theme.mixins.flexBox('center', 'center')}
  font-size: ${({ theme }) => theme.sizes.small};
`;
