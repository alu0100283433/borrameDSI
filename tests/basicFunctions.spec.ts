import 'mocha';
import {expect} from 'chai';

import {add} from '../src/basicFuntions';

describe('Bloque test funcion "add"', () => {
  it('test add(3, 2) devuelve 5', () => {
    expect(add(3, 2)).to.be.equal(5);
  });
});
