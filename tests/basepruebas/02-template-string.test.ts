import { getSaludo } from '../../src/basepruebas/02-template-string';

const main = () => {
    test('get saludo blablabla',() => {
        const name = 'Torto';
        const msg = getSaludo(name);
        expect(msg).toBe('Hola Torto');
    });
}

describe('Pruebas en 02-template.string.js',main);