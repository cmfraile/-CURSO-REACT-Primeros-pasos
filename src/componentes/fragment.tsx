import { random } from "underscore";
import PropTypes from 'prop-types';

export const fragmentest = () => 
<>
    <h1>Esta mierda chucha</h1>
    <p>chucha gushi</p>
</>

export const tsfragment = ({title,dado2=0}:any) => {

    const var1 = {
        nombre: title,
        rango: 2,
        dado : random(1,10),
        dado2 : dado2
    }
    
    return (
        <>
        <h1>fragmento</h1>
        <p>Soy el supersayayin { var1.nombre }</p>
        <code>{ JSON.stringify(var1) }</code>
        </>
    )
}

tsfragment.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
  
tsfragment.defaultProps = {
    title: 'GOKU',
    subtitle: 'Supersayayin',
}