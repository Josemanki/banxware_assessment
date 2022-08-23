import { ITransaction, TBalance, TDateRange } from '../types';

export const formatDate = (dateStr: Date) => {
  const date = new Date(dateStr).toISOString().split('T')[0].split('-').reverse().join('-');
  return date;
};

// Returns transactions that are within the given timeframe from the transaction list
// The gist being filtering the transaction list, and comparing the given timeframe
// with the current day/month minus the number. Returns if the date of the trx is bigger.
export const getTimeframe = (transactions: ITransaction[], dateRange: TDateRange): ITransaction[] => {
  switch (dateRange) {
    case '1D':
      return transactions.filter((trx) => new Date(trx.date) > new Date(new Date().setDate(new Date().getDate() - 1)));
    case '5D':
      return transactions.filter((trx) => new Date(trx.date) > new Date(new Date().setDate(new Date().getDate() - 5)));
    case '1M':
      return transactions.filter(
        (trx) => new Date(trx.date) > new Date(new Date().setMonth(new Date().getMonth() - 1))
      );
    case '3M':
      return transactions.filter(
        (trx) => new Date(trx.date) > new Date(new Date().setMonth(new Date().getMonth() - 3))
      );
    case '6M':
      return transactions.filter(
        (trx) => new Date(trx.date) > new Date(new Date().setMonth(new Date().getMonth() - 6))
      );
    default:
      return transactions;
  }
};

// Gets the historic balance when passed the list of filtered transactions coming from getTimeframe
// in addition with the balance returning from the API.
export const getHistoricBalance = (filteredTransactions: ITransaction[], balance: number) => {
  // Creates the historicBalance array with the current data coming first.
  const historicBalance = [{ timestamp: formatDate(new Date()), historicBalance: balance }];

  // Sorts the transactions by date
  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) < new Date(b.date)) return 1;
    return 0;
  });

  // Applies a reduce function on sortedTransactions that maps the transactions from separate
  // entries to conjoined entries keyed by date, with an array value of all the transactions for the date.
  const dailyTransactions = sortedTransactions.reduce((entry, a) => {
    const date = new Date(a.date).toISOString().split('T')[0];
    entry[date] = entry[date] || [];
    entry[date].push(a);
    return entry;
  }, {});

  // Gets the arrays inside every key on dailyTransactions and returns their values so they're able
  // to be used inside the following map.
  const values = Object.values(dailyTransactions);

  // Maps over the values obtained before.
  values.map((item: any, index) => {
    // Applies a reduce on each key that will result on the whole day's spending.
    const dailySpending = item.reduce((partialSum: number, a: TBalance) => partialSum + a.amount, 0);

    // Pushes values in the form of {timestamp: x, historicBalance: y} to historicBalance to be
    // returned from the function and used on the chart.
    historicBalance.push({
      timestamp: formatDate(item[0].date),
      historicBalance: historicBalance[index].historicBalance - dailySpending,
    });
  });

  return historicBalance.reverse();
};
