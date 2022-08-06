import { render } from '@testing-library/react';
import { tsfragment as Tsf } from '../../src/componentes/fragment';
import React from 'react'

const main = () => {
    test('debe de hacer match de snapshot',() => {
        render(<Tsf/>)
    });
}

describe('Pruebas de <TSF>',main);