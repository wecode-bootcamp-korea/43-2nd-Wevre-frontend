import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import loadingGif from '../../../assets/images/1495.gif';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginedState } from '../../../recoil';
import { API } from '../../../config';
import * as S from './Redirect.style';
import swal from 'sweetalert';

const Redirect = () => {
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_SOCIAL_LOGIN_API;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const setIsLogined = useSetRecoilState(isLoginedState);
  const isLogined = useRecoilValue(isLoginedState);
  const beforeAddress = localStorage.getItem('before-address');
  const domainHost = `https://kauth.kakao.com`;
  const endPoint = `oauth/token`;

  // 인가코드
  const authorizationCode = searchParams.get('code');

  const formData = new URLSearchParams();
  formData.append('grant_type', 'authorization_code');
  formData.append('client_id', KAKAO_API_KEY);
  formData.append('redirect_uri', REDIRECT_URI);
  formData.append('code', authorizationCode);
  const params = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  };

  useEffect(() => {
    if (authorizationCode) {
      fetch(`${domainHost}/${endPoint}`, params)
        .then(res => {
          if (res.ok) return res.json();
          else swal('로그인에 실패했습니다. 다시 시도해주시기 바랍니다.');
        })
        .then(data => {
          setToken(data.access_token);
        });
    }
  }, [authorizationCode]);

  useEffect(() => {
    if (token) {
      fetch(`${API.KAKAO}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data?.result.accessToken) {
            localStorage.removeItem('before-address');
            localStorage.setItem('login-token', data.result.accessToken);
            setIsLogined(true);
            navigate(beforeAddress);
          } else {
            swal('로그인에 실패했습니다. 다시 시도해주시기 바랍니다.');
          }
        });
    }
  }, [token]);

  return (
    <S.RedirectContainer>
      {!isLogined && <img src={loadingGif} alt="loading" />}
    </S.RedirectContainer>
  );
};

export default Redirect;
