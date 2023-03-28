import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import loadingGif from '../../../assets/images/1495.gif';
import { useSetRecoilState } from 'recoil';
import { isLoginedState } from '../../../recoil';
import * as S from './Redirect.style';

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setIsLogined = useSetRecoilState(isLoginedState);
  const beforeAddress = localStorage.getItem('before-address');

  //인가코드 - 백엔드 통신시 사용
  const code = searchParams.get('code');

  //개발용 url
  const url = '/data/loginToken.json';
  const { loading, data, error } = useFetch(url);
  useEffect(() => {
    if (!loading) {
      if (data?.accessToken) {
        localStorage.removeItem('before-address');
        localStorage.setItem('login-token', data.accessToken);
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
