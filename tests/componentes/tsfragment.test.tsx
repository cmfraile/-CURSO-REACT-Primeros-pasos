import { render } from '@testing-library/react';
import { tsfragment as Tsf } from '../../src/componentes/fragment';
import React from 'react'

const main = () => {

    /*
    test('debe de hacer match de snapshot',() => {
        const { container } = render(<Tsf title={'Goku'} />);
        //console.log(container);
        expect(container).toMatchSnapshot();
    });
    */

    test('debe de mostrar un título en el h1',() => {
        const title = 'Soy el supersayayin Goku';
        const { container , getByText , getByTestId } = render(<Tsf title={'Goku'}/>);
        expect(getByText(title)).toBeTruthy();
        
        const p = container.querySelector('p')?.innerHTML;
        expect(p).toContain(title);

        expect( getByTestId('testitle') ).toBeTruthy();
        expect( getByTestId('testitle').innerHTML ).toBe(title);
    })

    test('debe de enviar el titulo por props',() => {
        const title = 'Goku'
        const { getByText , getAllByText , container } = render(<Tsf title={title}/>);

        expect( getByText('Soy el supersayayin Goku') ).toBeTruthy();
        expect( getAllByText('Soy el supersayayin Goku').length ).toBe(1)
        //expect(container.querySelector('p')?.innerHTML).not.toContain('Goku')

    })
}

describe('Pruebas de <TSF>',main);