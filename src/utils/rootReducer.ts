import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import feedsReducer from './slices/feedsSlice';

const rootReducer = combineReducers({
  orders: ordersReducer,
  ingredients: ingredientsReducer,
  feedOrders: feedsReducer
});

export default rootReducer;
