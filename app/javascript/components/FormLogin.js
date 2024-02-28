import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate, Link } from 'react-router-dom';

const FormLogin = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        if (isAuthenticated) {
          navigate('/dashboard');
          setShowLogin(false);
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
        setError('Credenciales inválidas. Intenta nuevamente.');
      });
  };

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  return (
    <div>
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
        <button type="submit">Iniciar sesión</button>
        {error && (
          <div>
            <p>Error: {error}</p>
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>
        )}
        <button type="button" onClick={() => setShowLogin(false)}>Cerrar</button>
      </form>
    </div>
  );
};

FormLogin.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default FormLogin;
