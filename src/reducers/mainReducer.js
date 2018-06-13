import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import teamReducer from './teamReducer';
import { reducer as formReducer } from 'redux-form';
import draftSettingReducer from './draftSettingReducer'

const rootReducer = combineReducers({
  playersReducer,
  teamReducer,
  form: formReducer,
  draftSettingReducer
});

export default rootReducer
