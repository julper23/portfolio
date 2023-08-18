import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillEye } from "react-icons/ai";



const PanelProyecto = ({proyecto}) => {return( 
    <div style={{height:"400px",minHeight:"400px",width:"328px",backgroundColor:"#5d5d5d",margin:"5px",display:"flex",flexDirection:"column",borderRadius:"10px",overflow:"hidden"}}>
      <div style={{width:"100%",height:"50%"}}>
        <img  src={ proyecto.img} alt={"imagen del proyecto"+proyecto.nombre} style={{width:"100%",height:"100%",objectFit:"contain"}}></img >
      </div>
      <div style={{width:"100%",height:"50%",display:"flex",flexDirection:"column"}}>
        <div style={{width:"100%",height:"50%",display:"flex",justifyContent:"center"}}>
          <p style={{color:"white",fontSize:"x-large",fontFamily:"sans-serif"}}>{proyecto.nombre}</p>
        </div>
        <div style={{width:"100%",height:"50%"}}>
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
          
        {proyecto.ruta&&
          <Link to={proyecto.ruta} style={{cursor:"pointer",borderRadius:"500px",display:"flex",alignItems:"center",marginRight:"2px",marginBottom:"2px"}}>{<AiFillEye style={{fontSize:"25px",color:"white"}}/>}</Link>
          }
          <a href={proyecto.url} target='_blank'  style={{cursor:"pointer",borderRadius:"500px",display:"flex",alignItems:"center",marginRight:"2px",marginBottom:"2px"}}>{<AiFillGithub style={{fontSize:"25px",color:"white"}}/>}</a>
      </div>
        </div>
        
      </div>
    </div>
)}

export default PanelProyecto