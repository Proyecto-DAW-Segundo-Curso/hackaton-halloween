import './App.css';
import Boton from './components/Boton';

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

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
