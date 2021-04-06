'use strict';

const driver = require('../driver.js');

describe('Test for Vendor', () => {
  let consoleSpy;
  let payload = {orderId: 123};

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers()
  });

  afterEach(() => {
    consoleSpy.mockRestore()
    jest.useRealTimers()
  })

  it('function "itemPickup" properly logs an output into the system', () => {
    driver.itemPickup(payload)
    jest.advanceTimersByTime(1000)
    expect(consoleSpy).toHaveBeenCalled();
  })
})