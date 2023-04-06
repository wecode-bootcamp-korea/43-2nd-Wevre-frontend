import React, { useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import Bid from './Bid/Bid';
import BuyerQual from './BuyerQualification/BuyerQualification';
// import Purchase from './PurchaseHistory/PurchaseHistory';
import SellerQual from './SellerQualification/SellerQualification';
// import SalesHistory from './SalesHistory/SalesHistory';
import SalesRegistration from './SalesRegistration/SalesRegistration';
import { SUB_TITLE } from './SUB_TITLE';
import { List } from '@mui/material';
import { Button } from '@mui/joy';
import * as S from './Mypage.style';

const Mypage = () => {
  const [id, setId] = useState(0);

  const ContentsComponents = {
    0: <UserInfo />,
    1: <BuyerQual />,
    2: <SellerQual />,
    3: <Bid />,
    // 4: <Purchase />,
    // 5: <SalesHistory />,
    6: <SalesRegistration />,
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
              <List key={id}>
                <Button
                  sx={{ width: 200, height: 50 }}
                  size="lg"
                  onClick={() => handleCategory(id)}
                  variant="plain"
                  color="neutral"
                >
                  {value}
                </Button>
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
