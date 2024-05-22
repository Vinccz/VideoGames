import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // Crea un archivo CSS para estilos

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Bienvenido a la Aplicación de Videojuegos</h1>
      <Link to="/home">
        <button>Ingresar a la Home Page</button>
      </Link>
    </div>
  );
};

export default LandingPage;
