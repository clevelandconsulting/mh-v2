angular.module('app').controller 'AddNewPlanController', ['$location', 'PlanListService', 'NotificationService',

 class AddNewPlanController
  constructor: (@$location, @planListService, @notifications) -> 
	  fn = () =>
	   @planListService.add()
	   
	  success = (response) =>
    #@planListService.select(response.data)
    @$location.path('plan/'+response.data.recordID)
	 
	  @notifications.delayed('add', 'plan', fn , success, null, 200) 
	 
]