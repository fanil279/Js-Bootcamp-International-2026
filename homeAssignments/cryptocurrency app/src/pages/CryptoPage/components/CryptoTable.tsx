import { useCryptoPrice } from '../../../hooks/useCrypto';
import Preloader from '../../../components/Preloader';
import type { CryptoCardProps } from '../../../types';

const CryptoCard = ({ symbol }: CryptoCardProps) => {
    const { isPending, isError, data, error } = useCryptoPrice(symbol);

    if (isPending) {
        return <div className='crypto-card'><Preloader /></div>;
    }

    if (isError) {
        return (
            <div className='error'>
                Error loading {symbol}: {error.message}
            </div>
        );
    }

    return (
        <div className='crypto-card'>
            <h2 className='crypto-currency'>{symbol}</h2>
            <p className='crypto-price'>Price: ${data?.USD}</p>
        </div>
    );
};

export default CryptoCard;