import React, { useState } from 'react';
import '../styles/Quizz.css'

const Adivinanza = () => {

    const adivinanzas = [
        "¿Puedo vivir en las historias o en un bosque en la penumbra. Algunos me ven brillar como una luz, pero si me sigues, encontrarás el peligro o la locura. ¿Quién soy?",
        "¿Con capa oscura me ves venir, aunque nada tengo que cubrir. Puedo anunciar el final del día, pero en verdad, estoy en todas partes sin que me vean. ¿Quién soy?",
        "¿Siempre estoy en el rincón más oscuro, esperando sin hacer ruido. Soy el guardián de secretos olvidados y la razón de muchos escalofríos. Solo existo cuando nadie me ve. ¿Qué soy?",
        "¿Aunque tengo forma de humano, no soy carne ni hueso. Si te miro en la noche, seguro que un grito pego. ¿Qué soy?",
        "¿Soy delgado y alargado, y en la noche alumbrado. Soy amigo del viento y enemigo del tiempo. ¿Qué soy?"
    ];

    const respuestas = [
        "fuego fatuo",
        "noche",
        "miedo",
        "espantapájaros",
        "vela"
    ];

    //con el useState manejamos los cambios en: adivinanza, respuesta, mensaje y respuesta correcta para que entre la siguiente.
    const [retoSeleccionado, setRetoSeleccionado] = useState('');
    const [respuestaUsuario, setRespuestaUsuario] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [adivinanzasPendientes, SetAdivinanzasPendientes]= useState(adivinanzas);
    const [juegoTerminado, setJuegoTerminado] = useState(false);

    //saca un adivinzanza aleatoria, reinicia el estado de respuesta correcta y limpia mensaje escrito por usuario
    const randomRiddle = () => {

        if(adivinanzasPendientes.length==0){
                setMensaje("¡Enhorabuena, has conseguido escapar de(l) JSON");
                setJuegoTerminado(true);
                return;
        }

        const Aleatorio = Math.floor(Math.random() * adivinanzasPendientes.length);
        setRetoSeleccionado(adivinanzasPendientes[Aleatorio]);
        setRespuestaCorrecta(false); // Reiniciar estado de respuesta correcta
        setMensaje(''); // Limpiar mensaje
    };

    //verificamos respuesta a partir del index de la adivinanza y sacamos mensaje de respuesta correcta o incorrecta
    const verificarRespuesta = (event) => {
        event.preventDefault();
        if(juegoTerminado){
            return;
        }
        const indice = adivinanzas.indexOf(retoSeleccionado);
        const respuestaCorrectaTexto = respuestas[indice];

        if (respuestaUsuario.toLowerCase().trim() === respuestaCorrectaTexto.toLowerCase()) {
            setMensaje("¡Respuesta correcta!");
            setRespuestaCorrecta(true); // Marca que la respuesta fue correcta
            SetAdivinanzasPendientes(adivinanzasPendientes.filter((adivinanza)=>adivinanza !== retoSeleccionado));
        } else {
            setMensaje("Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrectaTexto);
        }

        setRespuestaUsuario('');
    };

    // Generar adivinanza al inicio de la app
    React.useEffect(() => {
        if(!juegoTerminado) randomRiddle();
    }, [adivinanzasPendientes,juegoTerminado]);

    return (
        <div className='contenedorPreguntas'>
            <h1>Adivinanza de Halloween</h1>
            <p>{retoSeleccionado}</p>
            <form onSubmit={verificarRespuesta}>
                <input
                    className='enviar'
                    type="text"
                    value={respuestaUsuario}
                    onChange={(e) => setRespuestaUsuario(e.target.value)}
                    placeholder="Introduce tu respuesta"
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}

            {/* Mostrar botón "Siguiente Adivinanza" solo si la respuesta es correcta */}
            {respuestaCorrecta && (
                <button className='enviar' onClick={randomRiddle}>Siguiente Adivinanza</button>
            )}
        </div>
    );
};

export default Adivinanza;
