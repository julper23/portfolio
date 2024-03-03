import './styles.css'
import { useEffect, useState } from "react";
import { FaArrowDown,FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import Main from '../../componentes/main';
import useSnake from './hooks/useSnake';

const TableroSnake = () => {

    const {tablero,serpiente,colorCelda,handleKeyDown} = useSnake();

    const BotoneraSnake = ({onClickBotoneraSnake}) => {
        return (<div className='botonera'>

            <div className='botonesSnakeIzquierda'>
            <button className='botonSnake' onClick={()=>{onClickBotoneraSnake({key:"ArrowLeft"})}}> <FaArrowLeft className='iconButtonSnake'/> </button>
            
            <button className='botonSnake' onClick={()=>{onClickBotoneraSnake({key:"ArrowRight"})}}> <FaArrowRight className='iconButtonSnake'/> </button>
            </div>
            <div className='botonesSnakeDerecha'>
            <button className='botonSnake' onClick={()=>{onClickBotoneraSnake({key:"ArrowUp"})}}> <FaArrowUp className='iconButtonSnake'/> </button>
            <button className='botonSnake' onClick={()=>{onClickBotoneraSnake({key:"ArrowDown"})}}> <FaArrowDown className='iconButtonSnake'/> </button>
            </div>
        </div>)
    }

    return (
        <div className='tableroSnake'>
            {
                tablero.length > 0 && tablero.map((fila,indexFila) => {
                    return(
                        <div className='tableroFila' key={indexFila}>
                            {fila.map((posicion,indexColumna) => {
                                return(
                                    <div className={`tableroCell color-${colorCelda({posicion,serpiente,indexFila,indexColumna})} ${"celda-"+indexFila+"-"+indexColumna}`}  key={indexFila+"-"+indexColumna}/>
                                );
                            })}
                        </div>
                    );
                })
            }
            <BotoneraSnake onClickBotoneraSnake={(e)=>handleKeyDown(e)}/>
        </div>
    );
};

function Snake() {
    return (
        <Main principal={false}>
            <div className='snake_contenedor'>
                <TableroSnake/>
            </div>
        </Main>
    );
}

export default Snake;