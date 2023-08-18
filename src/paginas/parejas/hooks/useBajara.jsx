import { useEffect, useState } from "react";
import construirBaraja from '../utils/construirBaraja'
export default function useBaraja() {
    const [cartas,setCartas] = useState(construirBaraja())
    const [pareja,setPareja] = useState([])
    const [comparando,setComparando] = useState(false)
    const [intentos,setIntentos] = useState(0)
    const [ganador,setGanador] = useState(false)

    const reiniciarBaraja = () => {
        setCartas(construirBaraja())
        setPareja([])
        setComparando(false)
        setIntentos(0)
        setGanador(false)
    }

    const seleccionarCarta = (carta) => {
        if(comparando||pareja.indexOf(carta)>-1||carta.adivinada){return;}
    
        const parejaSeleccionada= [...pareja,carta]
        setPareja(parejaSeleccionada)
        if(parejaSeleccionada.length===2){
          compararPareja(parejaSeleccionada)
        }
    }

    const compararPareja = (parejaSeleccionada) => {
        setComparando(true)
        setTimeout(() => {
          const [primeraCarta,segundaCarta] = parejaSeleccionada;
          let baraja2 = cartas;
          
          if(sonPareja(parejaSeleccionada)){
            baraja2 = baraja2.map((carta)=>{
              if(carta.icono !== primeraCarta.icono){return carta}
              return {...carta,adivinada:true};
            })
          }
    
          setPareja([])
          setCartas(baraja2)
          setComparando(false)
          verificarGanador(baraja2)
          setIntentos(intentos+1)
        },1000)
    }

    const sonPareja = (parejaSeleccionada) => {
        const [primeraCarta,segundaCarta] = parejaSeleccionada;
        return primeraCarta.icono === segundaCarta.icono
    }

    const verificarGanador = (baraja) => {
        if(baraja.filter((carta)=>!carta.adivinada).length === 0){
            setGanador(true)
        }
    }

    return {cartas,pareja,intentos,ganador,reiniciarBaraja,seleccionarCarta}
}