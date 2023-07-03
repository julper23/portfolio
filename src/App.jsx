import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import TextoCambiante from './componentes/textoCambiante/index.jsx'
import Header from './componentes/header';
import colors from "./../theme/colors";
import miFoto from "../assets/fotoPersonal.jpeg"
import ReactTextTransition, { presets } from "react-text-transition";

export function App () {

  const meGusta = [
    "trabajar en equipo",
    "aprender",
    "resolver problemas",
    "programar"
  ]

  const intvl = useRef(null);

  const [textIndex, setTextIndex] = useState(0);

  const inc = () => {
    setTextIndex(preVal => preVal===meGusta.length-1?0:preVal+1);
  };

  useEffect(() => {
    intvl.current = setInterval(inc, 2000);
    return () => {
      clearInterval(intvl.current);
    };
  }, []);


  return (
    <main>
      <Header/>
      <section style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.meta,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
        <div id="FotoPersonal" style={{height:"auto",display:"flex",alignContent:"center",alignItems:"center"}}>
          <img alt="imagen de julen perez" src={miFoto} style={{width:"150px",height:"150px",borderRadius:100}}/>
        </div>
        <div id="InfoPersonal" style={{height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",padding:25}}>
          <span>¡Bienvenido!</span>
          <span>Soy Julen Pérez Coca, Junior Front-End developer</span>
          <section>
            <section className="inline">
              Y me gusta
              <ReactTextTransition
                springConfig={presets.gentle}
                style={{ margin: "0 4px",color:"#0000FF",fontSize:"large",fontWeight:"bold" }}
                inline
              >
                {meGusta[textIndex]}
              </ReactTextTransition>
            </section>
          </section>
        </div>
      </section>
      <secton></secton>
      {/*
      <section>Personal: Acerca de mi, CV, redes sociales</section>
      <section>Habilidades</section>
      <section>Projectos recientes</section>
      <section>Contacto</section>
      */}
  </main>
  )
}