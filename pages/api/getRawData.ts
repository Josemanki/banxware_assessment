import type { NextApiRequest, NextApiResponse } from 'next';
import { getTimeframe } from '../../utils/utils';
import { TBalance } from '../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const BALANCES_ENDPOINT = 'https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/balances';
  const TRANSACTION_ENDPOINT = 'https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions';
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const headers = {
    headers: { Authorization: API_KEY },
  };

  const balanceResponse = await fetch(BALANCES_ENDPOINT, headers as RequestInit);
  const transactionResponse = await fetch(TRANSACTION_ENDPOINT, headers as RequestInit);
  const balance = await balanceResponse.json();
  const { transactions } = await transactionResponse.json();

  res.status(200).json({ balance, transactions });
}
