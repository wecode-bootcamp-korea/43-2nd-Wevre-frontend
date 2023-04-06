import { useEffect, useState } from 'react';
import { API, SOCKET_URL } from '../config';
import useFetch from './useFetch';

const useSocket = (initPrice, productId, price) => {
  const loginToken = localStorage.getItem('login-token');
  const { loading, data } = useFetch(`${API.BIDS}/items/${productId}`);

  const [currentPrice, setCurrentPrice] = useState(initPrice);
  const [myBiddingPrice, setMyBiddingPrice] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setCurrentPrice(Number(data.data[0]?.highest_bid));
      setMyBiddingPrice(Number(data.data[1]?.last_bid));
      setChartData(data?.data[2]);
    }
  }, [loading]);

  useEffect(() => {
    const ws = new WebSocket(
      `${SOCKET_URL}/${productId}?accessToken=${loginToken}`
    );

    ws.onmessage = ({ data }) => {
      setCurrentPrice(Number(JSON.parse(data)[0].highest_bid));
      setMyBiddingPrice(Number(JSON.parse(data)[1].last_bid));
      setChartData(JSON.parse(data)[2]);
    };

    if (price) {
      ws.onopen = () => {
        ws.send(price);
      };
    }
  }, [price]);

  return {
    currentPrice: currentPrice,
    myBiddingPrice: myBiddingPrice,
    chartData: chartData,
  };
};

export default useSocket;
