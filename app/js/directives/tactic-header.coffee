angular.module('app').directive 'tacticHeader',  ($compile) ->
 {
        restrict: 'A',
        scope: {
	        oList: '=',
	        key: '@',
	        title: '@'
        },
        replace: true,
        templateUrl: 'directive-templates/tactic-header.html',
        controller: ($scope) ->
         $scope.sort = (oList, key) ->
							   if oList?
							    if oList.sortKey == key
								    oList.sortReverse = !oList.sortReverse
								   else
								    oList.sortKey = key
								    oList.sortReverse = oList.sortReverse
							    
							    oList.sort()
							 # ,
# 							 compile: ($templateElement, $templateAttributes) ->
# 							  console.log $templateElement, $templateAttributes, @template
#          $templateElement.replaceWith(@template);
# 
#          ($scope, $element, $attrs) ->
#           # play with the $scope here, if you need too.
#           console.log $scope, $element, $attrs
      
 }