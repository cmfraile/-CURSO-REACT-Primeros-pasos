import { retornaArreglo } from '../../src/basepruebas/07-deses-arr';

const main = () => {
    test('debe de retornar [string,number]',() => {
        const [letters,numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof(letters)).toBe('string');
        expect(typeof(numbers)).toBe('number');

        expect(letters).toEqual(expect.any(String));

    });
}

describe('Pruebas en 07-deses.arr.ts',main);