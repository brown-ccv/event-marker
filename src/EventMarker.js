const SerialPort = require('serialport');


const isPort = async (comName) => {
  const portList = await SerialPort.list()
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

const getPort = async (comName) => {
  const portList = await SerialPort.list()
  const device = portList.filter((device) => {
    return (device.comName === comName.toUpperCase() ||
            device.comName === comName);
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
