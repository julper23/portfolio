import React, { useEffect, useState } from 'react';
import './App.css';


export default function App() {

  const meGusta = [
    "trabajar en equipo",
    "aprender",
    "resolver problemas",
    "programar"
  ]

const [textMeGusta,setTextMeGusta] = useState(0)

const delay = () => new Promise(res => setTimeout(res, 2000));

const cambiarMeGusta = async(i:number) => {
  await delay()
  
  if(i === meGusta.length -1 ) {
    setTextMeGusta(0)
  }else{
    setTextMeGusta(i+1)
  }
}

useEffect(()=>{
  cambiarMeGusta(textMeGusta)
  // eslint-disable-next-line
},[textMeGusta])


return (
  <main id="main">
    <header></header>
    <section style={{width:"100%",backgroundColor:"rgb(0,255,0,0.5)"}}>
        <div>IMG</div>
        <p>¡Bienvenido!</p>
        <p>Soy Julen Pérez Coca, Junior Front-End developer</p>
        <span>Y me gusta </span><span className='letrasCambiantes'>{meGusta[textMeGusta]}</span>
    </section>
    <section>Personal: Acerca de mi, CV, redes sociales</section>
    <section>Habilidades</section>
    <section>Projectos recientes</section>
    <section>Contacto</section>
</main>
)
}
