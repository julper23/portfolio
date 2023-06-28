import React, { useEffect, useState } from 'react';
import './App.css';

export function App () {

    const meGusta = [
        "trabajar en equipo",
        "aprender",
        "resolver problemas",
        "programar"
      ]
    
    const [textMeGusta,setTextMeGusta] = useState(0)
    
    const delay = () => new Promise(res => setTimeout(res, 2000));
    
    const cambiarMeGusta = async(i) => {
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
      <main>
        <header style={{width:"100%",backgroundColor:"black",height:25}}></header>
        <section style={{width:"100%",minHeight:200,backgroundColor:"rgb(255,0,0,0.5)",display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <div id="FotoPersonal" style={{height:"auto",backgroundColor:"blue",display:"flex",alignContent:"center",alignItems:"center"}}>
            <img alt="imagen de julen perez" src="./../public/imgs/fotoPersonal.jpeg" style={{width:"150px",height:"150px",borderRadius:100}}/>
          </div>
          <div id="InfoPersonal" style={{height:"auto",backgroundColor:"gray",display:"flex",flexDirection:"column",justifyContent:"center",padding:25}}>
            <span>¡Bienvenido!</span>
            <span>Soy Julen Pérez Coca, Junior Front-End developer</span>
            <div><span>Y me gusta </span><span className='letrasCambiantes'>{meGusta[textMeGusta]}</span></div>
          </div>
        </section>
        {/*
        <section>Personal: Acerca de mi, CV, redes sociales</section>
        <section>Habilidades</section>
        <section>Projectos recientes</section>
        <section>Contacto</section>
        */}
    </main>
    )
}