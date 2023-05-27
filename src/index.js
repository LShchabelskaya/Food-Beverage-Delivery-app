import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsProvider from './components/CardsProvider/CardsProvider';
import i18n from './i18n/i18n';
import { Provider } from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CardsProvider>
        <App />
      </CardsProvider>
    </Provider>
  </React.StrictMode>
);