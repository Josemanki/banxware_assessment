import React, { Dispatch, SetStateAction } from 'react';
import { TDateRange } from '../types';

export type Props = {
  possibleRanges: TDateRange[];
  range: TDateRange;
  setRange: Dispatch<SetStateAction<TDateRange>>;
};

const RangePicker = ({ possibleRanges, range, setRange }: Props) => {
  return (
    <div className="range-picker">
      {possibleRanges.map((possibleRange, index) => (
        <button
          key={index}
          className={`range-picker__range${range === possibleRange ? ' selected' : ''}`}
          onClick={() => {
            setRange(possibleRange);
          }}
        >
          {possibleRange}
        </button>
      ))}
    </div>
  );
};

export default RangePicker;
