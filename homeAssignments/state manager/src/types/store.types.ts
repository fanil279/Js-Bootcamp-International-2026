import type { User } from '../types';

export type RootState = {
    count: number;
    users: User[];
};

export type ACTION_TYPE =
    | { type: 'INCREMENT' | 'DECREMENT' }
    | { type: 'SET_USERS'; payload: User[] }
    | { type: 'ADD_USER'; payload: User }
    | { type: 'DELETE_USER'; payload: string }
    | { type: 'OPEN_USER_DIALOG'; payload: User }
    | { type: 'CLOSE_USER_DIALOG' }
    | { type: 'UPDATE_USER_ADDRESS'; payload: { email: string; address: string } };
