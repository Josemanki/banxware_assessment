import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Chart from '../components/Chart';
import Balance from '../components/Balance';
import RangePicker from '../components/RangePicker';
import { TBalance, TDateRange, ITransaction } from '../types';
import { getHistoricBalance, getTimeframe } from '../utils/utils';

const Home: NextPage = () => {
  const MERCHANT_NAME = 'Merchant Foo';
  const POSSIBLE_RANGES: TDateRange[] = ['1D', '5D', '1M', '3M', '6M'];

  const [range, setRange] = useState<TDateRange>('3M');
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [balance, setBalance] = useState<TBalance>({ amount: 0, currency: 'EUR' });
  let chartData = getHistoricBalance(getTimeframe(transactions, range), balance.amount);

  // Processes raw data though getHistoricBalance within the given timeframe to output chart data.
  useEffect(() => {
    chartData = getHistoricBalance(getTimeframe(transactions, range), balance.amount);
  }, [balance, range]);

  // Calls /api/getRawData API to take raw data and use as proxy.
  useEffect(() => {
    const fetchRawData = async () => {
      try {
        const res = await fetch('/api/getRawData');
        const fetchedRaw = await res.json();
        console.log(fetchedRaw);
        setBalance(fetchedRaw.balance);
        setTransactions(fetchedRaw.transactions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRawData();
  }, []);

  return (
    <div className="App">
      <main className="container">
        <h1 className="merchant-name">{MERCHANT_NAME}</h1>
        <Balance balance={balance} />
        <RangePicker possibleRanges={POSSIBLE_RANGES} range={range} setRange={setRange} />
        <Chart chartData={chartData} />
      </main>
    </div>
  );
};

export default Home;
