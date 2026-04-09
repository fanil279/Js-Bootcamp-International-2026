import type { ACTION_TYPE, RootState } from '../types';

export function rootReducer(state: RootState, action: ACTION_TYPE): RootState {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };

        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };

        default:
            return state;
    }
}
