app.controller('ItemViewCtrl', function($scope, $http, $routeParams){
  $scope.items = [];
  $scope.selectedItem = {};

  console.log($routeParams.itemId);

  $http.get("https://groovytodoapp.firebaseio.com/items.json")
    .success(function(itemObject){
      var itemCollection = itemObject;
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id=key;
        $scope.items.push(itemCollection[key]);

        $scope.selectedItem = $scope.items.filter(function(item) { // <-- .filter is an array method that returns an array
          // next line says:  "when item.id is same as $routeParams.itemId, give me that item"
          return item.id === $routeParams.itemId;
        })[0];  // because of the unique ids, there will only ever be one item in the array, so we ask for just that one item
      });
  });



});