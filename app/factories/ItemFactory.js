"use strict";

app.factory("itemStorage", function($q, $http, firebaseURL) {

  var getItemList = function() {
    let items = [];

    return $q(function(resolve, reject) {
      $http
        .get(firebaseURL + "items.json")
        .success(function(itemObject){
          var itemCollection = itemObject;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            items.push(itemCollection[key]);
        });
        resolve(items);
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  var deleteItem = function(itemId){
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL + "items/" + itemId + ".json")
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        })
        .error(function(error){
          reject(error);
      });
    });
  };

  var postNewItem = function(newItem){
    return $q(function(resolve, reject) {
      $http
        .post(firebaseURL + "items.json",
          JSON.stringify({
            assignedTo: newItem.assignedTo,
            dependencies: newItem.dependencies,
            dueDate: newItem.dueDate,
            isCompleted: newItem.isCompleted,
            location: newItem.location,
            task: newItem.task,
            urgency: newItem.urgency
          }))
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  var getSingleItem = function(itemId){
    return $q(function(resolve, reject) {
      $http
        .get(firebaseURL + "items/" + itemId + ".json")
        .success(function(itemObject){
          resolve(itemObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  };


  var updateItem = function(itemId, newItem){
    return $q(function(resolve, reject) {
      $http
        .put(firebaseURL + "items/" + itemId + ".json",
          JSON.stringify({
            assignedTo: newItem.assignedTo,
            dependencies: newItem.dependencies,
            dueDate: newItem.dueDate,
            isCompleted: newItem.isCompleted,
            location: newItem.location,
            task: newItem.task,
            urgency: newItem.urgency
          }))
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };


  return {getSingleItem:getSingleItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem, updateItem:updateItem};

});