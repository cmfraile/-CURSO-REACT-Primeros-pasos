import { fireEvent, render , screen } from '@testing-library/react';
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

    //Vamos a testear los eventos de click:

    test('debe de causar incremento [+1]',() => {
        render(<Capptarea contador={valorcon}/>);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByTestId('cid').innerHTML).toContain(`${valorcon+1}`);
    })

    test('debe de causar decremento [-1]',() => {
        render(<Capptarea contador={valorcon}/>);
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByTestId('cid').innerHTML).toContain(`${valorcon-1}`);
    })

    test(`debe de causar reset [${valorcon}]`,() => {
        render(<Capptarea contador={valorcon}/>);
        for(let i = 1 ; i <= 5 ; i++){fireEvent.click(screen.getByText('+1'))};

        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        
        expect(screen.getByTestId('cid').innerHTML).toContain(`${valorcon}`);
    })

}

describe('Pruebas en <capptarea>',main);