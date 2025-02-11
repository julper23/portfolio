import "./carta.css"

import React from 'react';

import ReactCardFlip from "react-card-flip";

export default function Carta({icono,comparando,adivinada,seleccionarCarta}) {
    
    return(
        <div className={`parejas_carta ${!adivinada&&"parejas_cartaNoEstatica"}`} onClick={seleccionarCarta}>
            <ReactCardFlip isFlipped={comparando || adivinada}>
                <div className="parejas_C_portada" key="front"/>
                <div className="parejas_C_contenido" key="back">
                    <i className={`fa ${icono} fa-4x`}/>
                </div>
            </ReactCardFlip>
        </div>
    )
}