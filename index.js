var SerialPort = require('serialport');


exports.isPort = async (vendorId, productId) => {
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

exports.getPort = async (vendorId, productId) => {
  const portList = await SerialPort.list()
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
  await port.write(Buffer.from([event_code]), 'utf8', (err) => {
    if (err) throw err
  })
}
