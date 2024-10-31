// src/Character.js
import React from 'react';

function Personajes({ personajes, moveDistance }) {
    const personajeStyle = {
        transform: `translateX(${personajes.position === "izquierda" ? moveDistance : 0}px)`,
        transition: 'transform 0.3s',
        width: '50px',
    };

    return (
        <img
            src={personajes.image}
            alt={personajes.name}
            style={personajeStyle}
            className="personaje"
        />
    );
}

export default Personajes;
