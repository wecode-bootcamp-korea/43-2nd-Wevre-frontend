import React, { useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import Bid from './Bid/Bid';
import BuyerQual from './BuyerQualification/BuyerQualification';
import Purchase from './PurchaseHistory/PurchaseHistory';
import SellerQual from './SellerQualification/SellerQualification';
import SalesHistory from './SalesHistory/SalesHistory';
// import SalesRegistration from './SalesRegistration/SalesRegistration';
import { SUB_TITLE } from './SUB_TITLE';
import { List, ListItemButton, ListItemText } from '@mui/material';
import * as S from './Mypage.style';

const Mypage = () => {
  const [id, setId] = useState(0);

  const ContentsComponents = {
    0: <UserInfo />,
    1: <BuyerQual />,
    2: <SellerQual />,
    3: <Bid />,
    4: <Purchase />,
    5: <SalesHistory />,
    // 6: <SalesRegistration />,
  };

  const handleCategory = id => {
    setId(id);
  };

  return (
    <S.Section>
      <S.Category>
        <S.CategoryTitle>마이페이지</S.CategoryTitle>
        {Object.entries(SUB_TITLE).map(([title, list]) => (
          <>
            <S.CategorySubTitle>{title}</S.CategorySubTitle>
            {list.map(({ value, id }) => (
              <List sx={{ height: '4vh' }} key={id}>
                <ListItemButton onClick={() => handleCategory(id)}>
                  <ListItemText
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                    }}
                  >
                    <S.ListText>{value}</S.ListText>
                  </ListItemText>
                </ListItemButton>
              </List>
            ))}
          </>
        ))}
      </S.Category>
      <S.Content>{ContentsComponents[id]}</S.Content>
    </S.Section>
  );
};

export default Mypage;
