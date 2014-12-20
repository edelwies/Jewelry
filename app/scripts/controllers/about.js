'use strict';

/**
 * @ngdoc function
 * @name jewelryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jewelryApp
 */
angular.module('jewelryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma', 'Another thing'
    ];
  });
