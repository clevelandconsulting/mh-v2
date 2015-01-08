angular.module('app').controller 'JobController', ['$scope', 'JobRepository', 'NotificationService',
 class JobController 
  constructor: (@scope, @jobRepo, @notifications) ->
   success = (data) =>
    @jobs = data
   error = (data) =>
    @notifications.error(data)
    
   @jobRepo.getAll().then success, error
  
]