import './styles.css';

import { Link } from 'react-router-dom';

import { TiArrowBackOutline } from "react-icons/ti";

const BotonVolver = () => {
    return(<Link to='/' className="linkBotonVolver">
        <TiArrowBackOutline className='iconoBotonVolver'/>
    </Link>)
}

export default BotonVolver