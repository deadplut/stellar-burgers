import { FC, memo, useEffect } from 'react';

import { OrdersListUI } from '@ui';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrders } from '../../utils/slices/ordersSlice';
import { RootState, AppDispatch } from '../../services/store';

export const OrdersList: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  const orderByDate = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <OrdersListUI orderByDate={orderByDate} />;
});
