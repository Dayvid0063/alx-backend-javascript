const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calNum, con_LS;

    beforeEach(() => {
        calNum = sinon.stub(Utils, 'calculateNumber').returns(10);
        con_LS = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calNum.restore();
        con_LS.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(calNum.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(con_LS.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
