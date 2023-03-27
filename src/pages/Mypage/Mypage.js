import React, { useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import Bid from './Bid/Bid';
import BuyerQual from './BuyerQualification/BuyerQualification';
import Purchase from './PurchaseHistory/PurchaseHistory';
import SellerQual from './SellerQualification/SellerQualification';
import { MYPAGE_CATEGORY } from './MYPAGE_CATEGORY';
import * as S from './Mypage.style';

const Mypage = () => {
  const [id, setId] = useState(0);

  const ContentsComponents = {
    0: <UserInfo />,
    1: <Bid />,
    2: <BuyerQual />,
    3: <Purchase />,
    4: <SellerQual />,
  };

  const Li = e => {
    setId(e.target.id);
  };

  return (
    <S.Section>
      <S.Category>
        <S.Ul>
          {MYPAGE_CATEGORY.map(({ title }, id) => (
            <S.Li onClick={Li} key={id} id={id}>
              {title}
            </S.Li>
          ))}
        </S.Ul>
      </S.Category>
      <S.Content>{ContentsComponents[id]}</S.Content>
    </S.Section>
  );
};

export default Mypage;
