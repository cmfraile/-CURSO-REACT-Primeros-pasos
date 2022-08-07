import { render } from '@testing-library/react';
import { tsfragment as Tsf } from '../../src/componentes/fragment';
import React from 'react'

const main = () => {

    test('debe de hacer match de snapshot',() => {
        const { container } = render(<Tsf title={'Goku'} />);
        //console.log(container);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar un título en el h1',() => {
        const title = 'Soy el supersayayin Goku';
        const { container , getByText } = render(<Tsf title={'Goku'}/>);
        const p = container.querySelector('p')?.innerHTML;

        expect(getByText(title)).toBeTruthy();
        expect(p).toContain(title);
    })
}

describe('Pruebas de <TSF>',main);