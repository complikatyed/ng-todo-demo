app.controller('ItemListCtrl', function($scope, $http, $location, itemStorage){

  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    $scope.items = itemCollection;
  })

  $scope.itemDelete = function(itemId) {
    $http
      .delete(`https://groovytodoapp.firebaseio.com/items/${itemId}.json`)
      .success(function(response){
        $scope.items = []; // <-- have to re-set the array to avoid duplication of data
        getItems();
      });
  };


});