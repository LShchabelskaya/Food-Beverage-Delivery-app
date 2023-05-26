import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsProvider from './components/CardsProvider/CardsProvider';
import i18n from './i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsProvider>
      <App/>
    </CardsProvider>
  </React.StrictMode>
);