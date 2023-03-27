import { atom } from 'recoil';

export const isLoginedState = atom({
  key: 'isLogined',
  default: false,
});

export const setModal = atom({
  key: 'isModalOpen',
  default: {
    isOpenModal: false,
    usage: '',
    data: {},
  },
});
