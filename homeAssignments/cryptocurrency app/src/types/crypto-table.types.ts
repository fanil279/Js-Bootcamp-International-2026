import type { Trend } from './crypto-list.types';

export type CryptoRow = {
    symbol: string;
    price: number | null;
    status: 'loading' | 'error' | 'success';
    trend: Trend;
    errorMessage?: string;
};

export type CryptoTableProps = {
    rows: CryptoRow[];
};
