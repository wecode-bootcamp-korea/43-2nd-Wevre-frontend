import React, { useRef } from 'react';
import { Button, Box } from '@mui/joy';
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
                <Box>
                  <Button
                    sx={{ width: 200, fontSize: 18 }}
                    color="neutral"
                    size="lg"
                    onClick={() => moveToSelectedCate(cate.id)}
                  >
                    {cate.title}
                  </Button>
                </Box>
              </li>
            ))}
        </S.CateUl>
      </S.CategoryList>
    </>
  );
};

export default CateList;
