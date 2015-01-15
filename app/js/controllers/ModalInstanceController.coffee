angular.module('app').controller 'ModalInstanceController', ['$scope', '$modalInstance', 'item', 
 class modalInstanceController
  constructor: ($scope, $modalInstance, item) ->
	  $scope.item = item

	  $scope.ok =  () ->
	    $modalInstance.close $scope.item
	
	  $scope.cancel = () ->
	    $modalInstance.dismiss 'cancel'
]