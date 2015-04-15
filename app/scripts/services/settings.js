'use strict';

/**
 * @ngdoc service
 * @name connectFourApp.settings
 * @description
 * # settings
 * Factory in the connectFourApp.
 */
angular.module('connectFourApp')
  .factory('Settings', function () {
    // Basic game setup
    var dimensions = [6,7]

    var export_ = {
      players: ["one", "two"],
      winnerCells: [[ [0,0], [0,1], [0,2], [0,3], [0,4] ]],
      ranges: function(){
        return [_.range(1,dimensions[0]+1).reverse(),_.range(1,dimensions[1]+1)]
      },
      // TODO: calculate array automatically from dimensions
      board: _.map([1,2,3,4,5,6,7],function(){return []}),
      fill: function(x){
        this.board[x-1].push("X");
        console.log(this.board);
      },
      resetBoard: function(){
        this.board = _.map([1,2,3,4,5,6,7],function(){return []});
      }
    };

    // Public API here
    return export_;
  });