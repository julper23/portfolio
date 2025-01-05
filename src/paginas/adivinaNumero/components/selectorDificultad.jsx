function SelectorDificultad({startGame}) {

  return (
    <div className="selectorDificultad_contenedor">
        {/*AÑADIR SELECTOR DE DIFICULTAD DE 4 a 10 que se le pasara a la funcion startGame como prop*/}
        <button onClick={()=>{startGame()}}>Empezar</button>
    </div>);
}

export default SelectorDificultad