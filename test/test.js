var should = require('chai').should();
var eventmarker = require('../index.js');

const manufacturer = 'Teensyduino';
const vendorId = '16c0';
const productId = '0483';

describe("Ports", () => {

  // let port = await eventmarker.getPort(manufacturer, vendorId, productId)
  // let hasPort = await eventmarker.isPort(manufacturer, vendorId, productId)

  it("If no port, is port is empty", (done) => {
    eventmarker.getPort(manufacturer, vendorId, productId)
      .then((res) => {
        res.should.be.empty
        done()
      })
  });

  it("If no port, has no port", (done) => {
    eventmarker.isPort(manufacturer, vendorId, productId)
      .then((res) => {
        res.should.be.false
        done()
      })
  })
});
