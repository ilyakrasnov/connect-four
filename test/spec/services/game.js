'use strict';

describe('Service: Game', function () {
  console.log("Testing"):
  // load the service's module
  beforeEach(module('connectFourApp'));

  // instantiate service
  var _Game;
  beforeEach(inject(function (Game) {
    _Game = Game;
  }));

  it('should do something', function () {
    expect(!!_Game).toBe(true);
  });

  it('should return the diagonals', function () {
    console.log("Testing game");
    console.log(_Game.calc_diags());
    // expect(!!Game).toBe(true);
  });

});
