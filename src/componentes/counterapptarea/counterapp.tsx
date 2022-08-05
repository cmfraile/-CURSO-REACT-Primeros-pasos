import { useState } from 'react';
import './counterapp.sass';

interface counterif {contador:number};
export const counter = ({contador}:counterif) => {

    const [ contadorhook , setCounter ] = useState(contador)
    const sc = (arg:string) => {
        switch(arg){
            case '+': setCounter(contadorhook+1);break;
            case '-': setCounter(contadorhook-1);break;
            case 'R': setCounter(contador);break;
        }
    };

    
    return(
        <div className='capp'>
            <h1>Counterapp</h1>
            <h2>{contadorhook}</h2>
            <button onClick={ () => {sc('+')} }>+1</button>
            <button onClick={ () => {sc('-')} }>-1</button>
            <button onClick={ () => {sc('R')} }>Reset</button>
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