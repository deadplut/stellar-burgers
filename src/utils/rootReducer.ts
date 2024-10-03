import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import feedsReducer from './slices/feedsSlice';
import userReducer from './slices/userSlice';


const rootReducer = combineReducers({
  orders: ordersReducer,
  ingredients: ingredientsReducer,
  feedOrders: feedsReducer,
  user: userReducer
});

export default rootReducer;
