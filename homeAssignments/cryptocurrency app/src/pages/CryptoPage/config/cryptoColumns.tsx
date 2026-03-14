import { createColumnHelper } from '@tanstack/react-table';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Button from '../../../components/Button';
import type { CryptoRow, CryptoColumnHandlers } from '../../../types';

const columnDef = createColumnHelper<CryptoRow>();

export const getCryptoColumns = ({
    handleUpdate,
    handleDelete,
}: CryptoColumnHandlers) => [
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
        cell: (info) => {
            const trend = info.getValue();

            if (trend === 'up') {
                return <TrendingUp size={16} className='trend-up' />;
            }

            if (trend === 'down') {
                return <TrendingDown size={16} className='trend-down' />;
            }

            return <Minus size={16} className='trend-plateau' />;
        },
    }),

    columnDef.display({
        id: 'controls',
        header: () => <span className='controls-header'>Controls</span>,
        cell: ({ row }) => (
            <div className='controls-cell'>
                <Button
                    variant='secondary'
                    onClick={() => handleUpdate(row.original)}
                >
                    Update
                </Button>

                <Button
                    variant='danger'
                    onClick={() => handleDelete(row.original)}
                >
                    Delete
                </Button>
            </div>
        ),
    }),
];
