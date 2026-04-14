import { useEffect, useRef, useState } from 'react';
import store from '../../../store/store';
import { decrement, increment } from '../../../store/actions';
import type { CounterPanelProps } from '../../../types';

function CounterPanel({ title, titleClassName }: CounterPanelProps) {
    const [count, setCount] = useState<number>(store.getState().count);
    const [isSubscribed, setIsSubscribed] = useState<boolean>(true);

    const unsubscribeRef = useRef<null | (() => void)>(null);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState().count);
        });

        unsubscribeRef.current = unsubscribe;

        return () => {
            if (unsubscribeRef.current) {
                unsubscribeRef.current();
                unsubscribeRef.current = null;
            }
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
            <h2 className={titleClassName}>{title}</h2>
            <p className='count'>Count: {count}</p>

            <button
                className='increment'
                onClick={() => isSubscribed && increment()}
                disabled={!isSubscribed}
            >
                Increment
            </button>

            <button
                className='decrement'
                onClick={() => isSubscribed && decrement()}
                disabled={!isSubscribed}
            >
                Decrement
            </button>

            <button
                className='unsubscribe'
                onClick={handleUnsubscribe}
                disabled={!isSubscribed}
            >
                Unsubscribe
            </button>
        </div>
    );
}

export default CounterPanel;
