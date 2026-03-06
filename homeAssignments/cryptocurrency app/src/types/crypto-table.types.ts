export type CryptoRow = {
    symbol: string;
    price: number | null;
    status: 'loading' | 'error' | 'success';
    errorMessage?: string;
};
