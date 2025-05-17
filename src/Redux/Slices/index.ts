import {combineReducers} from 'redux';
import { authReducer } from './authslice';
import { moreReducer } from './moreslice';
import { trainingReducer } from './trainingslice';
import { promotionReducer } from './promotionSlice';
const appReducer = combineReducers({
  authReducer,
  moreReducer,
  trainingReducer,
  promotionReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

