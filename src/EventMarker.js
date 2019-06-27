const SerialPort = require('serialport');


const isPort = async (vendorId, productId) => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId)  && device.productId === productId);
  })
  if (device.length === 1) {
    return true
  }
  else {
    return false
  }
}

const getPort = async (vendorId, productId) => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId)  && device.productId === productId);
  })
  try {
    const path = device[0].comName;
    const port = new SerialPort(path)
    return port
  } catch {
    return {}
  }
}

const sendToPort = async (port, event_code) => {
  port.then(p => p.write(Buffer.from([event_code])))
}

export {
  isPort,
  getPort,
  sendToPort
}
