//import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import Personajes from "./components/Personajes";
import personajes from './data/personajes.json';

function App() {
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <div className='contenedor-pregunta'>

        </div>
        <div className='contenedor-respuesta'>

        </div>
        <div className='contenedor-juego'>
          <div className='contenedor-botones'>
            <Boton>INICIO</Boton>
            <Boton>REINICIO</Boton>
          </div>
          <div className='contenedor-animacion'>
            
            {personajes.personajes.map((personaje) => (
              <Personajes
                key={personaje.id}
                name={personaje.name}
                image={personaje.image}
                position={personaje.position}
                animation={personaje.animation}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
