import { getImagen } from '../../src/basepruebas/11-async-await';

const main = () => {
    test('test en 11.async-await [then]',async() => {
        await getImagen().then(resp => {expect(resp).toBeTruthy()});
    });
    test('test en 11.async-await [catch]',async() => {
        await getImagen().catch(resp => {expect(resp).toBeFalsy()});
    });
}

describe('pruebas 11-async.await',main);