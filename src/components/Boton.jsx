//import React from 'react'
import '../styles/Boton.css';

function Boton(props) {
	const esInicio = (valor) => {
		return valor !== true;
	}

	return (
		<div 
			className='cajaBoton'
			onClick={(valor) => {}}
		>
			{props.children}
		</div>


	);
}

export default Boton;