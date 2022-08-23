import { render } from '@testing-library/react';
import Chart from '../components/Chart';
import '@testing-library/jest-dom';

const chartData = [
  {
    timestamp: '30-5-2022',
    historicBalance: 9109,
  },
  {
    timestamp: '29-5-2022',
    historicBalance: 9543,
  },
  {
    timestamp: '28-5-2022',
    historicBalance: 9991,
  },
  {
    timestamp: '27-5-2022',
    historicBalance: 8322,
  },
];

test('Should render the Chart component', () => {
  const { asFragment } = render(<Chart chartData={chartData} />);
  expect(asFragment()).toMatchSnapshot();
});
