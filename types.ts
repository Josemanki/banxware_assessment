export interface ITransaction {
  amount: number;
  currency: Currency;
  date: Date;
  status: Status;
}

export type TBalance = {
  amount: number;
  currency: string;
};

export type THistoricBalance = {
  timestamp: string;
  historicBalance: number;
};

export enum Currency {
  Eur = 'EUR',
}

export enum Status {
  Booked = 'BOOKED',
  Cancelled = 'CANCELLED',
  Processed = 'PROCESSED',
}

export type TDateRange = '1D' | '5D' | '1M' | '3M' | '6M';
