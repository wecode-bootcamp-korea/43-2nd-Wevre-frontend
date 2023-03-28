import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const MyChart = ({ chartData }) => {
  //FIXME mock data
  //const { loading, data } = useFetch('/data/chartData.json');

  const cdata = {
    labels: chartData.map((data, index) => index + 1),
    datasets: [
      {
        type: 'line',
        label: '입찰금액 변동률(%)',
        data: chartData.map(data => data.price_change_rate),
        backgroundColor: 'rgb(176, 218, 255, 1)',
        borderColor: 'rgb(176, 218, 255, 1)',
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: '입찰금액 (만 원)',
        data: chartData.map(data => Number(data.price) / 10000),
        backgroundColor: 'rgb(255, 180, 180, 0.5)',
        borderColor: 'rgb(255, 180, 180, 0.5)',
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <div>
        <Chart data={cdata} />
      </div>
    </div>
  );
};

export default MyChart;