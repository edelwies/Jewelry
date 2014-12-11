'use strict';

/**
 * @ngdoc function
 * @name jewelryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jewelryApp
 */
angular.module('jewelryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
