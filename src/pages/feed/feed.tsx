import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { fetchIngredients } from '../../utils/slices/ingredientsSlice';
import { fetchOrders } from '../../utils/slices/ordersSlice';
import styles from '../constructor-page/constructor-page.module.css';
import { BurgerConstructor, BurgerIngredients } from '@components';

export const Feed: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders: TOrder[] = useSelector((state) => state.feedOrders.orders);
  const isIngredientsLoading = useSelector((state) => state.feedOrders.loading);

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <FeedUI orders={orders} handleGetFeeds={() => {}} />
      )}
    </>
  );
};
