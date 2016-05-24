app.controller('ItemListCtrl', function($scope, $http, $location, itemStorage){

  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    $scope.items = itemCollection;
  });

  $scope.itemDelete = function(itemId) {
    itemStorage.deleteItem(itemId).then(function(response) {
      itemStorage.getItemList().then(function(itemCollection) {
        $scope.items = itemCollection;
      });
    });
  };

});
