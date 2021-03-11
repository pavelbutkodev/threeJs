import { combineReducers } from 'redux';

import core from './core/reducer';


const reducers = combineReducers({
  core,
});

export default reducers;
