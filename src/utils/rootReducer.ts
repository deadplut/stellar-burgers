import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import ingredientsReducer from './slices/ingredientsSlice'

const rootReducer = combineReducers({
  orders: ordersReducer,
  ingredients: ingredientsReducer
});

export default rootReducer;
