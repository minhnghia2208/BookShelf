'use strict';

angular.module('myApp.bookShelf', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookshelf', {
    templateUrl: 'bookShelf/bookShelf.html',
    controller: 'BookShelfController'
  });
}])

.controller('BookShelfController', ['$scope', '$http', function ($scope, $http) {
  $scope.fetch = function () {
    $http.get('http://localhost:3000/books')
    .then(function (response) { 
      $scope.books = response.data; 
    });
  };

  $scope.fetch();
}]);

