angular.module('app').service 'PlansService', ['$q', 'PlanRepository', 'StrategyRepository', 'TacticRepository', 'PlanStorageService', 
 class PlansService
  constructor: (@q, @PlanRepository, @StrategyRepository, @TacticRepository, @PlanStorageService) ->
   @blocked = {}
   @requirements_on = true
   @filter = ''
   
  getSelected: () ->
   @selectedPlan
  
  
  getFromServer: (id) ->
   @PlanRepository.getByRecordId(id)
    .then (data) =>
     if data != null
      @PlanStorageService.clearById(id)
      @select(data)
     return data
    .catch (error) ->
     if error.code?
      if error.code == 101
       message = 'Record does not exist'
      else
       message = 'Error ' + error.code + ': ' + error.reason
     else
      message = error
     #console.log 'rejecting PlansService.getOne() promise', id
     return message
     
  getOne: (id) ->
   deferred = @q.defer()
   
   stored = @PlanStorageService.getById(id)
   if stored == null
    @getFromServer(id)
    .then (data) =>
     if data == null
      deferred.reject 'You do not have access to this record.'
     else
      deferred.resolve data
    .catch (error) ->
     deferred.reject error
   else
    deferred.resolve stored
     
   deferred.promise
  
  allow_requirements: (allow) ->
   @requirements_on = allow
   
  block_requirement: (name) ->
   @blocked[name] = true
  
  unblock_requirement: (name) ->
   @blocked[name] = false 
   
  requirements: (name) ->
   if @blocked[name] || !@requirements_on
    return false
   else
    @PlanRepository.model.submission_requirements[name]
  
  getByStatus: (status, pagesize) ->
   @PlanRepository.getByStatus(status,pagesize)
  
  getAll: (pagesize) ->
   @PlanRepository.getPlans(pagesize)
   
  getByHref: (href, pagesize) ->
   @PlanRepository.getPage(href,pagesize)
  
  
  loadTactics: (strategy) ->
   #console.log 'loading tactics', strategy
   @TacticRepository.getAllForStrategy(strategy.data.__guid).then (data) =>
    #console.log 'found tactics', data
    if data?	    
	    for item in data.items
	     strategy.addTactic(item)
    return strategy
  
  loadStrategies: (plan) ->
   #console.log 'loading strategies', plan
   deferred = @q.defer()
   @StrategyRepository.getAllForPlan(plan.data.__guid)
   .then (strategies) => 
    #console.log 'found strategies', strategies
    if strategies?
	    loaded = 0
	    for strategy in strategies.items
	     @loadTactics(strategy)
	     .then (strategy) =>
	      plan.addStrategy(strategy)
	      loaded = loaded+1
	      if loaded == strategies.items.length
	       deferred.resolve plan
	     .catch (error) =>
	      deferred.reject error
	   else
	    deferred.resolve plan
   .catch (error) =>
    deferred.reject error
    
   deferred.promise
  
  select: (plan) ->
   stored = @PlanStorageService.getById(plan.recordID)
   if stored?
    @selectedPlan = stored
   else
    @selectedPlan = plan
 
   #console.log 'l', @selectedPlan.strategies.length
   if @selectedPlan.strategies.length == 0
	   @loadStrategies(@selectedPlan).then (plan) =>
	    @PlanStorageService.saveById(@selectedPlan.recordID, plan)
	  else
	   @PlanStorageService.saveById(@selectedPlan.recordID, plan)
  
  add: () ->
   @PlanRepository.add({campaign_title: 'Untitled'})
  
  delete: (plan) ->
   @PlanRepository.delete(plan.href).then (response) =>
    @PlanStorageService.clearById(plan.recordID)
    return response
  
  save: (plan) ->
   deferred = @q.defer()
   
   #console.log plan
   #href = plan.href.replace('Api-Plan', 'Api-Plan.Put')
   @PlanRepository.save(plan).then (planResponse) =>
   
    savedStrategies = 0
    strategies = plan.strategies.length
   
    for strategy in plan.strategies
     @StrategyRepository.save(strategy)
     .then (data) =>
      savedTactics = 0
      tactics = strategy.tactics.length
      
      for tactic in strategy.tactics
	      @TacticRepository.save(tactic)
	      .then (data) =>
	       savedTactics = savedTactics + 1
	       if savedTactics == tactics
	        savedStrategies = savedStrategies + 1
         if savedStrategies == strategies
          deferred.resolve planResponse
	      .catch (error) =>
	       deferred.reject error
     .catch (error) =>
      deferred.reject error
      
    @PlanStorageService.saveById(plan.recordID, plan)
    
   
   deferred.promise
]