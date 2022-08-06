import { random } from "underscore";

const heroes = [
    {id: 1,name: 'Batman',owner: 'DC'},
    {id: 2,name: 'Spiderman',owner: 'Marvel'},
    {id: 3,name: 'Superman',owner: 'DC'},
    {id: 4,name: 'Flash',owner: 'DC'},
    {id: 5,name: 'Wolverine',owner: 'Marvel'},
];

export const getHeroeById = ( id:number ) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner:string ) => heroes.filter( (heroe) => heroe.owner === owner );

export const asyncGHBI = async(id:number):Promise<any> => {
    return new Promise((rs,rj) => {
        setTimeout(() => {
            if(random(1,20) == 1){return rj('fallo en la consulta')};
            //if(true){return rj('fallo en la consulta')};
            const heroe = getHeroeById(id);
            if(heroe){return rs(heroe)}else{return rj('El ID aportado no apunta a ningun heroe')}
        },random(50,1000))
    })
}

/*
const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}
*/
