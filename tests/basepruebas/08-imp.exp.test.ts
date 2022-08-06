import { getHeroeById, getHeroesByOwner } from '../../src/basepruebas/08-imp-exp';

const main = () => {

    test('getheroebyID debe de regresar a batman',() => {
        const hero = getHeroeById(1);
        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});
    });
    test('getheroebyID debe de regresar undefined',() => {
        const hero = getHeroeById(10);
        expect(hero).toBeFalsy();
    });

    /*TAREA:
    Retornar el arreglo con los heroes de DC y de Marvel. Comprobar que el length es el que corresponde:
    */

    test('Heroes de DC',() => {
        const owner = 'DC'
        const dch = getHeroesByOwner(owner);
        expect(dch).toEqual(dch.filter((heroe) => heroe.owner === owner));
    })
    
    test('Heroes de Marvel',() => {
        const owner = 'Marvel'
        const mvh = getHeroesByOwner(owner).length;
        expect(mvh).toBe(2);
    })

}

describe('pruebas 08.imp.exp.ts',main)