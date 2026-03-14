import { useState, useMemo, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useCryptoTableData } from './hooks/useCryptoTableData';
import Preloader from '../../components/Preloader/Preloader';
import Button from '../../components/Button';
import Search from './components/Search';
import Table from '../../shared/Table';
import { getCryptoColumns } from './config/cryptoColumns';
import type { CryptoRow } from '../../types';

const CryptoPage = () => {
    const [trackedCurr, setTrackedCurr] = useState(['DOGE']);
    const [searchValue, setSearchValue] = useState('');

    const queryClient = useQueryClient();

    const { rows, hasLoading, hasError } = useCryptoTableData(trackedCurr);

    const handleSearch = () => {
        const normalized = searchValue.trim().toUpperCase();

        if (!normalized) return;

        setTrackedCurr((prev) => 
            prev.includes(normalized)
                ? prev
                : [...prev, normalized]
        );

        setSearchValue('');
    };

    const handleUpdateAll = useCallback(() => {
        queryClient.refetchQueries({
            queryKey: ['crypto-price'],
        });
    }, [queryClient]);

    const handleUpdate = useCallback((row: CryptoRow) => {
        queryClient.refetchQueries({
            queryKey: ['crypto-price', row.currency],
            exact: true,
        });
    }, [queryClient]);

    const handleDelete = useCallback((row: CryptoRow) => {
        setTrackedCurr((prev) =>
            prev.filter((currency) => currency !== row.currency)
        );
    }, [queryClient]);

    const columns = useMemo(
        () =>
            getCryptoColumns({
                handleUpdate,
                handleDelete,
            }),
        [handleUpdate, handleDelete]
    );

    if (hasLoading) return <Preloader />;
    if (hasError) return <div className='error'>Error loading the currency</div>;

    return (
        <main>
            <Search
                value={searchValue}
                handleChange={setSearchValue}
                handleSearch={handleSearch}
            />
            
            <div className='crypto-container'>
                <h1>Crypto Page</h1>

                <Button
                    variant='primary'
                    className='update-all'
                    onClick={handleUpdateAll}
                >
                    Update All
                </Button>

                <Table data={rows} columns={columns} className='crypto-table'/>
            </div>
        </main>
    );
}

export default CryptoPage;
