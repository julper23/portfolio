import React from 'react';
import "./tablero.css"
import Carta from './carta';

export default function Tablero({baraja,parejaSeleccionada,seleccionarCarta}) {
    return(<div className='parejas_tableroContainer' >
        <div className="parejas_tablero">
            {
                baraja.map((carta,index)=>{
                    const estaSiendoComparada = (parejaSeleccionada.indexOf(carta)!=-1);
                    return<Carta key={index} icono={carta.icono} adivinada={carta.adivinada} comparando={estaSiendoComparada} seleccionarCarta={() => seleccionarCarta(carta)}/>
                })
            }
        </div>
    </div>)
}