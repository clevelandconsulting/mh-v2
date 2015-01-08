angular.module('app').controller 'PlanController', ['$scope', 'PlanRepository', 'UserRepository', 'NotificationService', 'PlanStorageService',
 class PlanController 
  constructor: (@scope, @planRepo, @userRepo, @notifications, @planStorage) ->
   success = (data) =>
    @plans = data
    @planStorage.save(@plans.items)
    
   error = (data) =>
    @notifications.error(data)
   
   @planRepo.getPlans().then success, error
]