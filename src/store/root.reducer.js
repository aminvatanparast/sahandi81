import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import commonSlice from './common/common.reducer';

const appReducer = combineReducers({
  user: userReducer.reducer,
  common: commonSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
