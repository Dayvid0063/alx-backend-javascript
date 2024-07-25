const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('./api');

chai.use(chaiHttp);

describe('Index page', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('should return status code 200 for /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return Welcome to the payment system for /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    chai.request(server)
      .get('/cart/12')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return Payment methods for cart 12 when :id is a number', (done) => {
    chai.request(server)
      .get('/cart/12')
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return status code 404 when :id is not a number', (done) => {
    chai.request(server)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return Not Found when :id is not a number', (done) => {
    chai.request(server)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res.text).to.equal('Not Found');
        done();
      });
  });
});

describe('Available Payments', () => {
  it('should return status code 200 for /available_payments', (done) => {
    chai.request(server)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return correct payment methods object for /available_payments', (done) => {
    chai.request(server)
      .get('/available_payments')
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login', () => {
  it('should return status code 200 for /login with valid userName', (done) => {
    chai.request(server)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return Welcome Betty for /login with userName Betty', (done) => {
    chai.request(server)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
