import theme from '../../../styles/theme';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  ${theme.mixins.flexBox('center', '')}
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30%;
  width: 100%;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  margin: 5vh;
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const UserInfoDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const UserQaulDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserQaulDetailTitle = styled.h1`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const UserQaulDetailText = styled.h2`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
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

export const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
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
