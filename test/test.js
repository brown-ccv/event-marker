var should = require('chai').should();
var eventmarker = require('../index.js');

const vendorId = '16c0';
const productId = '0483';

describe("Ports", () => {

  it("If no port, is port is empty", (done) => {
    eventmarker.getPort(vendorId, productId)
      .then((res) => {
        res.should.be.empty
        done()
      })
  });

  it("If no port, has no port", (done) => {
    eventmarker.isPort(vendorId, productId)
      .then((res) => {
        res.should.be.false
        done()
      })
  })
});
