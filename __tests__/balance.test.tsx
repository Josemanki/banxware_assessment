import { render } from '@testing-library/react';
import Balance from '../components/Balance';
import '@testing-library/jest-dom';

jest.mock('../components/Chart');

const mockBalance = { amount: 12000, currency: 'EUR' };

test('Should render the balance component', () => {
  const { asFragment } = render(<Balance balance={mockBalance} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Should render balance with the right amount', () => {
  const { getByText } = render(<Balance balance={mockBalance} />);
  expect(getByText('12.000')).not.toBeNull();
});

test('Should render currency with the right one', () => {
  const { getByText } = render(<Balance balance={mockBalance} />);
  expect(getByText('EUR')).not.toBeNull();
});
