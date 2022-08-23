import React from 'react';
import { TBalance } from '../types';

type Props = {
  balance: TBalance;
};

const Balance = ({ balance }: Props) => {
  return (
    <div className="balance">
      <span className="balance__amount">{balance.amount.toLocaleString()}</span>{' '}
      <span className="balance__currency">{balance.currency}</span>
    </div>
  );
};

export default Balance;
