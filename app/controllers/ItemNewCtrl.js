app.controller('ItemNewCtrl', function($scope, $http, $location){
  // $scope =
  // $http = allows us to do ajax-y kinds of things
  // $location = allows us to do re-directs

  $scope.newTask = {    // We need to add these blanks in case the user skips a field
    "assignedTo": "",   // (because any skipped properties will get dropped otherwise)
    "dependencies": "", // (and we want all of the data to have the same structure)
    "dueDate": "",
    "isCompleted": false,
    "location": "",
    "task": "",
    "urgency": ""
  };

  $scope.addNewItem = function() {
    $http.post(
      "https://groovytodoapp.firebaseio.com/items.json",
      JSON.stringify({
        assignedTo: $scope.newTask.assignedTo,
        dependencies: $scope.newTask.dependencies,
        dueDate: $scope.newTask.dueDate,
        isCompleted: $scope.newTask.isCompleted,
        location: $scope.newTask.location,
        task: $scope.newTask.task,
        urgency: $scope.newTask.urgency
      })
    )
    .success(function(response) {  // <-- 'response' here = new object that was created
      console.log("New item has key of:", response.name);  // <-- response.name = "object.name" (or the new uuid in Firebase)
      $location.url("/items/list");  // <-- url has to be a route that exists
    });

  };

});