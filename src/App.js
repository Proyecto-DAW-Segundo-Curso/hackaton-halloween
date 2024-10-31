import './App.css';
import Quizz from './components/Quizz';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <div className='contenedor-pregunta'>
          <Quizz>a</Quizz>
        </div>

        <div className='contenedor-juego'>
          <div className='contenedor-botones'>
            <Boton>INICIO</Boton>
            <Boton>REINICIO</Boton>
          </div>
          <div className='contenedor-animacion'>
            {/* Aquí puedes agregar la animación u otros elementos del juego */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
