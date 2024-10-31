

import './App.css';
import Quizz from './components/Quizz';

function App() {
  return (
    <div className="App">

    <div className='contenedor-principal'>
      <div className='contenedor-pregunta'>
        <Quizz>a</Quizz>

      </div>
      <div className='contenedor-respuesta'>

      </div>
      <div className='contenedor-juego'>
        <div className='contenedor-botones'>

        </div>
        <div className='contenedor-animacion'>

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
