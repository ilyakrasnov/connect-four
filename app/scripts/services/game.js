'use strict';

/**
 * @ngdoc service
 * @name connectFourApp.Game
 * @description
 * # Game
 * Factory in the connectFourApp.
 */
angular.module('connectFourApp')
  .factory('Game', function () {
    // Service logic
    // ...
    var export_ = {
      fill: function(x){
        board[x].push("X");
        console.log(board);
      }
    };

    // Public API here
    return export_;
  });
