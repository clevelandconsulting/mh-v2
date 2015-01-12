angular.module('app').controller 'PlanController', ['$scope', '$routeParams', '$location', 'PlansService', 'NotificationService', 'PlanStorageService',
 class PlanController 
  constructor: (@scope, @routeParams, @location, @plansService, @notifications, @planStorage) ->
   #console.log 'loading PlanController'
   
   @details = [
    {
     'name':'Focus', 
     'message':'Narrow big picture problems into more manageable parts. Name the problem, identify issues and justify your plan to tackle this campaign.', 
     'property':'focus'
    },
    {
     'name':'Goals', 
     'message':'Goals should align to the campaign focus.', 
     'property':'goals'
    },
    {
     'name':'Target', 
     'message':'Who benefits from this campaign?', 
     'property':'target'
    },
    {
     'name':'Message', 
     'message':'Define the central idea or theme underlying all the marketing activities. Short compelling, declarative sentence that state just one benefit and addresses the target\'s problem/issue. should be unique, believable, and important, Use short, non-jargon language; adaptable to various media, conceptual statement but not necessarily copy.', 
     'property':'message'
    },
    {
     'name':'Key Indicators', 
     'message':'Quantifiable measures used to gage performance to meet campaign goals. What sequence of outcomes or changes will take your from the current environment to the vision of your campaign goal being realized? How will the outcomes of your campaign be measured? How long will it take for measureable results to be realized?', 
     'property':'key_indicators'
    },
    {
     'name':'Notes', 
     'message':'', 
     'property':'notes'
    }
    
   ]
   
   @plan = @plansService.getSelected()
   if !@plan?
    @plansService.getOne(@routeParams.id)
    .then (data) =>
     @plan = data
     console.log @plan, @plan.status()
    .catch (error) =>
     @notifications.error error, "Could Not Retrieve Plan"
     #@location.path('plan')
  
  save: (plan) ->
   @plansService.save(plan)
   .then (data) =>
    @notifications.success data, 'Updated!'
   .catch (error) =>
    @notifications.error error, 'Not Updated!'
    
  pretty: () ->
   JSON.stringify(@plan, undefined, 2)

]