const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const link = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${link}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${link}/cart/47`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${link}/cart/-47`, (err, res, _body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${link}/cart/d200-44a5-9de6`, (err, res, _body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${link}/login`, { json: { userName: 'Pinkbrook' } }, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${link}/available_payments`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
