import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root !== null) {
    createRoot(root).render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});
