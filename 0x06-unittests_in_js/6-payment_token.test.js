/* eslint-disable jest/valid-expect */
import { describe, it } from 'mocha';
import { expect as _expect } from 'chai';
import getPaymentTokenFromAPI from './6-payment_token';

const { expect } = _expect;

describe('getPaymentTokenFromAPI', () => {
  it('async testing with done callback', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      });
  }));
});
