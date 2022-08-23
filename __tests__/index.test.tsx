import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

jest.mock('../components/Chart');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        balance: { amount: 10000, currency: 'EUR' },
        transactions: [
          {
            amount: -765,
            currency: 'EUR',
            date: '2022-02-07T09:57:27.235Z',
            status: 'BOOKED',
          },
          {
            amount: -911,
            currency: 'EUR',
            date: '2022-01-03T22:00:09.002Z',
            status: 'PROCESSED',
          },
          {
            amount: -397,
            currency: 'EUR',
            date: '2022-03-06T11:21:15.655Z',
            status: 'PROCESSED',
          },
          {
            amount: 287,
            currency: 'EUR',
            date: '2022-06-29T04:56:32.612Z',
            status: 'BOOKED',
          },
          {
            amount: -291,
            currency: 'EUR',
            date: '2022-02-27T08:47:25.270Z',
            status: 'BOOKED',
          },
          {
            amount: -315,
            currency: 'EUR',
            date: '2022-06-06T10:44:57.246Z',
            status: 'PROCESSED',
          },
          {
            amount: -719,
            currency: 'EUR',
            date: '2022-06-20T09:22:07.481Z',
            status: 'BOOKED',
          },
          {
            amount: -987,
            currency: 'EUR',
            date: '2022-04-26T19:44:25.255Z',
            status: 'CANCELLED',
          },
          {
            amount: 28,
            currency: 'EUR',
            date: '2022-02-07T17:30:08.159Z',
            status: 'PROCESSED',
          },
          {
            amount: 196,
            currency: 'EUR',
            date: '2022-03-22T15:47:54.645Z',
            status: 'PROCESSED',
          },
          {
            amount: 994,
            currency: 'EUR',
            date: '2022-04-14T17:17:40.961Z',
            status: 'PROCESSED',
          },
          {
            amount: -700,
            currency: 'EUR',
            date: '2022-03-04T23:09:57.674Z',
            status: 'BOOKED',
          },
          {
            amount: -748,
            currency: 'EUR',
            date: '2022-06-18T17:52:38.027Z',
            status: 'PROCESSED',
          },
          {
            amount: 964,
            currency: 'EUR',
            date: '2022-01-28T02:27:42.484Z',
            status: 'CANCELLED',
          },
          {
            amount: 302,
            currency: 'EUR',
            date: '2022-05-08T14:53:55.298Z',
            status: 'PROCESSED',
          },
          {
            amount: 0,
            currency: 'EUR',
            date: '2022-05-29T02:31:24.066Z',
            status: 'BOOKED',
          },
          {
            amount: 898,
            currency: 'EUR',
            date: '2022-06-01T03:48:48.462Z',
            status: 'CANCELLED',
          },
          {
            amount: 830,
            currency: 'EUR',
            date: '2022-01-22T19:07:16.313Z',
            status: 'CANCELLED',
          },
          {
            amount: 968,
            currency: 'EUR',
            date: '2022-04-09T05:12:58.513Z',
            status: 'BOOKED',
          },
          {
            amount: 775,
            currency: 'EUR',
            date: '2022-02-10T16:53:24.789Z',
            status: 'CANCELLED',
          },
          {
            amount: 72,
            currency: 'EUR',
            date: '2022-05-04T18:44:35.949Z',
            status: 'PROCESSED',
          },
          {
            amount: 612,
            currency: 'EUR',
            date: '2022-01-30T14:58:31.284Z',
            status: 'CANCELLED',
          },
          {
            amount: -805,
            currency: 'EUR',
            date: '2022-01-07T09:31:34.078Z',
            status: 'CANCELLED',
          },
        ],
      }),
  })
) as jest.Mock;

test('Renders merchant heading', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});

it('Renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
