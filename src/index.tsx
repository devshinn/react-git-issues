import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);

reportWebVitals();
