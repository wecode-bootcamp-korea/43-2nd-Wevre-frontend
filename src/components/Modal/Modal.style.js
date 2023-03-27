import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalMain = styled.div`
  ${props => props.theme.mixins.transform('50%', '50%')}
  width: 500px;
  height: 500px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 30px;
`;

export const ModalInner = styled.div`
  padding: 40px;
`;
