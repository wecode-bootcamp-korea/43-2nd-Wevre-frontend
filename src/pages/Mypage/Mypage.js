import React, { useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import Bid from './Bid/Bid';
import BuyerQual from './BuyerQualification/BuyerQualification';
import Purchase from './PurchaseHistory/PurchaseHistory';
import SellerQual from './SellerQualification/SellerQualification';
import { MYPAGE_CATEGORY } from './MYPAGE_CATEGORY';
import { List, ListItemButton, ListItemText } from '@mui/material';
import * as S from './Mypage.style';

const Mypage = () => {
  const [id, setId] = useState(0);

  const ContentsComponents = {
    0: <UserInfo id={id} />,
    1: <Bid id={id} />,
    2: <BuyerQual id={id} />,
    3: <Purchase id={id} />,
    4: <SellerQual id={id} />,
  };

  const handleCategory = id => {
    setId(id);
  };

  return (
    <S.Section>
      <S.Category>
        {MYPAGE_CATEGORY.map(({ title }, id) => {
          return (
            <List key={id}>
              <ListItemButton
                sx={{
                  display: 'flex',
                  height: '10vh',
                  width: '80%',
                  marginLeft: '10%',
                  border: 'none',
                  borderRadius: 5,
                  color: 'rgba(0, 0, 0, 0.7)',
                  backgroundColor: '#c0b4d6',
                }}
                onClick={() => handleCategory(id)}
              >
                <ListItemText
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {title}
                </ListItemText>
              </ListItemButton>
            </List>
          );
        })}
      </S.Category>
      <S.Content>{ContentsComponents[id]}</S.Content>
    </S.Section>
  );
};

export default Mypage;
