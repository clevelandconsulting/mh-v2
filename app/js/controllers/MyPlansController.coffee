angular.module('app').controller 'MyPlansController', ['$scope', '$location', 'PlansService', 'NotificationService',
 class MyPlansController 
  constructor: (@scope, @location, @plansService, @notifications) ->
   @cols = 3
   @rows = 3
   @foundationColsSm = 12
   @foundationColsLg = 12/@cols
   @foundationColsMd = 12/@cols
   
   @pagesize = @cols * @rows
   
   @loadPlans(@plansService.filter)
   #console.log 'loading MyPlansController'
   
  load_success: (data) =>
   @plans = data
   @recordDisplay = 'Plans ' + (@plans.skip + 1).toString() + ' through ' + (@plans.skip+@plans.fetchCount).toString() + ' of ' + @plans.foundSetCount.toString()
   
   @group_plans(@plans)
   #console.log 'finished loading plans'
   #console.log @plan_groups
  
  group_plans: (plans, filter) ->
   j = 0
   @plan_groups = []
   
   if filter?
    plans_for_groups = []
    for plan in plans.items
     if plan.status() == filter
      plans_for_groups.push(plan)
   else
    plans_for_groups = plans.items
    
   #console.log 'loading plans'
   for plan, i in plans_for_groups
    if i%@cols == 0 && i != 0
     j = j+1
    
    if !@plan_groups[j]?
     @plan_groups[j] = []
    
    @plan_groups[j].push(plan)
  
  load_error:(data) =>
   @notifications.error(data)
  
  setFilter: (filter) ->
   @plansService.filter = filter
   #@group_plans(@plans,filter)
   @loadPlans(filter)
  
  filterText: () ->
   if @plansService.filter? && @plansService.filter != ''
    @plansService.filter
   else
    'All'
  
  loadPlans: (status) ->
   @plans = null
   if !status? || status == '' || status == 'All'
    @plansService.getAll(@pagesize).then @load_success, @load_error
   else
    @plansService.getByStatus(status, @pagesize).then @load_success, @load_error
   
  getPlans: (href) ->
   @plansService.getByHref(href,@pagesize).then @load_success, @load_error
   
  clickPlan: (plan) ->
   @plansService.select(plan)
   @location.path('plan/'+plan.recordID)

]