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
                {ganador&&<div className="parejas_h_ganadorSContainer">
                    <MdOutlineCelebration className="parejas_h_ganadorIcono parejas_h_ganadorIconoIzq"/>
                    <p className='parejas_h_ganadorText'>GANASTE</p>
                    <MdOutlineCelebration className="parejas_h_ganadorIcono"/>
                </div>}
            </div>

            <div className='parejas_h_intentos'>Intentos: {intentos}</div>
        </div>
    )
}