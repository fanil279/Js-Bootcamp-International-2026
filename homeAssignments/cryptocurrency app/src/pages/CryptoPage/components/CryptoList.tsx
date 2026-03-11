import { useState } from 'react';
import { useCryptoTableData } from '../hooks/useCryptoTableData';
import Preloader from '../../../components/Preloader/Preloader';
import Search from './Search';
import Table from '../../../shared/Table';
import { columns } from '../config/cryptoColumns';

const CryptoPage = () => {
    const [trackedCurr, setTrackedCurr] = useState(['DOGE']);
    const [searchValue, setSearchValue] = useState('');

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

    if (hasLoading) return <Preloader />;
    if (hasError) return <div className='error'>Error loading the currency</div>;

    return (
        <>
            <Search
                value={searchValue}
                handleChange={setSearchValue}
                handleSearch={handleSearch}
            />
            
            <div className='crypto-list'>
                <h1>Crypto Page</h1>

                <Table data={rows} columns={columns} className='crypto-table'/>
            </div>
        </>
    );
}

export default CryptoPage;
