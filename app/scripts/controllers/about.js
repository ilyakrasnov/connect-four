'use strict';

/**
 * @ngdoc function
 * @name connectFourApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the connectFourApp
 */
angular.module('connectFourApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
