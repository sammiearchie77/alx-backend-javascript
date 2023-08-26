/* eslint-disable jest/no-identical-title */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-hooks */
import { describe, it } from 'mocha';
import { spy } from 'sinon';
import { expect as _expect } from 'chai';
import sendPaymentRequestToApi from './5-payment';

const { expect } = _expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach('Set up spy to use for each test', () => {
    spy(console, 'log');
  });

  afterEach('restore spy after each test', () => {
    console.log.restore();
  });

  it('check that console.log is called with the right arg', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('check that console.log is called with the right arg', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
