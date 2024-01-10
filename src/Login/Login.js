import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="contenedor">
      <h2>Bienvenido!</h2>
      <div className='contenido'>
        <label>Username</label>
        <input type="text" name='username' placeholder='Ej: yeison@gmail.com'></input>
        <label>Password</label>
        <input type="password" name="password"></input>
      <div className='enlaces'>
      <Link to='/dashboard' className='ingresar'>Ingresar</Link>
      <Link to="/" className='regresar'>Regresar</Link>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Login;