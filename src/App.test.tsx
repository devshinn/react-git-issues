import App from './App';
import { store } from './store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(getByText(/learn/i)).toBeInTheDocument();
});
