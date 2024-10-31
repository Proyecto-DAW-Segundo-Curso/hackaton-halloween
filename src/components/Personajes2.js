import React from 'react'
import personajesData from '../data/personajes.json';
import '../styles/Personajes2.css';

function Personajes2(props) {
    const datos = personajesData
    console.log(datos)
    console.log(datos.personajes.image)
 return (
  <img
            src={datos.personajes.image}
            alt={datos.personajes.name}
            //style={personajeStyle}
            className="personaje"
    />
 )
}
export default Personajes2