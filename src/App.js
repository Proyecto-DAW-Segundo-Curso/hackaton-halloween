//import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import Personajes from "./components/Personajes";
import personajesData from './data/personajes.json';
import Personajes2 from './components/Personajes2';

function App() {
  const moveDistance = 50; 
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
            
          {/*{personajesData.personajes.map((personaje) => ( 
              <Personajes
                key={personaje.id}
                personaje={personaje}  // Pasa el objeto personaje
                moveDistance={moveDistance} // Pasa la distancia de movimiento
              />
            ))}*/}

            <Personajes2>

            </Personajes2>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
