import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
