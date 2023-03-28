import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 200px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 10%;
  line-height: 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h1`
  opacity: 0.5;
  margin-bottom: 10px;
`;

export const TextBox = styled.div`
  margin-top: 20px;
`;

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PriceList = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  font-size: 16px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  font-size: 18px;
`;
