var SerialPort = require('serialport');


exports.isPort = async (vendorId, productId) => {
  let portList
  try {
    portList = await SerialPort.list()
  } catch {
    return false
  }
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

exports.getPort = async (vendorId, productId) => {
  let portList
  try {
    portList = await SerialPort.list()
  } catch {
    return false
  }
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId)  && device.productId === productId);
  })
  try {
    const path = device[0].path;
    const port = new SerialPort(path)
    return port
  } catch {
    return false
  }
}

exports.sendToPort = async (port, event_code) => {
  try {
    await port.write(Buffer.from([event_code]))
  } catch {
    throw "Couldn't write to port"
  }
}
