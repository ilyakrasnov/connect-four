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
      var diagonals = calc_diags();
      var combinations = [board, transposedBoard_for_rows, diagonals];

      // Is there any line set (row, cols, diagonals) that return true
      if (_.find(
        combinations, function(board){
          // Is there any line that returns true
            if (_.find(board, checkLine)) return true;
        }) != undefined) return true;
    }

    var calc_diags = function(){
        var diags1 = [];
        var diags2 = [];

        // Helper to get the longest column for proper iteration
        var lengths = _.map(board, function(col){return _.compact(col).length});
        var n = board[_.indexOf(lengths, _.max(lengths))].length;

        var m = board.length

        // Top left -> right down diags
        for (var slice = 0; slice < (m+n-1); slice++){
            var z1 = slice < n ? 0 : slice - n + 1;
            var z2 = slice < m ? 0 : slice - m + 1;
            diags1.push([])
            for (var j = slice - z2; j >= z1; --j) {
                    diags1[slice].push(board[j][slice - j]);
            }
        }

        // Down left -> top right diags
        for (var slice = 0; slice < (m+n-1); slice++){
            var z1 = slice < n ? 0 : slice - n + 1;
            var z2 = slice < m ? 0 : slice - m + 1;
            diags2.push([])
            for (var j = slice - z2; j >= z1; --j) {
                    diags2[slice].push(board[m-j-1][slice - j]);
            }
        }
        return diags1.concat(diags2);
    }


    var export_ = {

      fill: function(x, player){
        if (!this.checkWin() && board[x-1].length < 6) {
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
        return checkAll();
      },
      playAgain: function(){
        Settings.resetBoard();
      }

    }

    // Public API here
    return export_;
  });
