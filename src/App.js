import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Venta de Bicicletas</h1>
      </header>
      <main className="App-main">
        <div className="info-card">
          <img src="https://www.sport.es/bicio/wp-content/uploads/2023/02/MTB-guia-de-compra.jpg" alt="Bicicleta Origen" />
          <h2>Origen de Nuestras Bicicletas</h2>
          <p>
            Nuestras bicicletas son cuidadosamente seleccionadas de los mejores fabricantes en todo el mundo,
            garantizando calidad y durabilidad. Cada una cuenta con una historia única y un diseño excepcional.
          </p>
        </div>
        <div className="info-card">
          <img src="https://www.sport.es/bicio/wp-content/uploads/2022/02/bikepacking.jpg" alt="Bicicleta Exploración" />
          <h2>Explora el Mundo en Bicicleta</h2>
          <p>
            Las bicicletas no solo son un medio de transporte, sino también una forma de explorar la naturaleza,
            las ciudades y nuevas culturas. Únete a la aventura y descubre lugares increíbles sobre dos ruedas.
          </p>
        </div>
        <div className="info-card">
          <img src="https://i.ytimg.com/vi/K_dN8C4RBlw/hqdefault.jpg" alt="Bicicleta Tecnología" />
          <h2>Tecnología Avanzada</h2>
          <p>
            Cada bicicleta está equipada con la última tecnología en la industria. Desde sistemas de cambio de marchas
            suaves hasta frenos de alta precisión, nuestras bicicletas están diseñadas para proporcionar un rendimiento
            excepcional en cada viaje.
          </p>
        </div>
        <div className="info-card">
          <img src="https://tuvalum.com/blog/wp-content/uploads/2017/01/cuadro-S-works.jpg" alt="Bicicleta Materiales" />
          <h2>Materiales de Calidad</h2>
          <p>
            Utilizamos los mejores materiales para la construcción de nuestras bicicletas. Desde cuadros ligeros de
            aleación hasta componentes resistentes a la intemperie, cada detalle se elige cuidadosamente para
            garantizar la durabilidad y la comodidad.
          </p>
        </div>
        <Link to="/login" className='boton'>
          Ingresar :D
        </Link>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Venta de Bicicletas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;