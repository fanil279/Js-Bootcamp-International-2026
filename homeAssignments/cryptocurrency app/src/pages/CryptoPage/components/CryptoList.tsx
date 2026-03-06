import { useState } from 'react';
import CryptoTable from './CryptoTable';
import Search from './Search';

const CryptoPage = () => {
    const [trackedCurr, setTrackedCurr] = useState<string[]>(['DOGE']);
    const [searchValue, setSearchValue] = useState('');

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

    return (
        <>
            <Search
                value={searchValue}
                handleChange={setSearchValue}
                handleSearch={handleSearch}
            />
            
            <div className='crypto-list'>
                <h1>Crypto Page</h1>

                {trackedCurr.map((curr) => (
                    <CryptoTable key={curr} symbol={curr} />
                ))}
            </div>
        </>
    );
}

export default CryptoPage;
