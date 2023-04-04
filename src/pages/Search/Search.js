import React, { useEffect, useState } from 'react';
import MUISelectStandard from './MUISelect/MUISelectStandard';
import MUISelectSort from './MUISelect/MUISelectSort';
import { API } from '../../config';
import SearchedProducts from './SearchedProducts/SearchedProducts';
import * as S from './Search.style';

const Search = () => {
  const [searchStandardValue, setSearchStandardValue] = useState('itemName');
  const [searchSortValue, setSearchSortValue] = useState('price');
  const [inputData, setInputData] = useState('');

  const [searchData, setSearchData] = useState([]);

  //FIXME - devUrl
  //const searchUrl = `/data/searchedData.json`;

  const searchUrl = `${API.ITEMS}?${searchStandardValue}=${inputData}&sorting=${searchSortValue}`;

  useEffect(() => {
    if (inputData) {
      fetch(searchUrl)
        .then(res => res.json())
        .then(data => setSearchData(data.items));
    }
  }, [inputData]);

  const handleInput = e => {
    let removeSpecialCharactersReg =
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;

    if (removeSpecialCharactersReg.test(e.target.value)) {
      return;
    } else {
      setInputData(e.target.value);
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchInner>
        <MUISelectStandard setSearchStandardValue={setSearchStandardValue} />
        <S.SearchInput
          placeholder="검색키워드를 입력하세요."
          name="searchInput"
          onChange={handleInput}
        />
      </S.SearchInner>
      <S.ResultWrapper>
        <S.ResultTitleBox>
          <S.ResultTitle>검색 결과</S.ResultTitle>
          <S.ResultSort>
            <MUISelectSort setSearchSortValue={setSearchSortValue} />
          </S.ResultSort>
        </S.ResultTitleBox>

        <S.ResultListBox>
          {searchData.length > 0 &&
            searchData.map(product => (
              <SearchedProducts key={product.id} productData={product} />
            ))}
        </S.ResultListBox>
      </S.ResultWrapper>
    </S.SearchContainer>
  );
};

export default Search;
