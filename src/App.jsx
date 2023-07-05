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

  const redesSociales = [
    {
      name:"CV",
      logo:"C"
    },
    {
      name:"Linkeding",
      logo:"L"
    },
    {
      name:"Instagram",
      logo:"I"
    }
  ]

  const habilidades = [
    {
      name:"CSS",
      logo:"CSS"
    },
    {
      name:"HTML",
      logo:"HTML"
    },
    {
      name:"Java",
      logo:"Java"
    },
    {
      name:"JavaScript",
      logo:"JS"
    },
    {
      name:"MySQL",
      logo:"MS"
    },
    {
      name:"PHP",
      logo:"PHP"
    },
    {
      name:"Python",
      logo:"P"
    },
    {
      name:"React",
      logo:"R"
    },
    {
      name:"React Native",
      logo:"R N"
    },
    {
      name:"TypeScript",
      logo:"TS"
    }
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

  const BotonSocial = ({text}) => {
    return(
      <button style={{height:"50px",width:"50px",margin:"2px",borderRadius:"15px",cursor:"pointer"}} onClick={()=>{console.log(text);}}>{text}</button>
    )
  }

  const Separador = () => {
    return<div style={{height:"15px",backgroundColor:colors.primary}}/>
  }

  return (
    <main>
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
      <div style={{width:"100%",minWidth:"150px",height:60,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
        {redesSociales.map((rrss)=>{
          return(<BotonSocial key={rrss.name} text={rrss.logo}/>)
        })}
      </div>
    <Separador/>
        {/*Habilidades */}
      <div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
        {habilidades.map((habilidad)=>{
          return(<BotonSocial key={habilidad.name} text={habilidad.logo}/>)
        })}
      </div>
    <Separador/>
      {/*Projectos recientes*/}
      <div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

      </div>
    <Separador/>
      {/*Contacto*/}
      <div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

      </div>
      {/*

      TERMINADO-------


      EN PROCESO------
      <section>Personal: Acerca de mi, CV, redes sociales</section>
      <section>Habilidades</section>


      POR EMPEZAR-----
      <section>Projectos recientes</section>
      <section>Contacto</section>
      */}
  </main>
  )
}