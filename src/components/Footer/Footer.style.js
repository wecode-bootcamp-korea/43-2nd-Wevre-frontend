import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 0 50px;
  padding: 50px 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ServiceArea = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')};
  padding-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const FooterMenu = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'cneter')};
  font-size: ${({ theme }) => theme.sizes.medium};
`;
export const MenuList = styled.div`
  margin-right: 120px;
`;

export const MenuTitle = styled.h2`
  font-weight: 600;
`;

export const MenuElement = styled.p`
  color: #22222280;
  font-size: 14px;
  padding-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuServiceElement = styled(MenuElement)`
  font-size: 12px;
  padding-top: 10px;
  color: ${props => (props.color ? props.color : '#22222280')};
`;

export const FrequentlyAskedQuestions = styled.button`
  padding: 10px;
  margin: 20px 0;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CorporationArea = styled.div`
width: 100%
  position: absolute;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  margin-top: 60px;
  padding: 30px 0;
`;

export const CorporationUnorderList = styled.ul`
  display: flex;
`;

export const CorporationTitle = styled.div`
  font-size: 14px;
  padding-right: 15px;
  font-weight: ${props => (props.important ? '400' : '300')};

  &:hover {
    cursor: pointer;
  }
`;

export const CorporationContentsBox = styled.div`
  padding: 20px 0;
`;

export const CorporationText = styled.p`
  font-size: 12px;
  padding-bottom: 6px;
`;

export const Icons = styled.button`
  position: absolute;
  right: ${props => props.position * 80 + 'px'};
  border: 0;
  outline: 0;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const IconImage = styled.img`
  width: 28px;
`;
