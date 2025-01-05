function getNumAleatorio0_9() {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
}

function crearNumeroAleatorio(dificultad) {
    let newNumber = ""
    for(let x=0;x<dificultad;x++){
        let n = getNumAleatorio0_9()
        newNumber = newNumber + n
    }
    return newNumber
}

export default crearNumeroAleatorio