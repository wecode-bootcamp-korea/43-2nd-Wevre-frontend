import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const useSocket = (initPrice, productId, price) => {
  const { loading, data } = useFetch(
    `http://10.58.52.108:3000/bids/items/${productId}`
  );

  const [currentPrice, setCurrentPrice] = useState(initPrice);
  const [myBiddingPrice, setMyBiddingPrice] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setCurrentPrice(Number(JSON.parse(data)[0].highest_bid));
      setMyBiddingPrice(Number(JSON.parse(data)[1].last_bid));
      setChartData(JSON.parse(data)[2]);
    }
  }, [loading]);

  useEffect(() => {
    const ws = new WebSocket(`ws://10.58.52.108:3000/${productId}`);

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
