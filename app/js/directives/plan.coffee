angular.module('app').directive 'plan',  () ->
 {
        restrict: 'E',
        scope: {
	        plan: '=',
        }
        template: '<div>{{plan.data.campaign_title}}</div>',
        controller: ($scope) =>
         console.log $scope
 }