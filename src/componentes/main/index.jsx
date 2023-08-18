import './style.css'
import HeaderProyectos from '../headerProyectos'

const Main = (props) => {
  return(<main className='main'>
    <HeaderProyectos principal={props.principal}/>
    {props.children}
  </main>)
} 

export default Main