import { createStore } from '../utils/create-store';
import { reducer } from './reducer';

const store = createStore(reducer, 0);

export default store;
