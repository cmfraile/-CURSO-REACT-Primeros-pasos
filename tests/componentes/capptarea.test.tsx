import { render , screen } from '@testing-library/react';
import { counter as Capptarea } from '../../src/componentes/counterapptarea/counterapp';
import React from 'react';


const main = () => {

    const valorcon:number = 100

    test('Debe de hacer match con el snapshot',() => {
        expect(render(<Capptarea contador={valorcon}/>).container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 y mandarse por props',() => {
        render(<Capptarea contador={valorcon}/>);
        expect(screen.getByTestId('cid').innerHTML).toContain(`${valorcon}`)
    });
    
}

describe('Pruebas en <capptarea>',main);