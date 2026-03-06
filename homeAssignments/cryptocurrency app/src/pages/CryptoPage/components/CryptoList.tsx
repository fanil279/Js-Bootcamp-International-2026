import { useCryptoPrice } from '../../../hooks/useCrypto';
import Preloader from '../../../components/Preloader';

const CryptoPage = () => {
    const { isPending, isError, data, error } = useCryptoPrice('DOGE');

    if (isPending) return <Preloader />;
    if (isError) return <div className='error'>Error occurred: {error.message}</div>;

    return (
        <div className='crypto-list'>
            <h1>Crypto Page</h1>

            <div className='crypto-item'>
                <h2 className='crypto-currency'>DOGE</h2>
                <p className='crypto-price'>Price: ${data?.USD}</p>
            </div>
        </div>
    );
}

export default CryptoPage;
