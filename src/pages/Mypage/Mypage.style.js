import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 140px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid black;
`;

export const Ul = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10%;
  list-style: none;
`;
export const Li = styled.div`
  font-size: 30px;
  margin-bottom: 10%;
  border: 1px solid black;
  padding: 20px 20px;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid black;
`;
