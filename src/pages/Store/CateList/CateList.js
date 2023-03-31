import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import * as S from './CateList.style';

const CateList = () => {
  const titleRef = useRef();
  const btnRef = useRef();
  const navigate = useNavigate();
  const { loading, data } = useFetch('/data/mainIntro.json');

  const moveToSelectedCate = cateCode => {
    navigate(`/store/${cateCode}?offset=0&limit=1`);
  };

  return (
    <>
      <S.GuideText ref={titleRef}>Categories</S.GuideText>
      <S.CategoryList ref={btnRef}>
        <S.CateUl>
          {!loading &&
            data.map(cate => (
              <li key={cate.id}>
                <S.CateBtn onClick={() => moveToSelectedCate(cate.id)}>
                  {cate.title}
                </S.CateBtn>
              </li>
            ))}
        </S.CateUl>
      </S.CategoryList>
    </>
  );
};

export default CateList;
