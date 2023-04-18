import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailImage from './DetailImage/DetailImage';
import DetailContents from './DetailContents/DetailContents';
import { API } from '../../config';
import * as S from './Detail.style';

const Detail = () => {
  const params = useParams();
  const id = params.id;

  //FIXME - mock data url
  //const getPorductData = '/data/detail.json';

  const getPorductData = `${API.ITEMS}/${id}`;

  const { loading, data, error } = useFetch(getPorductData);

  return (
    <S.DetailContainer>
      {!loading && !error && (
        <>
          <S.DetailImageInner>
            <DetailImage data={data.data[0]} />
          </S.DetailImageInner>
          <S.DetailContentsInner>
            <DetailContents data={data.data[0]} productId={id} />
          </S.DetailContentsInner>
        </>
      )}
    </S.DetailContainer>
  );
};

export default Detail;
