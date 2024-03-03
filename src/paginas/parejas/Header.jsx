import React from 'react';
import "./header.css"
import { MdOutlineCelebration } from 'react-icons/md';

export default function Header({reiniciarPartida,ganador,intentos}) {
    return(
        <div className="parejas_header" >
            <div className="parejas_h_reiniciarContainer">
                <button className='parejas_h_reiniciarButton' onClick={()=>{reiniciarPartida()}}>REINICIAR</button>
            </div>

            <div className={"parejas_h_ganadorContainer"}>
            </div>

            <div className='parejas_h_intentos'>Intentos: {intentos}</div>
        </div>
    )
}