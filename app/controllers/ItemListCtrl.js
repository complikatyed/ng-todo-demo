// Angular controllers are iifes

app.controller('ItemListCtrl', function($scope, $http){

  $scope.items = [];

  $http.get("https://groovytodoapp.firebaseio.com/items.json")
    .success(function(itemObject){

      var itemCollection = itemObject;

      // 'Object.keys(itemCollection)' <-- returns an array of the objects
      // 'forEach(key)' goes through every key in the array and stores the key
      Object.keys(itemCollection).forEach(function(key){

        // says give the object at that spot an id property AND
        // assign with the same value as the key itself...
        // (bcs that key is actually the object's external id, and we need it inside the array)
        itemCollection[key].id=key;

        // Push the items into the 'items' array, and give it the id from prev line
        $scope.items.push(itemCollection[key]);
      })


    });

});