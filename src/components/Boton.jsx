//import React from 'react'
import '../styles/Boton.css';

function Boton(props) {

	const esInicio = (valor) => {
		return valor !== 'INICIO';
	}

	return (
		<div className="cajaBoton"></div>


	);
}

export default Boton;