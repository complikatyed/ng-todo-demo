app.controller('TodoCtrl', function($scope){
  $scope.welcome = 'hello';
  $scope.showListView = true;
  $scope.newTask = {};

  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/1/17",
      assignedTo: "greg",
      location: "Zoe's house",
      urgency: "low",
      dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "5/22/16",
      assignedTo: "Joe",
      location: "NSS",
      urgency: "high",
      dependencies: "wifi, tissues, vodka"
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "5/21/16",
      assignedTo: "Zoe",
      location: "Zoe's house",
      urgency: "medium",
      dependencies: "hammock, cat, pillow"
    }
  ];

  $scope.newItem = function() {
    console.log("You clicked new item");
    $scope.showListView = false;
  };
  $scope.allItem = function() {
    console.log("You clicked all items");
    $scope.showListView = true;
  };
  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    console.log($scope.items);
    $scope.newTask = '';
  };

});