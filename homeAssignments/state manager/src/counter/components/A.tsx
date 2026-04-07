import { useEffect, useRef, useState } from 'react';
import store from '../../store/store';
import { decrement, increment } from '../../store/actions';

const A = () => {
    const [count, setCount] = useState<number>(store.getState());
    const [isSubscribed, setIsSubscribed] = useState<boolean>(true);
    
    const unsubscribeRef = useRef<null | (() => void)>(null);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState());
        });

        unsubscribeRef.current = unsubscribe;

        return () => {
            unsubscribe();
        };
    }, []);

    const handleUnsubscribe = () => {
        if (unsubscribeRef.current) {
            unsubscribeRef.current();
            unsubscribeRef.current = null;
            setIsSubscribed(false);
        }
    };

    return (
        <div>
            <h2 className='component-a'>Component A</h2>
            <p className='count'>Count: {count}</p>

            <button className='increment' onClick={increment}>Increment</button>
            <button className='decrement' onClick={decrement}>Decrement</button>

            <button
                className='unsubscribe'
                onClick={handleUnsubscribe}
                disabled={!isSubscribed}
            >
                Unsubscribe
            </button>
        </div>
    );
};

export default A;
