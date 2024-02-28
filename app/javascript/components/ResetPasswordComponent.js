import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordRequest } from '../redux/actions/resetPasswordActions';

function ResetPasswordComponent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.resetPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordRequest(password, confirmPassword, token));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Reset Password</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>Your password has been reset successfully.</p>}
    </div>
  );
}

export default ResetPasswordComponent;
