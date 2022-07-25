'use strict';

angular.module('myApp.bookShelf', ['ngRoute', 'constant'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookshelf', {
    templateUrl: 'bookShelf/bookShelf.html',
    controller: 'BookShelfController'
  });
}])

.controller('BookShelfController', ['$scope', '$http', 'config', function ($scope, $http, config) {
  $scope.fetch = function () {
    $http.get(config.apiUrl + '/books')
    .then(function (response) { 
      $scope.books = response.data; 
    });
  };

  $scope.fetch();
}]);

