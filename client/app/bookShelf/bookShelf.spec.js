'use strict';

describe('myApp.bookShelf module', function() {

  beforeEach(
    module('myApp.bookShelf'),
    module('constant')
    );

  var $scope, $controller, $httpBackend, config;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_, _config_){
    $scope = _$rootScope_.$new();
    config = _config_;
    $controller = _$controller_('BookShelfController', { $scope: $scope, config: config });
    $httpBackend = _$httpBackend_;
  }));

  describe('bookShelf controller', function(){

    describe('books object', function() {
      it('length 2', function() {
        var httpResponse = [
          { author: 'John Doe', title: 'Lorem Ipsum'},
          { author: 'Eric Widget', title: 'Dolor Sit'}
        ]
        console.log(config.apiUrl);
        $httpBackend.expectGET(config.apiUrl + "/books").respond(200, httpResponse);
        $httpBackend.flush();
        $scope.fetch();
        expect($scope.books.length).toBe(2);
      });
    });

  });
});