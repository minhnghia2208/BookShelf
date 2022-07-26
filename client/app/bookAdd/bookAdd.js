'use strict';

angular.module('myApp.bookAdd', ['ngRoute', 'constant'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookadd', {
    templateUrl: 'bookAdd/bookAdd.html',
    controller: 'bookAddCtrl'
  });
}])

.controller('bookAddCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.add = function(book) {
    console.log(book);
  };
}]);