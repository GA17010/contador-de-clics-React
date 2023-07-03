import './App.css';
import Boton from './componentes/boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  const menosClics = () => {
    setNumClics(numClics - 1);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        src = {freeCodeCampLogo}
        alt="Logo de freecodecamp"
        className="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <div className="botones-contenedor">
          <Boton 
            texto='+ Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic} />
          <Boton
            texto='- Clic'
            esBotonDeClic={true}
            manejarClic={menosClics} />
        </div>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
