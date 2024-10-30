//import React from 'react'
import '../styles/Boton.css';

function Boton(props) {

	const esInicio = (valor) => {
		return valor !== 0;
	}

	return (
		<div 
			className='cajaBoton'
			onClick={() => {}}
		>
			{props.children}
		</div>


	);
}

export default Boton;