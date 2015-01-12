angular.module('app').controller 'MyPlansController', ['$scope', '$location', 'PlansService', 'NotificationService', 'PlanStorageService',
 class MyPlansController 
  constructor: (@scope, @location, @plansService, @notifications, @planStorage) ->
   @cols = 3
   @foundationCols = 12/@cols
   @pagesize = @cols * 2
   @plansService.getAll(@pagesize).then @load_success, @load_error
   #console.log 'loading MyPlansController'
   
   
  load_success: (data) =>
   @plans = data
   
   j = 0
   @plan_groups = []
   #console.log 'loading plans'
   for plan, i in @plans.items
    if i%@cols == 0 && i != 0
     j = j+1
    
    if !@plan_groups[j]?
     @plan_groups[j] = []
    
    @plan_groups[j].push(plan)
   #console.log 'finished loading plans'
   #console.log @plan_groups
    
  load_error:(data) =>
   @notifications.error(data)
  
  getPlans: (href) ->
   @plansService.getByHref(href,@pagesize).then @load_success, @load_error
   
  clickPlan: (plan) ->
   #console.log plan
   @plansService.select(plan)
   @location.path('plan/'+plan.recordID)
   #@plansService.getOne(href)
]