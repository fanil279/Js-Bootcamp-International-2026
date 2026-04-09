import store from './store';
import type { User } from '../types';

export function increment() {
    store.dispatch({ type: 'INCREMENT' });
}

export function decrement() {
    store.dispatch({ type: 'DECREMENT' });
}

export function setUsers(users: User[]) {
    store.dispatch({ type: 'SET_USERS', payload: users });
}
