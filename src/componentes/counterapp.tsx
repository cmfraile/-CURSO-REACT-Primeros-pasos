interface counterif {contador:number};
export const counter = ({contador}:counterif) => {

    return(
        <>
            <h1>Counterapp</h1>
            <h2>{contador}</h2>
        </>
    )
    
}