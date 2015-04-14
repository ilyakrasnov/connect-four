'use strict';

/**
 * @ngdoc service
 * @name connectFourApp.Game
 * @description
 * # Game
 * Factory in the connectFourApp.
 */
angular.module('connectFourApp')
  .factory('Game', function (Settings) {
    // Service logic
    // ...

    var export_ = {

      fill: function(x, player){
        var board = Settings.board;
        if (board[x-1].length < 6) {
          board[x-1].push(player);
        }
      },
      moves: function(){
        return _.flatten(Settings.board).length;
      },
      player: function(){
        return Settings.players[this.moves()%2];
      },
      checkWin: function(){
        var board = Settings.board;
        console.log(board);
        console.log(board[0][0] != "" &&
                board[0][0] == board[0][1] &&
                board[0][1] == board[0][2] &&
                board[0][2] == board[0][3])
      }
    };

    // Public API here
    return export_;
  });
