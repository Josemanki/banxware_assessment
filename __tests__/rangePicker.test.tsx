import { render, fireEvent } from '@testing-library/react';
import RangePicker, { Props } from '../components/RangePicker';
import '@testing-library/jest-dom';

jest.mock('../components/Chart');

const setRange = jest.fn();
const mockProps: Props = { possibleRanges: ['1D', '5D', '1M', '3M', '6M'], range: '3M', setRange: setRange };

test('Should render the rangePicker component', () => {
  const { asFragment } = render(<RangePicker {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Should render 5 button components', () => {
  const { queryAllByRole } = render(<RangePicker {...mockProps} />);
  expect(queryAllByRole('button')).toHaveLength(5);
});

test('Should call setRange function when button clicked', () => {
  const { getByText } = render(<RangePicker {...mockProps} />);

  const sixMonthsButton = getByText('6M');

  fireEvent.click(sixMonthsButton);
  expect(setRange).toHaveBeenCalled();
});
