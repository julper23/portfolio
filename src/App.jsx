import './App.css';

import {meGusta, redesSociales, proyectos, habilidades} from "./data";

import React, { useEffect, useState, useRef } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";

import colors from "./../theme/colors";

import miFoto from "../assets/fotoPersonal.jpeg";

import Header from './componentes/header';
import BotonSocial from './componentes/botonSocial';
import { AiFillEye } from "react-icons/ai";
import Banner from "../assets/banner.png"

const BotonHabilida = ({icon}) => {
  return(
    <button style={{height:"100px",width:"100px",margin:"2px",borderRadius:"15px",cursor:"pointer"}}>{<img alt="icono" style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}} src={icon} loading="lazy"/>}</button>
  )
}

const Separador = () => {
  return(<div style={{height:"15px",backgroundColor:colors.primary}}/>)
}

const Titulo = ({texto}) => {
  return(
    <h1 style={{width:"100%",minWidth:"150px",display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>{texto}</h1>
  )
}

const PanelProyecto = ({proyecto}) => {

  /*
  <div style={{width:"230px",height:"140px",backgroundImage:'url(' + proyecto.img + ')',backgroundSize:"cover"}}>
    
  </div>
  */
  return(<div className="contenedor" key={proyecto.nombre} style={{backgroundImage:'url(' + proyecto.img + ')',backgroundSize:"cover",margin:"5px",borderRadius:"5px"}}>
  <div className="tarjeta-informacion">
    <div style={{width:"100%",height:"30%",color:"white",fontWeight:"bold",fontSize:"large",display:"flex",alignItems:"center",justifyContent:"center"}}>
      {proyecto.nombre}
    </div>
    <div style={{width:"100%",height:"70%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
      {/*<button style={{cursor:"pointer",borderRadius:"500px",display:"flex",alignItems:"center"}}>{<AiFillEye style={{fontSize:"25px"}}/>}</button>*/}
    </div>
  </div>
</div>
  
  )
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

  const [checked,setChecked] = useState(false)


  return (<main style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <header style={{position:"fixed",backgroundColor:"black",width:"100%",height:"50px",zIndex:"999999"}}></header>

{/*SECCION PRINCIPAL*/}
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #454647, #525355)",boxShadow:"9px 9px 18px #1f1f20,-9px -9px 18px #7b7d7e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"75px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
      <div id="FotoPersonal" style={{height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <img alt="imagen de julen perez" src={miFoto} loading="lazy" style={{width:"175px",height:"175px",borderRadius:100,marginTop:"15px"}}/>
        <div style={{width:"100%",marginTop:"5px",minWidth:"150px",display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
          {redesSociales.map((rrss)=>{
            return(<BotonSocial key={rrss.name} rrss={rrss}/>)
          })}
        </div>
      </div>
      <div id="InfoPersonal" style={{height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",padding:25,color:"white"}}>
        <h1>¡Bienvenido!</h1>
        <p style={{fontSize:"20px"}}>Soy Julen Pérez Coca, Front-End Developer</p>
        <div style={{fontSize:"20px"}}>
          <div className="inline">
            Y me gusta
            <ReactTextTransition
              springConfig={presets.gentle}
              style={{ margin: "0 4px",color:"#C2BABA",fontSize:"large",fontWeight:"bold" }}
              inline
            >
              {meGusta[textIndex]}
            </ReactTextTransition>
          </div>
        </div>
        <p style={{fontSize:"20px"}}>
          Estoy comprometido con la calidad y la atención al detalle en mi trabajo.<br/>
          Que funcione es solo el principio.<br/>
          Echa un vistazo a mis habilidades y proyectos a continuación.
        </p>
      </div>
    </div>

{/*Proyectos*/}
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #454647, #525355)",boxShadow:"9px 9px 18px #1f1f20,-9px -9px 18px #7b7d7e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"45px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
      <h1 style={{color:"white",textDecoration:"bold",fontFamily:"sans-serif"}}>PROYECTOS</h1>
      <div style={{width:"90%",minWidth:"150px",marginBottom:"10px",display:"flex",flexWrap:"wrap",justifyContent:"center",maxHeight:"300px",overflowY:"auto"}}>
        {proyectos.map((proyecto)=>{
          return(<PanelProyecto proyecto={proyecto}/>)
        })}
      </div>
    </div>


{/*Habilidades */}
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #454647, #525355)",boxShadow:"9px 9px 18px #1f1f20,-9px -9px 18px #7b7d7e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"45px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
      <h1 style={{color:"white",textDecoration:"bold",fontFamily:"sans-serif"}}>HABILIDADES</h1>
      <div style={{width:"90%",minWidth:"150px",marginBottom:"10px",display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap",maxHeight:"500px",overflowY:"auto"}} id="Habilidades">
          {habilidades.map((habilidad)=>{
            return(<BotonHabilida key={habilidad.name} icon={habilidad.logo}/>)
          })}
        </div>
    </div>
    


    
    <footer style={{height:"45px"}}></footer>
  </main>)
});

export default App;
  {
    /*
    <header style={{minHeight:"400px",width:"100%",position:"fixed",backgroundColor:"red"}}>
      <div className='header-background-image' style={{backgroundImage:'url(' + Banner + ')',backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"fixed",left:"0",right:"0",zIndex:1,display:"block",width:"100%",opacity:"0.2",minHeight:"400px",filter:"blur(2px) grayscale(0.3) fadded"}}></div>
      <div className='header-content' style={{position:"fixed",left:"0",right:"0",zIndex:9999,display:"block",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{background:"-webkit-linear-gradient(5deg, #60A9FF , #D187FF )",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textAlign:"center",textDecoration:"border",fontSize:"50px",fontFamily:"Barlow"}}>
          Julen Pérez Coca<br/> Desarrollador FrontEnd
        </h1>
        <span style={{color:"white",width:"50%"}}>
        ¡Bienvenido a mi portafolio!
        Soy un programador frontend con experiencia en diseño y desarrollo de aplicaciones web.
        Estoy comprometido con la calidad y la atención al detalle en mi trabajo.
        Que funcione es solo el principio
        Echa un vistazo a mis habilidades y proyectos a continuación.
        </span>
      </div>
      
    </header>
    */
  }
    {/*<main style={{height:"100%",background:"linear-gradient(#e66465, #9198e5)"}}>
      <header style={{width:"100%",minWidth:"150px",backgroundColor:"black",height:80/*,position:"fixed"*//*}}>

      {/*
      <nav>
        <div className='enlace'><img className='logo' src={Logo} style={{height:"50%",width:"50%"}}></img></div>
        <div className="checkbtn" style={{float:"right",height:"80px",width:"80px",display:"grid",placeItems: "center"}}><AiOutlineMenu style={{cursor:"pointer",height:"50%",width:"50%",color:"black"}}onClick={()=>{setChecked(!checked)}}/></div>
        <input type="checkbox" id="check" checked={checked}></input>

          <ul>
            <li><a rel="noopener" target="_blank" href="#Inicio">INICIO</a></li>
            <li><a rel="noopener" target="_blank" href="#Proyectos">PROYECTOS</a></li>
            <li><a rel="noopener" target="_blank" href="#Habilidades">Habilidades</a></li>
          </ul>
        
      </nav>*/}
      {/*</header>
      <div>
        {/*SECCION PRINCIPAL*/}
        {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",paddingTop:"10px"}} id="Inicio">
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
        {/*REDES SOCIALES Y CV*/}
        {/*<div style={{width:"100%",minWidth:"150px",display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
          {redesSociales.map((rrss)=>{
            return(<BotonSocial key={rrss.name} rrss={rrss}/>)
          })}
        </div>

        {/*Proyectos*/}
        {/*<Separador/>
        <Titulo texto={"Proyectos"} id="Proyectos"/>
        <div style={{width:"100%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
          {proyectos.map((proyecto)=>{
            return(<PanelProyecto proyecto={proyecto}/>)
          })}
        </div>
        {/*Projectos recientes*/}
        {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

        </div>
      <Separador/>
          {/*Habilidades */}
        {/*<Separador/>
          <Titulo texto={"Habilidades"} />
        <div style={{width:"100%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap"}} id="Habilidades">
          {/*<h1>HABILIDADES</h1>
          <div>
            <h1>FrontEnd</h1>
          </div>
          <div>
            <h1>MOVIL</h1>
          </div>
          <div>
            <h1>BackEnd</h1>
          </div>
          <div>
            <h1>LENGUAJES</h1>
          </div>
          */}
          {/*{habilidades.map((habilidad)=>{
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
        {/*Contacto*/}
        {/*<div style={{width:"100%",minWidth:"150px",minHeight:200,backgroundColor:colors.calmado,display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>

        </div>*/}
        {/*

        TERMINADO-------


        EN PROCESO------
        <section>Personal: Acerca de mi, CV, redes sociales</section>
        <section>Habilidades</section>


        POR EMPEZAR-----
        <section>Sobre Mi</section>
        <section>Experiencia</section>
        <section>Estudios</section>
        <section>Cursos</section>
        <section>Projectos recientes</section>
        <section>Contacto</section>
        */}
   {/* </div>
      </main>*/}