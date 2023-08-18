import { useState } from 'react'
import './styles.css'
import Tablero from './tablero'
import construirBaraja from './utils/construirBaraja'
import Header from './Header'
import Main from '../../componentes/main';
function Parejas() {
  const [bajara,setBaraja] = useState(construirBaraja())
  const [comparando,setComparando] = useState(false)
  const [pareja,setPareja] = useState([])
  const [ganador,setGanador] = useState(false)
  const [intentos,setIntentos] = useState(0);
  
  const sonPareja = (parejaSeleccionada) => {
    const [primeraCarta,segundaCarta] = parejaSeleccionada;
    return primeraCarta.icono === segundaCarta.icono
  }

  const compararPareja = (parejaSeleccionada) => {
    setComparando(true)
    setTimeout(() => {
      const [primeraCarta,segundaCarta] = parejaSeleccionada;
      let baraja2 = bajara;
      console.log(baraja2);
      
      if(sonPareja(parejaSeleccionada)){
        baraja2 = baraja2.map((carta)=>{
          if(carta.icono !== primeraCarta.icono){
            return carta
          }
          return {...carta,adivinada:true};
        })
      }

      setPareja([])
      setBaraja(baraja2)
      setComparando(false)
      verificarGanador(baraja2)
      setIntentos(intentos+1)
    },1000)
  }

  const verificarGanador = (baraja) => {
    if(
      baraja.filter((carta)=>!carta.adivinada).length === 0
      ){
        setGanador(true)
      }
  }

  const reiniciarPartida = () => {
    setBaraja(construirBaraja())
    setComparando(false)
    setPareja([])
    setGanador(false)
    setIntentos(0)
  }

  const seleccionarCarta = (carta) => {
    if(comparando||pareja.indexOf(carta)>-1||carta.adivinada){
      return;
    }

    const parejaSeleccionada= [...pareja,carta]
    setPareja(parejaSeleccionada)
    if(parejaSeleccionada.length===2){
      compararPareja(parejaSeleccionada)
    }
  }

  return (<Main principal={false}>
    <Header reiniciarPartida={()=>{reiniciarPartida()}} ganador={ganador} intentos={intentos}/>
    <Tablero baraja={bajara} parejaSeleccionada={pareja} seleccionarCarta={(carta)=>seleccionarCarta(carta)}/>
  </Main>)
}

export default Parejas