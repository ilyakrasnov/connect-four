'use strict';

describe('Service: Tales', function () {

  // load the service's module
  beforeEach(module('connectFourApp'));

  // instantiate service
  var Tales;
  beforeEach(inject(function (_Tales_) {
    Tales = _Tales_;
  }));

  it('should do something', function () {
    expect(!!Tales).toBe(true);
  });

});
