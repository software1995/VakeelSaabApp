import { combineReducers } from '@reduxjs/toolkit';
import userBundleSlice from '../slices/userBundleSlice';


const rootReducer = combineReducers({
  userBundleSlice,

});

export default rootReducer;
