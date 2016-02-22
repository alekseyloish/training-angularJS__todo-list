'use strict';

/**
 * @ngdoc function
 * @name myTodosApp.controller:Todos
 * @description
 * # Todos
 * Controller of the myTodosApp
 */
angular.module('myTodosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
});
