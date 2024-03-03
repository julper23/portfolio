import './styles.css'
import { useEffect, useState } from "react";
import Main from '../../componentes/main';

const TableroSnake = () => {
    const [tablero,setTablero] = useState([]);
    const [serpiente,setSerpiente] = useState([{a:10,b:5}]);
    const [comida,setComida] = useState(undefined)
    const move = (newPosition) => {
        let newSerpiente = serpiente.slice();
        newSerpiente.unshift(newPosition);
        newSerpiente.pop();
        setSerpiente(newSerpiente);
        const cantMoveSerp = cantMove(newSerpiente)
        if(cantMoveSerp){
            gameOver();
            return
        }
    };

    const moveAndEat = (newPosition) => {
        let newSerpiente = serpiente.slice();
        newSerpiente.unshift(newPosition);
        setSerpiente(newSerpiente);
        updateComida(newSerpiente);
    };

    const gameOver = () => {
        alert("GAME OVER")
        setSerpiente([{a:10,b:5}])
    }
    const cantMove = (serpiente) => {
        const firstSerpiente = serpiente[0]
        const cantUP = serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify({a:firstSerpiente?.a-1,b:firstSerpiente?.b})) || tablero[firstSerpiente.a-1][firstSerpiente.b] === 2
        const cantDOWN = serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify({a:firstSerpiente?.a+1,b:firstSerpiente?.b})) || tablero[firstSerpiente.a+1][firstSerpiente.b] === 2
        const cantLEFT= serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify({a:firstSerpiente?.a,b:firstSerpiente?.b-1})) || tablero[firstSerpiente.a][firstSerpiente.b-1] === 2
        const cantRIGHT = serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify({a:firstSerpiente?.a,b:firstSerpiente?.b+1})) || tablero[firstSerpiente.a][firstSerpiente.b+1] === 2
        
        return cantUP && cantDOWN && cantLEFT && cantRIGHT

    }
    const comprobarPosicion = (newPosition) => {
        if (newPosition.a >= 0 && newPosition.a < tablero.length &&
            newPosition.b >= 0 && newPosition.b < tablero[0].length) {
            const canTChange = serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify(newPosition))
            const cantMoveSerp = cantMove(serpiente)
            const isComida = comida?.a === newPosition?.a && comida?.b === newPosition?.b
            if(cantMoveSerp){
                gameOver();
                return
            }
            switch(tablero[newPosition.a][newPosition.b]){
                case 0:
                    if(isComida){
                        moveAndEat(newPosition);
                    }else{
                        !canTChange && move(newPosition);
                    }
                    break;
                default:
                    break;
            }
        }
    };

    const updateComida = (serp) => {
        const filaAleatoria = Math.floor(Math.random() * 19) + 1
        const columnaAleatoria = Math.floor(Math.random() * 9) + 1
        let posibleTablero = tablero[filaAleatoria][columnaAleatoria] === 0
        let posibleSerpiente = !serp.some(objeto => JSON.stringify(objeto) === JSON.stringify({a:filaAleatoria,b:columnaAleatoria}))
        let posibleComida = comida?.a !== filaAleatoria && comida?.b !== columnaAleatoria
        if(posibleTablero&&posibleSerpiente&&posibleComida){
            setComida({a:filaAleatoria,b:columnaAleatoria})
            setSerpiente(serp)
        }else{
            updateComida(serp)
        }
    }

    const handleKeyDown = (event) => {
        switch(event.key){
            case 'ArrowUp':
                comprobarPosicion({a: serpiente[0].a - 1, b: serpiente[0].b});
                break;
            case 'ArrowDown':
                comprobarPosicion({a: serpiente[0].a + 1, b: serpiente[0].b});
                break;
            case 'ArrowRight':
                comprobarPosicion({a: serpiente[0].a, b: serpiente[0].b + 1});
                break;
            case 'ArrowLeft':
                comprobarPosicion({a: serpiente[0].a, b: serpiente[0].b - 1});
                break;
            default:
                break;
        }
    };

    useEffect(()=>{
        if(!comida&&tablero&&tablero.length>0){
            updateComida(serpiente)
        }
    },[tablero])

    useEffect(()=>{
        let tableroNew = [];
        for(let filas = 0; filas<21;filas++){
            let filaNew = [];
            if(filas === 0 || filas === 20){
                filaNew.push(2,2,2,2,2,2,2,2,2,2,2);
            } else {
                filaNew.push(2,0,0,0,0,0,0,0,0,0,2);
            }
            tableroNew.push(filaNew);
        }
        setTablero(tableroNew);
    },[serpiente,comida]);

    const colorCelda = ({posicion,serpiente,indexFila,indexColumna}) => {
        if(posicion === 2){return 2;}
        let pos = {a:indexFila,b:indexColumna}
        if(serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify(pos))){
            return 1;
        }
        if(comida && comida?.a === indexFila && comida?.b === indexColumna ){
            return 3;
        }
        return 0;
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [serpiente,tablero]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);    useEffect(()=>{
        console.log(windowDimensions);
        console.log(windowDimensions.height>windowDimensions.width);
    },[windowDimensions])

    const BotoneraSnake = (onClickBotoneraSnake) => {
        return (<div>
            <div>
            <button> UP </button>
            </div>
            <div>
            <button> Left </button>
            <button> Down </button>
            <button> Right </button>
            </div>
        </div>)
    }

    return (
        <div className='tableroSnake'>
            {
                tablero.length > 0 && tablero.map((fila,indexFila) => {
                    return(
                        <div className='tableroFila' style={{height:windowDimensions.height>windowDimensions.width? "25px": "25px"}}key={indexFila}>
                            {fila.map((posicion,indexColumna) => {
                                return(
                                    <div className={`tableroCell color-${colorCelda({posicion,serpiente,indexFila,indexColumna})}`} style={{height:windowDimensions.height<windowDimensions.width? "25px": "25px",width:windowDimensions.height>windowDimensions.width? "25px": "25px"}}  key={indexFila+"-"+indexColumna}/>
                                );
                            })}
                        </div>
                    );
                })
            }
            <BotoneraSnake onClickBotoneraSnake={handleKeyDown}/>
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