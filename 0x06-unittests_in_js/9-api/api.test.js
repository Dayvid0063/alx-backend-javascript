const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	link: "http://localhost:7865/",
	method: "GET"
    }
    it("status code", function(done) {
	request(options, function(res) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(res) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("correct link", function(done) {
	request.get("http://localhost:7865/cart/12", function(body) {
	    expect(body).to.contain("Payment methods for cart 12");
	    done();
	});
    });
    it("status code for wrong link", function(done) {
	request.get("http://localhost:7865/cart/kim", function(res) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});
