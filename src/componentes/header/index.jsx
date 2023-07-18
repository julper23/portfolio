import React, { useState } from 'react';
import './style.css';
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./../../../assets/Logo.png"
const Header = () => {

  const [checked,setChecked] = useState(false)

  return(<header style={{width:"100%",minWidth:"150px",backgroundColor:"black",height:80/*,position:"fixed"*/}}>

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
  </header>)
}

export default Header