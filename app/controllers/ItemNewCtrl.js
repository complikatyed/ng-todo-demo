"use strict";

app.controller('ItemNewCtrl', function($scope, $location, itemStorage){

  $scope.title = "New Task";
  $scope.submitButtonText = "Add New Task";

  $scope.newTask = {    // We need to add these blanks in case the user skips a field
    assignedTo: "",   // (because any skipped properties will get dropped otherwise)
    dependencies: "", // (and we want all of the data to have the same structure)
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };

  $scope.addNewItem = function(){
    itemStorage.postNewItem($scope.newTask)
      .then(function successCallback(response) {
        $location.url("/items/list");
      });
  };

});

