import "./style.css"

import { proyectos } from "../../data"
import PanelProyecto from "../panelProyecto"
import TituloListas from "../tituloListas"

const ProyectosVista = () => {
    return(
      <div style={{borderRadius:"50px",background:"linear-gradient(145deg, #3e3e3e, #4a4a4a)",boxShadow:"9px 9px 18px #1c1c1c, -9px -9px 18px #6e6e6e",width:"85%",minWidth:"150px",minHeight:"550px",display:"flex",flexDirection:"column",marginTop:"45px",justifyContent:"center",flexWrap:"wrap",alignContent:"center",alignItems:"center"}}>
        <TituloListas titulo={"PROYECTS"}/>
        <div className="listaDeProyectos" >
          {proyectos.map((proyecto,index)=>{
            return(<PanelProyecto key={index} proyecto={proyecto}/>)
          })}
        </div>
      </div>
    )
}

export default ProyectosVista