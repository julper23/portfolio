import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import TextoCambiante from './componentes/textoCambiante/index.jsx'
import Header from './componentes/header';
import colors from "./../theme/colors";
import miFoto from "../assets/fotoPersonal.jpeg"
import ReactTextTransition, { presets } from "react-text-transition";
import {meGusta, redesSociales, habilidades} from "./data"

const BotonSocial = (rrss) => {
  return(
    <button onClick={()=>{rrss.rrss.url&&window.open(rrss.rrss.url)}} style={{height:"50px",width:"50px",margin:"2px",borderRadius:"15px",cursor:"pointer"}}>{rrss.rrss.logo}</button>
  )
}

const BotonHabilida = ({icon}) => {
  return(
    <button style={{height:"100px",width:"100px",margin:"2px",borderRadius:"10px",cursor:"pointer"}}>{<img alt="icono" style={{maxWidth:"100%",maxHeight:"100%"}} src={icon} loading="lazy"/>}</button>
  )
}

const Separador = () => {
  return<div style={{height:"15px",backgroundColor:colors.primary}}/>
}

const App = React.memo(() => {

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
    <main style={{height:"100%",background:"linear-gradient(#e66465, #9198e5)"}}>
      <Header/>

      {/*SECCION PRINCIPAL*/}
      <div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
        <div id="FotoPersonal" style={{height:"auto",display:"flex",alignContent:"center",alignItems:"center"}}>
          <img alt="imagen de julen perez" src={miFoto} loading="lazy" style={{width:"150px",height:"150px",borderRadius:100}}/>
        </div>
        <div id="InfoPersonal" style={{height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",padding:25}}>
          <span>¡Bienvenido!</span>
          <span>Soy Julen Pérez Coca, Junior Front-End developer</span>
          <div>
            <div className="inline">
              Y me gusta
              <ReactTextTransition
                springConfig={presets.gentle}
                style={{ margin: "0 4px",color:"#0000FF",fontSize:"large",fontWeight:"bold" }}
                inline
              >
                {meGusta[textIndex]}
              </ReactTextTransition>
            </div>
          </div>
        </div>
      </div>

    <Separador/>

      {/*REDES SOCIALES Y CV*/}
      <div style={{width:"100%",minWidth:"150px",backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
        {redesSociales.map((rrss)=>{
          return(<BotonSocial key={rrss.name} rrss={rrss}/>)
        })}
      </div>
    <Separador/>
        {/*Habilidades */}
      <div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
        {/*<h1>HABILIDADES</h1>
        <div>
          <h1>WEB</h1>
        </div>
        <div>
          <h1>MOVIL</h1>
        </div>
        <div>
          <h1>BACKEND</h1>
        </div>
        <div>
          <h1>LENGUAJES</h1>
        </div>
        */}
        {habilidades.map((habilidad)=>{
          return(<BotonHabilida key={habilidad.name} icon={habilidad.logo}/>)
        })}
      </div>
      {/*<Separador/>
      {/*Experiencia*/}
      {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}></div>
      <Separador/>
      {/*Estudios*/}
      {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}></div>
      <Separador/>
      {/*Cursos*/}
      {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
      </div>
    <Separador/>
      {/*Projectos recientes*/}
      {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

      </div>
    <Separador/>
      {/*Contacto*/}
      {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

      </div>*/}
      {/*

      TERMINADO-------


      EN PROCESO------
      <section>Personal: Acerca de mi, CV, redes sociales</section>
      <section>Habilidades</section>


      POR EMPEZAR-----
      <section>Experiencia</section>
      <section>Estudios</section>
      <section>Cursos</section>
      <section>Projectos recientes</section>
      <section>Contacto</section>
      */}
  </main>
  )
});

export default App;