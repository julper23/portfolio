import './App.css';

import {meGusta, redesSociales, proyectos, habilidades} from "./data";

import React, { useEffect, useState, useRef } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";

import colors from "./../theme/colors";

import miFoto from "../assets/fotoPersonal.webp";

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
  return(<div className="contenedor" key={proyecto.nombre} style={{backgroundImage:'url(' + proyecto.img + ')',backgroundSize:"cover",margin:"5px",borderRadius:"5px"}}>
  <div className="tarjeta-informacion">
    <div style={{width:"100%",height:"30%",color:"white",fontWeight:"bold",fontSize:"large",display:"flex",alignItems:"center",justifyContent:"center"}}>
      {proyecto.nombre}
    </div>
    <div style={{width:"100%",height:"70%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
      <a href={proyecto.url} target='_blank'  style={{cursor:"pointer",borderRadius:"500px",display:"flex",alignItems:"center",marginRight:"2px",marginBottom:"2px"}}>{<AiFillEye style={{fontSize:"25px",color:"white"}}/>}</a>
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
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #3e3e3e, #4a4a4a)",boxShadow:"9px 9px 18px #1c1c1c, -9px -9px 18px #6e6e6e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"75px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
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
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #3e3e3e, #4a4a4a)",boxShadow:"9px 9px 18px #1c1c1c, -9px -9px 18px #6e6e6e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"45px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
      <h1 style={{color:"white",textDecoration:"bold",fontFamily:"sans-serif"}}>PROYECTOS</h1>
      <div style={{width:"90%",minWidth:"150px",marginBottom:"10px",display:"flex",flexWrap:"wrap",justifyContent:"center",maxHeight:"300px",overflowY:"auto"}}>
        {proyectos.map((proyecto)=>{
          return(<PanelProyecto proyecto={proyecto}/>)
        })}
      </div>
    </div>


{/*Habilidades */}
    <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #3e3e3e, #4a4a4a)",boxShadow:"9px 9px 18px #1c1c1c, -9px -9px 18px #6e6e6e",width:"85%",minWidth:"150px",minHeight:200,display:"flex",flexDirection:"row",marginTop:"45px",justifyContent:"center",flexWrap:"wrap"}} id="Inicio">
      <h1 style={{color:"white",textDecoration:"bold",fontFamily:"sans-serif"}}>HABILIDADES</h1>
      <div style={{width:"90%",minWidth:"150px",marginBottom:"10px",display:"flex",flexDirection:"columns",justifyContent:"center",alignContent:"center",flexWrap:"wrap",maxHeight:"550px",overflowY:"auto"}} id="Habilidades">
          {habilidades.map((habilidad)=>{
            return(<BotonHabilida key={habilidad.name} icon={habilidad.logo}/>)
          })}
        </div>
    </div>
    


    
    <footer style={{height:"45px"}}></footer>
  </main>)
});

export default App;

/**
 * 
 * import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { withTranslation, useTranslation } from "react-i18next";

import { ConfigProvider,notification } from 'antd';
import locale from 'antd/lib/locale/en_US';

import GlobalContext from './components/GlobalContext';

import MainPage from "./pages/MainPage";
//--------------------------------------
import MaterialsPage from "./pages/MaterialsPage";
import MaterialInfoPage from "./pages/MaterialInfoPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsInfoPage from "./pages/ProjectsInfoPage";
import EnginesPage from "./pages/Engines";
import EngineInfoPage from "./pages/EngineInfoPage";
import MediaPage from "./pages/MediaPage";
import MediaInfoPage from "./pages/MediaInfoPage";
//--------------------------------------
import LayoutsPage from "./pages/LayoutsPage/index.js";
import LayoutInfoPage from "./pages/LayoutInfoPage";
import FinishingProductDesignPage from "./pages/FinishingProductDesignPage";
import FinishingProductDesignInfoPage from "./pages/FinishingProductDesignInfoPage";
import MaximumPowersGraph from "./pages/MaximumPowersGraphPage";
import GroovesPage from "./pages/Grooves";
import GrooveInfoPage from "./pages/GrooveInfoPage";
import RollsPage from "./pages/RollsPage";
import RollInfoPage from "./pages/RollInfoPage";
import TemperaturesPage from "./pages/TemperaturesPage";
import TemperatureInfoPage from "./pages/TemperatureInfoPage";
import log from 'loglevel';

function App() {
  log.setLevel('silent');
  console.warn = function() {};
  const openNotification = (msg,type) => {
    notification[type]({
      message: ``,
      description: msg,
      placement: 'bottomRight',
    });
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const download = (filename, text, textType) => {
    var element = document.createElement('a');
    element.setAttribute('href', textType + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const globalVars = { openNotification, download, delay };

  const {ready} = useTranslation();
  return ready?(
    <GlobalContext.Provider value={globalVars}>
      <ConfigProvider locale={locale}>
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} key="MP"/>
            {/*DATA INPUT*//*}
            <Route path="/materials" exact component={MaterialsPage} />
            <Route path="/materials/material_info/:id" exact component={MaterialInfoPage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/projects/project_info/:id" exact component={ProjectsInfoPage} />
            <Route path="/engines" exact component={EnginesPage} />
            <Route path="/engines/engine_info/:id" exact component={EngineInfoPage} />
            <Route path="/media" exact component={MediaPage} />
            <Route path="/media/media_info/:id" exact component={MediaInfoPage} />
            {/*PROJECT*//*}
            <Route path="/layouts" exact component={LayoutsPage} />
            <Route path="/layouts/layout_info/:id" exact component={LayoutInfoPage} />
            <Route path="/finishing_product_design" exact component={FinishingProductDesignPage} />
            <Route path="/finishing_product_design/design_info/:id" exact component={FinishingProductDesignInfoPage} />
            <Route path="/maximum_powers_graph" exact component={MaximumPowersGraph} />
            <Route path="/grooves" exact component={GroovesPage} />
            <Route path="/grooves/groove_info/:id" exact component={GrooveInfoPage} />
            <Route path="/rolls" exact component={RollsPage} />
            <Route path="/rolls/roll_info/:id" exact component={RollInfoPage} />
            <Route path="/temperatures" exact component={TemperaturesPage} />
            <Route path="/temperatures/temperature_calculation_info/:id" exact component={TemperatureInfoPage} />
            {/*En caso de que no exista la ruta devuelve al main*//*}
            <Redirect to="/" />
          </Switch>
        </Router>
      </ConfigProvider>
    </GlobalContext.Provider>
  ):"loading"
}

export default withTranslation()(App);
 */