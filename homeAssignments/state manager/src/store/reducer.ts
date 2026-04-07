import type { ACTION_TYPE } from '../types';

export function reducer(state: number, action: ACTION_TYPE) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
}
