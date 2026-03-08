export type CryptoRow = {
    symbol: string;
    price: number | null;
    status: 'loading' | 'error' | 'success';
    trend: 'up' | 'down' | 'plateau';
    errorMessage?: string;
};

export type CryptoTableProps = {
    rows: CryptoRow[];
};
