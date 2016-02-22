'use strict';

/**
 * @ngdoc function
 * @name myTodosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myTodosApp
 */
angular.module('myTodosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
