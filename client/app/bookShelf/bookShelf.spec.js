'use strict';

describe('myApp.bookShelf module', function() {

  beforeEach(module('myApp.bookShelf'));

  var $scope, $controller, $httpBackend;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_){
    $scope = _$rootScope_.$new();
    $controller = _$controller_('BookShelfController', { $scope: $scope });
    $httpBackend = _$httpBackend_;
  }));

  describe('bookShelf controller', function(){

    describe('books object', function() {
      it('length 2', function() {
        var httpResponse = [
          { author: 'John Doe', title: 'Lorem Ipsum'},
          { author: 'Eric Widget', title: 'Dolor Sit'}
        ]
        $httpBackend.expectGET("http://localhost:3000/books").respond(200, httpResponse);
        $httpBackend.flush();
        $scope.fetch();
        expect($scope.books.length).toBe(2);
      });
    });

  });
});