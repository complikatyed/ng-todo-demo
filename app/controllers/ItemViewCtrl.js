app.controller("ItemViewCtrl", function($scope, $http, $routeParams, itemStorage){
  $scope.items = [];
  $scope.selectedItem = {};

  itemStorage.getItemList().then(function(itemCollection){
    $scope.items = itemCollection;

    $scope.selectedItem = $scope.items.filter(function(item){
  return item.id === $routeParams.itemId;
  })[0];
  });
});