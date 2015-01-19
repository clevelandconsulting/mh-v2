angular.module('app').controller 'ModalInstanceController', ['$scope', '$modalInstance', 'item', 'undo'
 class modalInstanceController
  constructor: ($scope, $modalInstance, item, undo) ->
	  $scope.item = item
	  $scope.undo = undo

	  $scope.ok =  () ->
	    $modalInstance.close $scope.item
	
	  $scope.cancel = () ->
	    $modalInstance.dismiss 'cancel'
]