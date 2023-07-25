import './styles.css'

import { useState,useEffect } from 'react'

import { HexColorPicker } from "react-colorful";
import { AiFillSetting } from "react-icons/ai";
import { Table } from 'antd';

import useRuleta from './hooks/useRuleta';

import HeaderProyectos from '../../componentes/headerProyectos';

import createRuleta from './utiles/createRuleta';

function Ruleta() {

  const [nuevosParticipantes,setNuevosParticipantes] = useState(1)
  const [deleteCon,setDeleteCon] = useState(1)
  const [opciones,setOpciones] = useState(false)

  const {concursantes,isSpinning,winner,addConcursantes,deleteConcursantes,deleteConcursante,changeColor,changeNombre,sortear} = useRuleta()

  const columns = [
    {
      title:"Nombre",
      width: "75px",
      render: (item)=><input style={{marginLeft:"5px",padding:"5px",borderRadius:"10px",width:"80%"}} type="text" name="numeroAañadir" value={item.nombre} onChange={(t)=>{changeNombre(t.target.value,item)}}/>
    },
    {
      title:"Color",
      width: "75px",
      render: (item)=><section className="small"><HexColorPicker color={item.color} onChange={(color)=>{changeColor(color,item)}} /></section>
    },
    {
      title:"Eliminar",
      width: "45px",
      render:(item)=><button style={{cursor:"pointer",borderRadius:"10px",padding:"5px",fontSize:"15px",width:"70px"}} onClick={()=>{deleteConcursante(item)}} disabled={concursantes.length <= 2}>Eliminar</button>
    }
  ]

  useEffect(() => {
    createRuleta(concursantes)
  }, [concursantes]);

  return (
    <main style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <HeaderProyectos/>
      <div className="ruleta_contenedor">
        <h1  className='ruleta_ganador'>{winner&&winner}</h1>
        <div className='ruleta_ruletaYajustes'>
          <div className="ruleta_concursantes">
            <div className="ruleta_canvasContainer">
              <div className='ruleta_seleccionador'/>
              <canvas className='ruleta_canvas' id="idcanvas" width="600" height="600"></canvas>
            </div>



            
            <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",marginTop:"20px"}}>
              <button style={{height:"50px",width:"50px",borderStyle:"none",backgroundColor:"transparent "}}>
                <AiFillSetting style={{height:"100%",width:"100%",color:"transparent"}}/>
              </button>
              <button className='botones' onClick={() => { sortear() }} disabled={isSpinning}>
                <span id="idestado" >{"Sortear"}</span>
              </button>
              <button style={{marginRight:"10px",height:"50px",width:"50px",borderStyle:"none",backgroundColor:"transparent ",zIndex:"1000"}}>
                <AiFillSetting onClick={()=>{setOpciones(!opciones)}}style={{height:"100%",width:"100%",cursor:"pointer"}}/>
              </button>
            </div>
          </div>
          {opciones&&<div className='tablaConcursantes' style={{marginTop:"15px",display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
              <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"center",justifyContent:"center",margin:"5px"}}>
                <button style={{cursor:"pointer",borderRadius:"10px",padding:"5px",fontSize:"large",width:"105px"}} onClick={()=>{addConcursantes(nuevosParticipantes)}} disabled={isSpinning}>AGREGAR</button>
                <input style={{marginLeft:"5px",padding:"5px",borderRadius:"10px",width:"200px"}} type="number" name="numeroAañadir" min={1} max={200} value={nuevosParticipantes} onChange={(t)=>{setNuevosParticipantes(t.target.value)}}/>
              </div>
              <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"center",justifyContent:"center",margin:"5px"}}>  
              <button style={{cursor:"pointer",borderRadius:"10px",padding:"5px",fontSize:"large",width:"105px"}} onClick={()=>{deleteConcursantes(deleteCon)}} disabled={concursantes.length<= 2||isSpinning}>Eliminar</button>
              <input style={{marginLeft:"5px",padding:"5px",borderRadius:"10px",width:"200px"}} type="number" name="numeroAañadir" min={1} max={concursantes.length-2} value={deleteCon} onChange={(t)=>{setDeleteCon(t.target.value)}} disabled={concursantes.length<= 2}/>
              </div>
            </div>
            <div style={{width:"80%",marginBottom:"20px",minWidth:"404px"}}>
              <Table style={{marginTop:"15px"}} columns={columns} dataSource={concursantes} pagination={false} scroll={{ x:225,y: 500 }} />
            </div>
          </div>}
        </div>
      </div>
    </main>
  );
}

export default Ruleta
