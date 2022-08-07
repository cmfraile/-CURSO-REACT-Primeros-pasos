import { render } from '@testing-library/react';
import { tsfragment as Tsf } from '../../src/componentes/fragment';
import React from 'react'

const main = () => {
    test('debe de hacer match de snapshot',() => {
        const test = render(<Tsf title={'bulma'} />);
    });
}

describe('Pruebas de <TSF>',main);