angular.module('app').controller 'CampaignController', ['$scope', 'CampaignRepository', 'NotificationService',
 class CampaignController 
  constructor: (@scope, @campaignRepo, @notifications) ->
   success = (data) =>
    @campaigns = data
   error = (data) =>
    @notifications.error(data)
    
   @campaignRepo.getAll().then success, error
  
]