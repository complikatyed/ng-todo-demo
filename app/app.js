var app = angular.module('TodoApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/items/list', {
      templateUrl:'partials/item-list.html',
      controller: 'ItemListCtrl'
    }).
    when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    }).
    when('/items/:itemId', {  //  <-- the colon tells Angular that something will get filled in there
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl'
    }).
    otherwise('/items/list');
}
);

// add Angular Route: 'bower install angular-route --save'