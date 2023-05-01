import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsProvider from './components/CardsProvider/CardsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsProvider>
      <App />
    </CardsProvider>
  </React.StrictMode>
);