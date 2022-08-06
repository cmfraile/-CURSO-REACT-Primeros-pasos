import { random } from "underscore";
import PropTypes from 'prop-types';

export const fragmentest = () => 
<>
    <h1>Esta mierda chucha</h1>
    <p>chucha gushi</p>
</>

interface tsfragmentif {title?:string,dado2?:number}
export const tsfragment = ({title='undefined',dado2}:tsfragmentif) => {

    console.log(title,dado2);

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