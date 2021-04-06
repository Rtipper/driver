'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000'
const caps = io.connect(host)

caps.on('pickupReady', itemPickup);
caps.on('messageSent', notification)

function itemPickup(payload) {
  console.log(`PACKAGE FOR ${payload.customerName} READY FOR PICKUP`)
  setTimeout(() => {
    caps.emit('in-transit', payload)
  }, 1000)
}

function notification(payload) {
  caps.emit('delievered', payload)
}

module.exports = {
  itemPickup: itemPickup,
}