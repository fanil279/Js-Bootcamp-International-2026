import { useEffect, useMemo, useRef, useState } from 'react';
import { useCryptoPrices } from '../../../hooks/useCrypto';
import type { CryptoRow, Trend, CryptoState } from '../../../types';

export const useCryptoTableData = (trackedCurr: string[]) => {
    const [trend, setTrend] = useState<CryptoState>({});

    const prevPricesRef = useRef<Record<string, number>>({});
    const lastUpdatedAtRef = useRef<Record<string, number>>({});

    const queryResults = useCryptoPrices(trackedCurr);

    useEffect(() => {
        const updates: CryptoState = {};

        trackedCurr.forEach((currency, i) => {
            const query = queryResults[i];

            if (!query?.isSuccess) return;

            const price = query.data.USD;
            const updatedAt = query.dataUpdatedAt;

            const prevPrice = prevPricesRef.current[currency];
            const lastUpdatedAt = lastUpdatedAtRef.current[currency];

            if (lastUpdatedAt !== updatedAt) {
                let nextTrend: Trend = 'plateau';

                if (prevPrice !== undefined) {
                    if (price > prevPrice) nextTrend = 'up';
                    else if (price < prevPrice) nextTrend = 'down';
                }

                updates[currency] = nextTrend;
                prevPricesRef.current[currency] = price;
                lastUpdatedAtRef.current[currency] = updatedAt;
            }
        });

        if (Object.keys(updates).length > 0) {
            setTrend((prev) => ({
                ...prev,
                ...updates,
            }));
        }
    }, [trackedCurr, queryResults]);

    const rows = useMemo<CryptoRow[]>(() => {
        return trackedCurr.map((currency, i) => {
            const query = queryResults[i];

            if (!query || query.isPending) {
                return {
                    currency,
                    price: null,
                    trend: 'plateau',
                    status: 'loading',
                };
            }

            if (query.isError) {
                return {
                    currency,
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
                currency,
                price: query.data?.USD ?? null,
                trend: trend[currency] ?? 'plateau',
                status: 'success',
                errorMessage: undefined,
            };
        });
    }, [trackedCurr, queryResults, trend]);

    const hasLoading = queryResults.some((query) => query.isPending);
    const hasError = queryResults.some((query) => query.isError);

    return {
        rows,
        hasLoading,
        hasError,
    };
};
