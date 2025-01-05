import './styles.css'

import { useState,useEffect } from 'react'

import Main from '../../componentes/main';

import useNumero from './hooks/useNumero';

import SelectorDificultad from "./components/selectorDificultad";

function AdivinaNumero() {

  const {isIniciado,startGame} = useNumero();

  return (<Main principal={false}>
    <div className="adivinaNumero_contenedor">
    {!isIniciado&&<SelectorDificultad startGame={startGame}></SelectorDificultad>}

    </div>
  </Main>);
}

export default AdivinaNumero
