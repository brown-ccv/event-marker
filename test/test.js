var should = require('chai').should();
var eventmarker = require('../index.js');

const comName = 'com7';
const vendorId = 'teensyduino'
const productId = '1203'

describe("Ports", () => {

  describe("with com name only", () => {
    it("If no port, is port is empty", (done) => {
      eventmarker.getPort(comName)
        .then((res) => {
          res.should.be.empty
          done()
        })
    });

    it("If no port, has no port", (done) => {
      eventmarker.isPort(comName)
        .then((res) => {
          res.should.be.false
          done()
        })
    })
  })

  describe("with vendor and product ids", () => {
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
  })
});
