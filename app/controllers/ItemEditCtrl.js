"use strict";

app.controller('ItemEditCtrl', function($scope, $location, $routeParams, itemStorage){
  $scope.title = "Edit Task";
  $scope.submitButtonText = "Update Task";

  $scope.newTask = {};

  itemStorage.getSingleItem($routeParams.itemId)
    .then(function successCallback(response) {
      $scope.newTask=response;
    });


  $scope.addNewItem = function(){
    itemStorage.updateItem($routeParams.itemId, $scope.newTask)
      .then(function successCallback(response) {
        $location.url("/items/list");
      });
  };

});

