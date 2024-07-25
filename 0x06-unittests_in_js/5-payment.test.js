const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let con_LS;

    beforeEach(() => {
        con_LS = sinon.spy(console, 'log');
    });

    afterEach(() => {
        con_LS.restore();
    });

    it('totalAmount = 100 and totalShipping = 20', () => {
        Utils.calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(120);
        
        sendPaymentRequestToApi(100, 20);

        expect(con_LS.calledOnceWithExactly('The total is: 120')).to.be.true;
        Utils.calculateNumber.restore();
    });

    it('totalAmount = 10 and totalShipping = 10', () => {
        Utils.calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(20);

        sendPaymentRequestToApi(10, 10);

        expect(con_LS.calledOnceWithExactly('The total is: 20')).to.be.true;
        Utils.calculateNumber.restore();
    });
});
