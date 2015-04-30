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
//  .controller('PlayCtrl', function ($scope, $firebaseObject, Settings, Tales, Game) {
//    var ref = new Firebase("https://brilliant-torch-4271.firebaseio.com/#-Jo8RDAkVOJayKVHVlvm|0179c7d2e633d2b9629287bb40f67107");
    
//    var syncObject = $firebaseObject(ref);
//    syncObject.$bindTo($scope, "data");
    
    $scope.settings = Settings;
    $scope.game = Game;
    $scope.tales = Tales;

  });
