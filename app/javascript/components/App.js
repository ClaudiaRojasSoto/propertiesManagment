import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import ResetPasswordComponent from './ResetPasswordComponent';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
          <Route path="/reset-password" element={<ResetPasswordComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
