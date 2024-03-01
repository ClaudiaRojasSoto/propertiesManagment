import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordRequest } from '../redux/actions/forgotPasswordActions';

function ForgotPasswordComponent() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.forgotPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordRequest(email));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Send Reset Link</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>Check your email for a reset link.</p>}
    </div>
  );
}

export default ForgotPasswordComponent;
