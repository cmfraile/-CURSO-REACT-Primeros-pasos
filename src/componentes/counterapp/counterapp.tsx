import { MouseEvent , useState } from 'react';
import './counterapp.sass';

interface counterif {contador:number};
export const counter = ({contador}:counterif) => {

    const [ contadorhook , setCounter ] = useState(contador)
    const handlevent = (event:MouseEvent) => {
        setCounter(contadorhook+1);
        //setCounter( (c) => c + 1 );
    };

    return(
        <div className='capp' >
            <h1>Counterapp</h1>
            <h2>{contadorhook}</h2>
            <button onClick={ handlevent }>+1</button>
        </div>
    )

    /*
    return(
        <>
            <h1>Counterapp</h1>
            <h2>{contador}</h2>
            <button onClick={ handlevent }></button>
        </>
    )
    */
    
}