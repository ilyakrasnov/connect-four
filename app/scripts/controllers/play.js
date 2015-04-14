'use strict';

/**
 * @ngdoc function
 * @name connectFourApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the connectFourApp
 */
angular.module('connectFourApp')
  .controller('PlayCtrl', function ($scope, Settings, Tales, Game) {
    $scope.settings = Settings;
    $scope.game = Game;
    $scope.tales = Tales;

  });
