import { createStore } from '../../utils/create-store';
import type { ACTION_TYPE } from '../../types';

function reducer(state: number, action: ACTION_TYPE) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
}

export const store = createStore(reducer, 0);

export function increment() {
    store.dispatch({ type: 'INCREMENT' });
}

export function decrement() {
    store.dispatch({ type: 'DECREMENT' });
}
