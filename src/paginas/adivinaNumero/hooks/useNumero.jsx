import { useEffect, useState } from "react";

import crearNumeroAleatorio from "../utils/crearNumeroAleatorio"

export default function useNumero() {
  const [isIniciado,setIsIniciado] = useState(false);
  const [number,setNumber] = useState(undefined);
  const [userNumbers,setUserNumbers] = useState([]);
  const [actualNumber,setActualNumber] = useState();

  useEffect(()=>{
    if(number&&!isIniciado){
      setIsIniciado(true)
    }
    if(!number){
      setIsIniciado(false)
    }
  },[number])
  
  const startGame = (dificultad = 4) => {
    console.log(dificultad);
    let newNumber = crearNumeroAleatorio(dificultad);
    setNumber(newNumber)
  }

  return {isIniciado,number,startGame}
}