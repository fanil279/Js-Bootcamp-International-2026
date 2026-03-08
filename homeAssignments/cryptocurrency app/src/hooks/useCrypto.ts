import { useQueries } from '@tanstack/react-query';
import CryptoService from '../services/crypto.service';

export const useCryptoPrices = (symbols: string[]) => {
    return useQueries({
        queries: symbols.map((symbol) => ({
            queryKey: ['crypto-price', symbol],
            queryFn: () => CryptoService.getCryptoCurrency(symbol),
            enabled: Boolean(symbol),
        })),
    });
};
