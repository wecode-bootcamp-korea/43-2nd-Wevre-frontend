import styled from 'styled-components';

export const PriceArea = styled.div`
  display: block;
  padding: 20px;
  width: 85%;
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px 10px 0 0;

  background-color: ${props =>
    props.type === 'start' ? '#ef6253' : '#41b979'};

  border-color: ${props => (props.type === 'start' ? '#ef6253' : '#41b979')};

  font-weight: 600;
`;

export const PriceTxt = styled.span`
  border-right: 1px solid black;
  padding: 15px 10px 15px 0;
`;

export const PriceValue = styled.span`
  float: right;
`;

export const DoBidding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 85%;
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px 10px 0 0;
  font-weight: 600;
  text-align: center;
  border-color: ${({ theme }) => theme.colors.gray};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.silver};
  }
`;

export const ChartArea = styled.div`
  margin: 80px 0;
`;
