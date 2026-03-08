import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { CryptoTableProps, CryptoRow } from '../../../types';

const columnHelper = createColumnHelper<CryptoRow>();

const columns = [
    columnHelper.accessor('symbol', {
        header: 'Currency',
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor('price', {
        header: 'Price (usd)',
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor('trend', {
        header: 'Trend',
        cell: (info) =>{
            const trend = info.getValue();

            if (trend === 'up') return <TrendingUp size={16} className='trend-up' />;
            else if (trend === 'down') return <TrendingDown size={16} className='trend-down' />;
            else return <Minus size={16} className='trend-plateau' />;
        }
    })
];

const CryptoTable = ({ rows }: CryptoTableProps) => {
    const table = useReactTable({
        data: rows,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className='crypto-table'>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
