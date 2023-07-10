import React, { useState, useEffect } from 'react';
import './styles.css';

const TextoCambiante = ({textoArray}) => {
    const [text,setText] = useState(0);

    const delay = () => new Promise(res => setTimeout(res, 2000));
    
    const cambiarTexto = async(i) => {
      await delay()
      
      if(i === textoArray.length -1 ) {
        setText(0)
      }else{
        setText(i+1)
      }
    }
    
    useEffect(()=>{
      cambiarTexto(text)
      // eslint-disable-next-line
    },[text])

    return(<span className='letrasCambiantes'>{textoArray[text]}</span>)
}

export default TextoCambiante