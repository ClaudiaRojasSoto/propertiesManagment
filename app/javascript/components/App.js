import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { greetUser } from '../redux/actions/greetingsActions';

function App() {
  useEffect(() => {
    store.dispatch(greetUser('John'));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;