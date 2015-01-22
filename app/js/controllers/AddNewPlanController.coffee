angular.module('app').controller 'AddNewPlanController', ['$location', 'PlansService', 'NotificationService',

 class AddNewPlanController
  constructor: (@$location, @plansService, @notifications) -> 
	  fn = () =>
	   @plansService.add()
	   
	  success = (response) =>
    @plansService.select(response.data)
    @$location.path('plan/'+response.data.recordID)
	 
	  @notifications.delayed('add', 'plan', fn , success, null, 200) 
	 
]