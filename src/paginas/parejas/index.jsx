import './styles.css';
import { useEffect,useState } from "react";
import Header from './Header';
import Tablero from './tablero';

import Main from '../../componentes/main';

import useBaraja from './hooks/useBajara';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MdOutlineCelebration } from 'react-icons/md';
function Parejas() {
  const {cartas,pareja,intentos,ganador,reiniciarBaraja,seleccionarCarta} = useBaraja()
  
  return (<Main principal={false}>
    <Header reiniciarPartida={()=>{reiniciarBaraja()}} ganador={ganador} intentos={intentos}/>
    <Tablero baraja={cartas} parejaSeleccionada={pareja} seleccionarCarta={(carta)=>seleccionarCarta(carta)}/>
    <Modal open={ganador} showCloseIcon={false} center>
      <div className='modalContent'>
        <MdOutlineCelebration className="ganadorIzquierda"/>
        <p className=''>GANASTE</p>
        <MdOutlineCelebration className=""/>
      </div>
      <div className='botonReniciarContent'>
        <button className='parejas_h_reiniciarButton' onClick={()=>{reiniciarBaraja()}}>REINICIAR</button>
      </div>
    </Modal>
  </Main>)
}

export default Parejas