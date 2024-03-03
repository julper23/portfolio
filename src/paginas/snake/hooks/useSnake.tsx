import { useEffect, useState } from "react";

export default function useSnake() {
    const [tablero,setTablero]:any = useState([]);
    const [serpiente,setSerpiente] = useState([{a:10,b:5}]);
    const [comida,setComida]:any = useState(undefined);
    const [direccion, setDireccion]:any = useState(null);

    useEffect(()=>{
        if(!comida&&tablero&&tablero.length>0){
            updateComida(serpiente)
        }
    },[tablero])

    useEffect(()=>{
        let tableroNew: any[] = [];
        for(let filas = 0; filas<21;filas++){
            let filaNew: number[] = [];
            if(filas === 0 || filas === 20){
                filaNew.push(2,2,2,2,2,2,2,2,2,2,2);
            } else {
                filaNew.push(2,0,0,0,0,0,0,0,0,0,2);
            }
            tableroNew.push(filaNew);
        }
        setTablero(tableroNew);
    },[serpiente,comida]);



    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [serpiente,tablero]);

    const gameOver = () => {
        alert("GAME OVER")
        setSerpiente([{a:10,b:5}])
    }

    const colorCelda = ({posicion,serpiente,indexFila,indexColumna}) => {
        if(posicion === 2){return 2;}
        let pos = {a:indexFila,b:indexColumna}
        if(serpiente.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify(pos))){
            return 1;
        }
        if(comida && comida?.a === indexFila && comida?.b === indexColumna ){
            return 3;
        }
        return 0;
    };
    const cantMove = (serpiente:any) => {
        const firstSFila = serpiente[0]?.a
        const firstSColumna = serpiente[0]?.b
        const cantUP = serpiente.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify({a:firstSFila-1,b:firstSColumna})) || tablero[firstSFila-1][firstSColumna] === 2
        const cantDOWN = serpiente.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify({a:firstSFila+1,b:firstSColumna})) || tablero[firstSFila+1][firstSColumna] === 2
        const cantLEFT= serpiente.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify({a:firstSFila,b:firstSColumna-1})) || tablero[firstSFila][firstSColumna-1] === 2
        const cantRIGHT = serpiente.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify({a:firstSFila,b:firstSColumna+1})) || tablero[firstSFila][firstSColumna+1] === 2
        
        return cantUP && cantDOWN && cantLEFT && cantRIGHT
    }

    const updateComida = (serp) => {
        const filaAleatoria = Math.floor(Math.random() * 19) + 1
        const columnaAleatoria = Math.floor(Math.random() * 9) + 1
        let posibleTablero = tablero[filaAleatoria][columnaAleatoria] === 0
        let posibleSerpiente = !serp.some((objeto:any) => JSON.stringify(objeto) === JSON.stringify({a:filaAleatoria,b:columnaAleatoria}))
        let posibleComida = comida?.a !== filaAleatoria && comida?.b !== columnaAleatoria
        if(posibleTablero&&posibleSerpiente&&posibleComida){
            setComida({a:filaAleatoria,b:columnaAleatoria})
            setSerpiente(serp)
        }else{
            updateComida(serp)
        }
    }

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
    const comprobarPosicion = (newPosition) => {
        if (newPosition.a >= 0 && newPosition.a < tablero.length &&
            newPosition.b >= 0 && newPosition.b < tablero[0].length) {
            const canTChange = serpiente.some(objeto => JSON.stringify(objeto) === JSON.stringify(newPosition))
            const cantMoveSerp = cantMove(serpiente)
            const isComida = comida?.a === newPosition?.a && comida?.b === newPosition?.b
            
            if(cantMoveSerp||canTChange){
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

    const funcionConRetraso = (d,s) => {
        console.log(d);
        switch(d){
            case 'ArrowUp':
                comprobarPosicion({a: s[0].a - 1, b: s[0].b});
                break;
            case 'ArrowDown':
                comprobarPosicion({a: s[0].a + 1, b: s[0].b});
                break;
            case 'ArrowRight':
                comprobarPosicion({a: s[0].a, b: s[0].b + 1});
                break;
            case 'ArrowLeft':
                comprobarPosicion({a: s[0].a, b: s[0].b - 1});
                break;
            default:
                break;
        }

    }
    
    useEffect(()=>{
        let intervalId;
        if(direccion){
            clearInterval(intervalId)
            intervalId = setInterval(() => funcionConRetraso(direccion, serpiente), 700);
            if(serpiente.length===1&&serpiente[0].a===10&&serpiente[0].b===5){
                clearInterval(intervalId);
            }
        }
        
        return () => {
            clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente o al cambiar la dirección
        };
    }, [direccion, serpiente]);

    const handleKeyDown = (event) => {
        
        switch(event.key){
            case 'ArrowUp':
                if(direccion!=="ArrowUp"&&direccion!=="ArrowDown"){
                    comprobarPosicion({a: serpiente[0].a - 1, b: serpiente[0].b});
                    setDireccion("ArrowUp")
                }
                break;
            case 'ArrowDown':
                if(direccion!=="ArrowUp"&&direccion!=="ArrowDown"){
                    comprobarPosicion({a: serpiente[0].a + 1, b: serpiente[0].b});
                    setDireccion("ArrowDown")
                }
                break;
            case 'ArrowRight':
                if(direccion!=="ArrowRight"&&direccion!=="ArrowLeft"){
                    comprobarPosicion({a: serpiente[0].a, b: serpiente[0].b + 1});
                    setDireccion("ArrowRight")
                }
                break;
            case 'ArrowLeft':
                if(direccion!=="ArrowRight"&&direccion!=="ArrowLeft"){
                    comprobarPosicion({a: serpiente[0].a, b: serpiente[0].b - 1});
                    setDireccion("ArrowLeft")
                }
                break;
            default:
                break;
        }
    };

    return {tablero,serpiente,colorCelda,handleKeyDown}
}