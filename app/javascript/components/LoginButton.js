import React, { useState } from 'react';
import axios from 'axios';

const LoginButton = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        email: email,
        password: password
      });

      console.log(response.data);

      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);

    }
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
