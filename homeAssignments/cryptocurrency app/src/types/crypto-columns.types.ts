import type { CryptoRow } from './index';

export type CryptoColumnHandlers = {
    handleUpdate: (row: CryptoRow) => void;
    handleDelete: (row: CryptoRow) => void;
};
