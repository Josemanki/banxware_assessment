import React from 'react';

import { THistoricBalance } from '../types';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registers necessary components for the chart.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  chartData: THistoricBalance[];
};

const Chart = ({ chartData }: Props) => {
  const labels = chartData.map((item) => item.timestamp);
  const historicBalance = chartData.map((item) => item.historicBalance);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Balance',
        backgroundColor: '#42f5a1',
        borderColor: '#42f5a1',
        data: historicBalance,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;
