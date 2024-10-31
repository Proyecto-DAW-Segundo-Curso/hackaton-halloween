// src/Character.js
import React from 'react';

function Personaje({ personaje, moveDistance }) {
    const personajeStyle = {
        transform: `translateX(${personaje.position === "izquierda" ? moveDistance : 0}px)`,
        transition: 'transform 0.3s',
        width: '50px',
    };

    return (
        <img
            src={personaje.image}
            alt={personaje.name}
            style={personajeStyle}
            className="personaje"
        />
    );
}

export default Personaje;
