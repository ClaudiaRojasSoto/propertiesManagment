import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/signupActions';
import { useNavigate } from 'react-router-dom';

const FormSignup = ({ setShowSignup }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    congregation: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user))
      .then(() => {
        navigate('/dashboard');
        setShowSignup(false);
      })
      .catch(error => {
        console.error("Error during signup:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <input
          type="password"
          name="password_confirmation"
          value={user.password_confirmation}
          onChange={handleChange}
          placeholder="Confirmar contraseña"
          required
        />
        <input
          type="text"
          name="congregation"
          value={user.congregation}
          onChange={handleChange}
          placeholder="Congregación"
        />
        <button type="submit">Registrarse</button>
        <button type="button" onClick={() => setShowSignup(false)}>Cerrar</button>
      </form>
    </div>
  );
};

FormSignup.propTypes = {
  setShowSignup: PropTypes.func.isRequired,
};

export default FormSignup;
