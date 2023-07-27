import './styles.css'

import Main from '../../componentes/main';

import useCronometro from './hooks/useCronometro'

function Cronometro() {
    const {timeFormat,startC,pauseC,pause,stopC,diff} = useCronometro();
  
  
    return (<Main principal={false}>
        <div className='cronometro_contenedor'>
            <h1 className='cronometro_timer'>
                {timeFormat(diff).slice(0, -3)}
                <span className='cronometro_milliSeconds'>{timeFormat(diff).slice(-3)}</span>
            </h1>
            <div className='cronometro_botonera'>
                <button className='cronometro_boton' onClick={()=>{startC()}}> {timeFormat(diff)==="00:00:00.00"?"Start":"Restart"} </button>
                <button className='cronometro_boton' onClick={()=>{pauseC()}} disabled={!diff}> {pause?"Continue":"Pause"} </button>
                <button className='cronometro_boton' onClick={()=>{stopC()}} disabled={!diff}> {"Stop"} </button>
            </div>
        </div>







    </Main>);
  }
  
  export default Cronometro
