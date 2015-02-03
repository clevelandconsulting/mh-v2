angular.module('app').directive 'selectList', ['utilities', (utilities) ->
  
 {
  restrict: 'E',
  require: 'ngModel',
  scope: { ngModel:"=", items: "=", groupBy: "@", toggle: '&' },
  replace: 'true',
  templateUrl: 'directive-templates/selectlist.html'
  controller: ($scope, utilities) ->
   #console.log $scope
   
   $scope.doIt = (item) ->
    #console.log 'perform', item
    $scope.toggle({product: item})
   #$scope.toggle = (index) ->
   # $scope.ngModel = utilities.toggle($scope.items,$scope.ngModel,index)

 }
 
]