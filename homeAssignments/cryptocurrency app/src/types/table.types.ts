import type { ColumnDef } from '@tanstack/react-table';
import type { Trend, ButtonVariant } from './index';

export type CryptoRow = {
    currency: string;
    price: number | null;
    trend: Trend;
    updateAllBtn: ButtonVariant,
    updateBtn: ButtonVariant;
    deleteBtn: ButtonVariant;
    status: 'loading' | 'error' | 'success';
    errorMessage?: string;
};

export type TableProps<T> = {
    data: T[];
    columns: ColumnDef<T, any>[];
    className?: string;
};
