import { useQuery } from '@tanstack/react-query';
import CryptoService from '../services/crypto.service';

export const useCryptoPrice = (symbol: string) => {
    return useQuery({
        queryKey: ['crypto-price', symbol],
        queryFn: () => CryptoService.getCryptoCurrency(symbol),
        enabled: Boolean(symbol),
    });
};
