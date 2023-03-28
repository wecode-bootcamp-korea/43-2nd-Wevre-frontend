import { atom } from 'recoil';

export const isLoginedState = atom({
  key: 'isLogined',
  default: localStorage.getItem('login-token') ? true : false,
});

export const setModal = atom({
  key: 'isModalOpen',
  default: {
    isOpenModal: false,
    usage: '',
    data: {},
  },
});
