import React, { useState } from 'react';
import axios from 'axios';

const LoginButton = () => {
  // Estados para almacenar el correo electrónico y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    try {
      // Realiza la solicitud a la API de Rails
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        email: email,
        password: password
      });

      // Manejar la respuesta aquí, por ejemplo, almacenando el token recibido
      console.log(response.data);
      // Ejemplo de cómo podrías almacenar el token en localStorage
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      // Aquí puedes manejar errores de la solicitud, como mostrar un mensaje al usuario
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
