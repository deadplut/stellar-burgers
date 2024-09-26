import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import store from './services/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      {/* Оборачиваем приложение в Provider с передачей Store */}
      <App />
    </Provider>
  </React.StrictMode>
);
