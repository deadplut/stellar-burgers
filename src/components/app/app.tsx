import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo } from '@components';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouteProps,
  RouterProvider
} from 'react-router-dom';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <RouterProvider router={router} />
  </div>
);
const isAuthenticated = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<ConstructorPage />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route
        element={
          <PrivateRoute isAuthenticated={isAuthenticated} redirectTo='/login' />
        }
      >
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
        <Route
          path='/profile/orders/:number'
          element={
            <Modal onClose={() => window.history.back()} title='ass'>
              <OrderInfo />
            </Modal>
          }
        />
      </Route>
      <Route path='*' element={<NotFound404 />} />
    </>
  )
);

// @ts-ignore
interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  redirectTo: string;
}

function PrivateRoute({
  isAuthenticated,
  redirectTo,
  ...rest
}: PrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Route {...rest} />;
}

export default App;
