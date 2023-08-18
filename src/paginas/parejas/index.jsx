import './styles.css';

import Header from './Header';
import Tablero from './tablero';

import Main from '../../componentes/main';

import useBaraja from './hooks/useBajara';

function Parejas() {

  const {cartas,pareja,intentos,ganador,reiniciarBaraja,seleccionarCarta} = useBaraja()

  return (<Main principal={false}>
    <Header reiniciarPartida={()=>{reiniciarBaraja()}} ganador={ganador} intentos={intentos}/>
    <Tablero baraja={cartas} parejaSeleccionada={pareja} seleccionarCarta={(carta)=>seleccionarCarta(carta)}/>
  </Main>)
}

export default Parejas