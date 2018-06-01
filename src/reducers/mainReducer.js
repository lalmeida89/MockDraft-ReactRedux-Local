import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import teamReducer from './teamReducer';

const rootReducer = combineReducers({
  playersReducer,
  teamReducer
});

export default rootReducer
