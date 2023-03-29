const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_SOCIAL_LOGIN_API;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const domainHost = `https://kauth.kakao.com`;
const url = `/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_AUTH_URL = `${domainHost}${url}`;
