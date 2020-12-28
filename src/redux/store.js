import { createStore } from 'redux';
import { reducer } from './reducer';
export let Store = createStore(reducer);