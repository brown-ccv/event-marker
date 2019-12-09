var should = require('chai').should();
var eventmarker = require('../index.js');

const comName = 'com7';

describe("Ports", () => {

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
});
