import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const LoginButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <button type="submit" className="login-button">Iniciar sesión</button>
    </form>
  );
};

export default LoginButton;
