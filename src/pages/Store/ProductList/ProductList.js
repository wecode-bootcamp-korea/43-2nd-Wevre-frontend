import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Product from './Product/Product';
import { API } from '../../../config';
import MUISelectSort from './MUISelectSort/MUISelectSort';
import * as S from './ProductList.style';

const ProductList = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchSortValue, setSearchSortValue] = useState('price');
  const params = useParams();
  const navigate = useNavigate();
  const categoryId = params.cateCode;

  let offset = searchParams.get('offset')
    ? Number(searchParams.get('offset'))
    : 0;

  const getProductsDataUrl = `${API.ITEMS}?category=${CATE_LIST[categoryId]}&sorting=${searchSortValue}`;

  const takeAllProducts = () => {
    if (categoryId) {
      fetch(getProductsDataUrl)
        .then(res => res.json())
        .then(data => setTotalCount(data.items.length));
    }
  };

  const takeOneProduct = () => {
    if (categoryId) {
      fetch(`${getProductsDataUrl}&offset=${offset}&limit=${LIMIT}`)
        .then(res => res.json())
        .then(data =>
          setItemList(offset === 0 ? data.items : [...itemList, data.items[0]])
        );
    }
  };

  useEffect(() => {
    takeAllProducts();
  }, [categoryId]);

  useEffect(() => {
    if (totalCount > 0) {
      takeOneProduct();
    }
  }, [totalCount, offset, categoryId, searchSortValue]);

  const infinityScrollListener = () => {
    if (
      document.body.scrollHeight - document.documentElement.scrollTop <=
      1120
    ) {
      const nextOffset = offset + LIMIT;
      if (nextOffset < totalCount) {
        return navigate(
          `/store/${categoryId}?offset=${nextOffset}&limit=${LIMIT}`
        );
      }
    }
  };
  useEffect(() => {
    if (categoryId) {
      window.addEventListener('scroll', infinityScrollListener);

      return () => window.removeEventListener('scroll', infinityScrollListener);
    }
  }, [itemList]);

  console.log('aaa', params);
  return (
    <article>
      {!categoryId ? (
        <S.GuideText>카테고리를 선택해주세요.</S.GuideText>
      ) : (
        itemList.length > 0 && (
          <>
            <S.ResultSort>
              <MUISelectSort
                setSearchSortValue={setSearchSortValue}
                categoryId={categoryId}
              />
            </S.ResultSort>
            {itemList.map(item => (
              <Product key={`${item.key}`} item={item} />
            ))}
          </>
        )
      )}
    </article>
  );
};

export default ProductList;

const CATE_LIST = {
  1: '공예',
  2: '회화',
  3: '사진',
  4: '조각',
};

const LIMIT = 1;
