import { fetchFeeds } from '../../services/slices';
import { useDispatch, useSelector } from '../../services/store';
import { Preloader } from '../../components/ui';
import { FeedUI } from '../../components/ui/pages';
import { FC, useEffect } from 'react';

export const Feed: FC = () => {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(fetchFeeds());
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <FeedUI orders={data.orders} handleGetFeeds={handleGetFeeds} />
      )}
    </>
  );
};
