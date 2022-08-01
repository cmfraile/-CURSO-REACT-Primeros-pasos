import { random } from "underscore"

export const fragmentest = () => 
<>
    <h1>Esta mierda chucha</h1>
    <p>chucha gushi</p>
</>

export const tsfragment = () => {

    const var1 = {
        nombre: 'goku',
        rango: 2,
        dado : random(1,10)
    }
    
    return (
        <>
        <h1>fragmento</h1>
        <p>Soy el supersayayin { var1.nombre }</p>
        <code>{ JSON.stringify(var1) }</code>
        </>
    )
}