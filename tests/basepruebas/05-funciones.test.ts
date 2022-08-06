import * as fc from '../../src/basepruebas/05-funciones';

const main = () => {
    test('GetUser debe retornar un objeto',() => {
        const testUser = {uid: 'ABC123',username: 'El_Papi1502'};
        //expect(testUser).toEqual(fc.getUser());
        expect(testUser).toStrictEqual(fc.getUser());

    });
    test('getUsuarioActivo debe de retornar un objeto',() => {
        const name = 'Torto';
        const obj1 = fc.getUsuarioActivo(name);
        expect(obj1).toStrictEqual({uid:'ABC567',username:name});
    });
}

describe('Pruebas en 05-funciones.ts',main);