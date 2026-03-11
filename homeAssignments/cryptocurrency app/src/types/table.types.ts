import type { ColumnDef } from '@tanstack/react-table';
import type { Trend } from './crypto-list.types';

export type CryptoRow = {
    currency: string;
    price: number | null;
    status: 'loading' | 'error' | 'success';
    trend: Trend;
    errorMessage?: string;
};

export type TableProps<T> = {
    data: T[];
    columns: ColumnDef<T, any>[];
    className?: string;
};
