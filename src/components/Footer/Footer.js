import React from 'react';
import github from '../../assets/images/githubIcon.png';
import trello from '../../assets/images/trelloIcon.png';
import notion from '../../assets/images/notionIcon.png';
import * as S from './Footer.style';

const Footer = () => {
  const moveToLink = href => {
    window.location.href = href;
  };
  return (
    <S.FooterContainer>
      <S.ServiceArea>
        <S.FooterMenu>
          <S.MenuList>
            <S.MenuTitle>이용안내</S.MenuTitle>
            {MENU_LIST_USE_INFO.map(menu => (
              <S.MenuElement key={menu.id}>{menu.text}</S.MenuElement>
            ))}
          </S.MenuList>
          <S.MenuList>
            <S.MenuTitle>고객지원</S.MenuTitle>
            {MENU_LIST_CUSTOMER_SUPPORT.map(menu => (
              <S.MenuElement key={menu.id}>{menu.text}</S.MenuElement>
            ))}
          </S.MenuList>
        </S.FooterMenu>
        <div />
        <div>
          <S.MenuTitle>고객센터 1577-8901</S.MenuTitle>
          <S.MenuServiceElement>
            운영시간 평일 11:00 - 18:00 (토, 일, 공휴일 연중무휴)
          </S.MenuServiceElement>
          <S.MenuServiceElement>
            점심시간 평일 13:00 - 14:00
          </S.MenuServiceElement>
          <S.MenuServiceElement color="black">
            1:1 문의하기는 앱에서만 가능합니다.
          </S.MenuServiceElement>
          <S.FrequentlyAskedQuestions>
            자주 묻는 질문
          </S.FrequentlyAskedQuestions>
        </div>
      </S.ServiceArea>
      <S.CorporationArea>
        <S.CorporationUnorderList>
          {MENU_LIST_CORPORATION.map(menu => (
            <li key={menu.id}>
              <S.CorporationTitle important={menu.important}>
                {menu.text}
              </S.CorporationTitle>
            </li>
          ))}
        </S.CorporationUnorderList>
        <S.CorporationContentsBox>
          {ICON_LIST.map(icon => (
            <S.Icons
              key={icon.id}
              position={icon.id}
              onClick={() => moveToLink(icon.href)}
            >
              <S.IconImage src={icon.description} alt="icon" />
            </S.Icons>
          ))}
          <S.CorporationText>
            위코드 주식회사 : 대표 송은우 / 사업자 등록번호 : 570-11-00000
            사업자정보 확인 / 통신판매업 : 제 2022-서울강남-06094
          </S.CorporationText>
          <S.CorporationText>
            사업장소재지 : 서울특별시 강남구 테헤란로 427, 10층(삼성동)
          </S.CorporationText>
        </S.CorporationContentsBox>
      </S.CorporationArea>
    </S.FooterContainer>
  );
};

export default Footer;
const MENU_LIST_USE_INFO = [
  { id: 1, text: '접수기준' },
  { id: 2, text: '이용정책' },
  { id: 3, text: '패널티 정책' },
  { id: 4, text: '커뮤니티 가이드라인' },
];
const MENU_LIST_CUSTOMER_SUPPORT = [
  { id: 1, text: '공지사항' },
  { id: 2, text: '서비스소개' },
  { id: 3, text: '쇼룸 안내' },
  { id: 4, text: '판매자 방문접수' },
];
const MENU_LIST_CORPORATION = [
  { id: 1, text: '회사소개', important: false },
  { id: 2, text: '인재채용', important: false },
  { id: 3, text: '제휴제안', important: false },
  { id: 4, text: '이용약관', important: false },
  { id: 5, text: '개인정보처리방침', important: true },
];
const ICON_LIST = [
  {
    id: 1,
    description: trello,
    href: 'https://trello.com/b/DnBSCbjV/wecode-2st-project-team-wevre',
  },
  {
    id: 2,
    description: notion,
    href: 'https://wecode.notion.site/E-Wevre-0b46290b836446429c9337a969f99df0',
  },
  {
    id: 3,
    description: github,
    href: 'https://github.com/wecode-bootcamp-korea/43-2nd-Wevre-frontend',
  },
];
