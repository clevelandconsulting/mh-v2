angular.module('app').controller 'MyPlansController', ['$scope', '$location', 'PlansService', 'NotificationService',
 class MyPlansController 
  constructor: (@scope, @location, @plansService, @notifications) ->
   @cols = 3
   @foundationColsSm = 12
   @foundationColsLg = 12/@cols
   @foundationColsMd = 12/@cols
   
   @pagesize = @cols * 2
   
   @loadPlans(@plansService.filter)
   #console.log 'loading MyPlansController'
   
   
  load_success: (data) =>
   @plans = data
   @recordDisplay = 'Displaying plans ' + (@plans.skip + 1).toString() + ' through ' + (@plans.skip+@plans.fetchCount).toString() + ' of ' + @plans.foundSetCount.toString()
   
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
  
  setFilter: (filter) ->
   @plansService.filter = filter
   @loadPlans(filter)
  
  filterText: () ->
   if @plansService.filter? && @plansService.filter != ''
    @plansService.filter
   else
    'All'
  
  loadPlans: (status) ->
   if !status? || status == '' || status == 'All'
    @plansService.getAll(@pagesize).then @load_success, @load_error
   else
    @plansService.getByStatus(status, @pagesize).then @load_success, @load_error
   
  getPlans: (href) ->
   @plansService.getByHref(href,@pagesize).then @load_success, @load_error
   
  clickPlan: (plan) ->
   @plansService.select(plan)
   @location.path('plan/'+plan.recordID)
  
  addNew: () ->
   @plansService.add()
   .then (response) =>
    @plansService.select(response.data)
    @location.path('plan/'+response.data.recordID)

]