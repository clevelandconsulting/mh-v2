angular.module('app').controller 'MyPlansController', ['$scope', '$location', 'PlanListService', 'NotificationService',
 class MyPlansController 
  constructor: (@scope, @location, @planListService, @notifications) ->
   @cols = 3
   @rows = 3
   @foundationColsSm = 12
   @foundationColsLg = 12/@cols
   @foundationColsMd = 12/@cols
   
   @pagesize = @cols * @rows
   
   #load in the years
   currentYear = new Date().getFullYear()
   @years = []
   for i in [2015..(currentYear+1)]
    @years.push i 
    
   #load the year active through the list service
   year = @planListService.year
   if !year?
    year = currentYear
    
   @scope.year = year
   
   
   @scope.$watch 'year', (newVal,oldVal) =>
    #store the list so we come back to it
    @planListService.year = newVal
    #load the plans for the year
    @loadPlans(@planListService.filter)
   
   
  load_success: (data) =>
   @plans = data
   #console.log @plans
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
   @planListService.filter = filter
   #@group_plans(@plans,filter)
   @loadPlans(filter)
  
  filterText: () ->
   if @planListService.filter? && @planListService.filter != ''
    @planListService.filter
   else
    'All'
  
  loadPlans: (status) ->
   @plans = null
   if !status? || status == '' || status == 'All'
    @planListService.getByYear(@scope.year, '', @pagesize).then @load_success, @load_error
   else
    @planListService.getByYear(@scope.year, status, @pagesize).then @load_success, @load_error
   
  getPlans: (href) ->
   @planListService.getByHref(href,@pagesize).then @load_success, @load_error
   
  clickPlan: (plan) ->
   #@planListService.select(plan)
   @location.path('plan/'+plan.recordID)

]