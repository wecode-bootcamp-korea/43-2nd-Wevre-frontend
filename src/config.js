const BASE_URL = 'http://10.58.52.185:3000';

export const API = {
  MAIN: `${BASE_URL}/`,
  USERS: `${BASE_URL}/users`,
  BUYER: `${BASE_URL}/users/buyer`,
  SELLER: `${BASE_URL}/users/seller`,
  BIDS: `${BASE_URL}/bids`,
  PURCHASES: `${BASE_URL}/payments/purchases`,
  SALES: `${BASE_URL}/payments/sales`,
  WISHLIST: `${BASE_URL}/wishlist`,
  ORDERS: `${BASE_URL}/orders`,
  KAKAO: `${BASE_URL}/users/auth/kakao/callback`,
  ITEMS: `${BASE_URL}/items`,
  KAKAOPAY: `${BASE_URL}/payments/kakao/ready`,
};
