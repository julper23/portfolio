import './style.css';

import React from 'react';
import BotonVolver from '../botonVolver';
const HeaderProyectos = (props) => {
  return(<header className="header">
    {!props.principal&&<BotonVolver/>}
    </header>)
}

export default HeaderProyectos