# Event Marker

JS utilities for Event Markers with serial ports


## Installation

The package can be installed via npm from github.

```
npm install https://github.com/brown-ccv/event-marker.git
```

## Usage

### isPort (async)

**Arguments:**
* vendorId - string - character string identifying the vendor
* productId - string - character string identifying the product
OR
* comName - string - character string identifying the com name


**Returns:**
* boolean - whether there is a port associated with the device

### getPort (async)

**Arguments:**
* vendorId - string - character string identifying the vendor
* productId - string - character string identifying the product
OR
* comName - string - character string identifying the com name

**Returns:**
* SerialPort - port object where device is connected

### sendToPort (async)

**Arguments:**
* port - SerialPort - port object where device is connected
* event_code - string - character string to be written to the port

**Returns:**
* nothing


## Future Work

Parallel Ports
