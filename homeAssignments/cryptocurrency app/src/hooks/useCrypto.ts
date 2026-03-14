import { useQueries } from '@tanstack/react-query';
import CryptoService from '../services/crypto.service';

export const useCryptoPrices = (currencies: string[]) => {
    return useQueries({
        queries: currencies.map((currency) => ({
            queryKey: ['crypto-price', currency],
            queryFn: () => CryptoService.getCryptoCurrency(currency),
            enabled: Boolean(currency),
        })),
    });
};
