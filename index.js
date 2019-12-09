var SerialPort = require('serialport');


exports.isPort = async (comName) => {
  let portList
  try {
    portList = await SerialPort.list()
  } catch {
    return false
  }
  const device = portList.filter((device) => {
    return (device.comName === comName.toUpperCase() ||
            device.comName === comName);
  })
  if (device.length === 1) {
    return true
  }
  else {
    return false
  }
}

exports.getPort = async (comName) => {
  let portList
  try {
    portList = await SerialPort.list()
  } catch {
    return false
  }
  const device = portList.filter((device) => {
    return (device.comName === comName.toUpperCase() ||
            device.comName === comName);
  })
  try {
    const path = device[0].comName;
    const port = new SerialPort(path)
    return port
  } catch {
    return false
  }
}

exports.sendToPort = async (port, event_code) => {
  try {
    await port.write(Buffer.from([event_code]))
  } catch (error) {
    throw Error(error)
  }
}
