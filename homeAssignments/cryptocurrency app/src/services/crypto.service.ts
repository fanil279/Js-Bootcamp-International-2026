import api from '../api/axios';

class CryptoService {
    static async getCryptoCurrency(
        symbol: string
    ): Promise<Record<string, number>> {
        const response = await api.get('/data/price', {
            params: {
                fsym: symbol,
                tsyms: 'USD',
                api_key: import.meta.env.VITE_API_KEY,
            },
        });

        const data = response.data;

        if (data.Response === 'Error') {
            throw new Error(`Currency '${symbol}' was not found`);
        }
        
        return data;
    };
}

export default CryptoService;
