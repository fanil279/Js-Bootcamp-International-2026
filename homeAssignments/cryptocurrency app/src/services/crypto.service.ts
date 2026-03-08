import api from '../api/axios';

class CryptoService {
    static async getCryptoCurrency(
        currency: string
    ): Promise<Record<string, number>> {
        const response = await api.get('/data/price', {
            params: {
                fsym: currency,
                tsyms: 'USD',
                api_key: import.meta.env.VITE_API_KEY,
            },
        });

        const data = response.data;

        if (data.Response === 'Error') {
            throw new Error(`Currency '${currency}' was not found`);
        }
        
        return data;
    };
}

export default CryptoService;
