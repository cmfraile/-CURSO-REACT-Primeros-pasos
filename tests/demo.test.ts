const main = () => {

    test('esta prueba no debe de fallar',() => {
        //Inicializacion
        //Estimulo
        //Observar el comportamiento... esperado.
        expect('Hola Mundo').toBe('Hola Mundo   '.trim());
    })

}

describe('Pruebas en <DemoComponent>',main)