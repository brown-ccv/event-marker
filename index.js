var SerialPort = require('serialport');


const deviceByComName = (portList, comName) => {
  const device = portList.filter((device) => {
    return (device.comName === comName.toUpperCase() ||
            device.comName === comName);
  })

  return device
}

const deviceByProductId = (portList, vendorId, productId) => {
  const device = portList.filter((device) => {
    return ((device.vendorId === vendorId.toUpperCase() ||
            device.vendorId === vendorId) && device.productId === productId);
  })

  return device
}

// dispatcher based on one argument to ids or two
const getDevice = (portList, comVendorName, productId) => {
  if (productId === undefined) {
    return deviceByComName(portList, comVendorName)
  } else {
    return deviceByProductId(portList, comVendorName, productId)
  }
}

const isPort = async (comVendorName, productId) => {
  let portList
  try {
    portList = await SerialPort.list()
  } catch {
    return false
  }
  const device = getDevice(portList, comVendorName, productId)
  if (device.length === 1) {
    return true
  }
  else {
    return false
  }
}

const getPort = async (comVendorName, productId) => {
  let portList
    try {
      portList = await SerialPort.list()
    } catch {
      return false
    }
  const device = getDevice(portList, comVendorName, productId)
  try {
    const path = device[0].comName;
    const port = new SerialPort(path)
    return port
  } catch {
    return false
  }
}

const sendToPort = async (port, event_code) => {
  port.then(p => p.write(Buffer.from([event_code])))
}

module.exports = {
  isPort,
  getPort,
  sendToPort
}
