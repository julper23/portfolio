import React from 'react';
import './styles.css';
const BotonSocial = ({rrss}) => {
  return(<a className='botonSocial' href={rrss.url} target='_blank' style={{height:"30px",width:"30px",margin:"2px",color:"black"}} download={rrss.download}>{rrss.logo}</a>)
}

export default BotonSocial