import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import loadingGif from '../../../assets/images/1495.gif';
import { useSetRecoilState } from 'recoil';
import { isLoginedState } from '../../../recoil';
import { API } from '../../../config';
import * as S from './Redirect.style';

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setIsLogined = useSetRecoilState(isLoginedState);
  const beforeAddress = localStorage.getItem('before-address');

  //인가코드 - 백엔드 통신시 사용
  const authorizationCode = searchParams.get('code');

  // FIXME - 개발용 로그인 토큰 url (로컬 통신)
  //const devUrl = '/data/loginToken.json';

  const params = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
  };

  const { loading, data } = useFetch(
    `${API.KAKAO}?code=${authorizationCode}`,
    params
  );

  useEffect(() => {
    if (!loading) {
      if (data?.result.accessToken) {
        localStorage.removeItem('before-address');
        localStorage.setItem('login-token', data.result.accessToken);
        setIsLogined(true);
        navigate(beforeAddress);
      } else {
        alert('로그인에 실패했습니다. 다시 시도해주시기 바랍니다.');
      }
    }
  }, [loading]);

  return (
    <S.RedirectContainer>
      {loading && <img src={loadingGif} alt="loading" />}
    </S.RedirectContainer>
  );
};

export default Redirect;
