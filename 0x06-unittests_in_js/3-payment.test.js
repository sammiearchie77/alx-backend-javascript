/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
import { describe, it } from 'mocha';
import { spy as _spy } from 'sinon';
import assert from 'assert';
import Utils from './utils';
import sendPaymentRequestToApi from './3-payment';

describe('sendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber was called once', () => {
    const spy = _spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(50, 24.52);
    assert(spy.calledOnce);
    spy.restore();
  });
});
