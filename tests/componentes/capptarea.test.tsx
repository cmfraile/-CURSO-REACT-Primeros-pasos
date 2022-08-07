import { render , screen } from '@testing-library/react';
import { counter as Capptarea } from '../../src/componentes/counterapptarea/counterapp';
import React from 'react';


const main = () => {

    test('Debe de hacer match con el snapshot',() => {
        expect(render(<Capptarea contador={100}/>).container).toMatchSnapshot();
    });

    /*
    test('debe de mostrar el valor inicial de 100 y mandarse por props',() => {
        render(<Capptarea contador={100}/>);
        //expect( getByText('100') )
    })
    */
}

describe('Pruebas en <capptarea>',main);