import { createColumnHelper } from '@tanstack/react-table';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { CryptoRow } from '../../../types';

const columnDef = createColumnHelper<CryptoRow>();

export const columns = [
    columnDef.accessor('currency', {
        header: 'Currency',
        cell: (info) => info.getValue(),
    }),

    columnDef.accessor('price', {
        header: 'Price (usd)',
        cell: (info) => info.getValue(),
    }),

    columnDef.accessor('trend', {
        header: 'Trend',
        cell: (info) =>{
            const trend = info.getValue();

            if (trend === 'up') return <TrendingUp size={16} className='trend-up' />;
            else if (trend === 'down') return <TrendingDown size={16} className='trend-down' />;
            else return <Minus size={16} className='trend-plateau' />;
        }
    })
];
