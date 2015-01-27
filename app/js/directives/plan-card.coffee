angular.module('app').directive 'planCard',  () ->
 {
        restrict: 'E',
        scope: {
	        plan: '='
        },
        templateUrl: 'directive-templates/plan-card.html'
 }