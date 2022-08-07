import { render , screen } from '@testing-library/react';
import { tsfragment as Tsf } from '../../src/componentes/fragment';
import React from 'react'

const main = () => {

    const title = 'Soy el supersayayin Goku'

    test('debe de hacer match con el snapshot',() => {
        expect(render(<Tsf title={'Goku'}/>).container).toMatchSnapshot();
    });

    test(`debe de mostrar el titulo [${title}]`,() => {
        render(<Tsf title={'Goku'}/>);
        expect(screen.getByText(title) ).toBeTruthy();
    });

    test('debe de situar el titulo en el <p>',() => {
        render(<Tsf title={'Goku'}/>);
        expect(screen.getByTestId('testitle').innerHTML).toContain(title);

        //Si estuviera en el H1:
        //expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('Debe de venir el titulo por props',() => {
        render(<Tsf title={'Goku'}/>);
        expect(screen.getAllByText(title).length).toBe(1);
    })

}

describe('Pruebas de <TSF>',main);