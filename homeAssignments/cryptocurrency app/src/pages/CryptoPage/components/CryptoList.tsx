import { useState, useEffect, useMemo, useRef } from 'react';
import { useCryptoPrices } from '../../../hooks/useCrypto';
import CryptoTable from './CryptoTable';
import Preloader from '../../../components/Preloader';
import Search from './Search';
import type { CryptoRow } from '../../../types';

const CryptoPage = () => {
    const [trackedCurr, setTrackedCurr] = useState(['DOGE']);
    const [searchValue, setSearchValue] = useState('');

    const prevPricesRef = useRef<Record<string, number>>({});
    const lastUpdatedAtRef = useRef<Record<string, number>>({});
    const trendRef = useRef<Record<string, 'up' | 'down' | 'plateau'>>({});

    const queryResults = useCryptoPrices(trackedCurr);

    useEffect(() => {
        trackedCurr.forEach((symbol, i) => {
            const query = queryResults[i];

            if (!query?.isSuccess) return;

            const price = query.data.USD;
            const updatedAt = query.dataUpdatedAt;
            const prevPrice = prevPricesRef.current[symbol];
            const lastUpdatedAt = lastUpdatedAtRef.current[symbol];

            if (lastUpdatedAt !== updatedAt) {
                let trend: 'up' | 'down' | 'plateau' = 'plateau';

                if (prevPrice) {
                    if (price > prevPrice) trend = 'up';
                    else if (price < prevPrice) trend = 'down';
                }

                trendRef.current[symbol] = trend;
                prevPricesRef.current[symbol] = price;
                lastUpdatedAtRef.current[symbol] = updatedAt;
            }
        });
    }, [trackedCurr, queryResults]);

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

    const rows = useMemo<CryptoRow[]>(() => {
        return trackedCurr.map((symbol, i) => {
            const query = queryResults[i];
            
            if (!query || query.isPending) {
                return {
                    symbol,
                    price: null,
                    status: 'loading',
                    trend: 'plateau'
                };
            }

            if (query.isError) {
                return {
                    symbol,
                    price: null,
                    trend: 'plateau',
                    status: 'error',
                    errorMessage:
                        query.error instanceof Error
                            ? query.error.message
                            : 'Unknown error',
                };
            }

            return {
                symbol,
                price: query.data?.USD ?? null,
                trend: trendRef.current[symbol] ?? 'plateau',
                status: 'success',
                errorMessage: undefined,
            };
        });
    }, [trackedCurr, queryResults]);

    const hasLoading = queryResults.some((query) => query.isPending);
    const hasError = queryResults.some((query) => query.isError);

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

                <CryptoTable rows={rows} />
            </div>
        </>
    );
}

export default CryptoPage;
