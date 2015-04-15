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
    var board = Settings.board;

    var checkLine = function(line) {
      var streak = 0;
      var current = "";
      var win = false;

      _.each(line, function(el){
         if (el != undefined && el == current) {
             streak +=1;
         } else {
             current = el;
             streak = 1;
         }
         if (streak == 4) win = true;
       });
      return win;
    }

    var checkAll = function(){
      var transposedBoard_for_rows = _.zip.apply(null,board);
      var diagonals = [];
      var combinations = [board, transposedBoard_for_rows, diagonals];

      // Is there any line set (row, cols, diagonals) that return true
      if (_.find(
        combinations, function(board){
          // Is there any line that returns true
            if (_.find(board, function(line){ return checkLine(line) }) != undefined) return true;
        }) != undefined) return true;
    }

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
        console.log(checkAll());
      }
    }

    // Public API here
    return export_;
  });
