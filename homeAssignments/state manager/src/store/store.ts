import type { RootState } from '../types';
import { createStore } from '../utils/create-store';
import { rootReducer } from './reducer';

const initialState: RootState = {
    count: 0,
    users: [],
};

const store = createStore(rootReducer, initialState);

export default store;
