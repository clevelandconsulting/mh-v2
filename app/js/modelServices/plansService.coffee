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
  
  
  addStrategy: (plan) ->
   strategy = @StrategyRepository.makeNew(plan.data.__guid)
   strategy.isOpen = true
   plan.strategies.push strategy
   
  addTactic: (strategy) ->
   tactic = @TacticRepository.makeNew(strategy.data.__guid)
   tactic.editing = true
   strategy.tactics.push tactic
  
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
    
  saveTactic: (tactic) ->
   if tactic.removed
    if tactic.href != '' && tactic.href?
	    promise = @TacticRepository.delete(tactic.href)
	    .then (data) =>
	     return {msg: data, obj: null}
	   else
	    #tactic was added, then removed, all without being added to DB, so just return null obj in a promise
	    deferred = @q.defer()
	    deferred.resolve {msg: "Tactic was removed.", obj: null}
	    promise = deferred.promise
	    
	  else
    promise = @TacticRepository.save(tactic)
    .then (data) =>
     return data
       
   promise

  
  saveStrategy: (plan, strategy) ->
   #console.log 'saving', plan, strategy
   if strategy.removed
    if strategy.href != '' && strategy.href?
	    promise = @StrategyRepository.delete(strategy.href)
	    .then (data) =>
	     return { msg: data, obj: null}
	   else
	    #strategy was added, then removed, all without being added to DB, so just return null obj in a promise
	    deferred = @q.defer()
	    deferred.resolve {msg: "Strategy was removed.", obj: null}
	    promise = deferred.promise

   else
    deferred = @q.defer()
    promise = deferred.promise
    
    @StrategyRepository.save(strategy)
    .then (data) =>
     s = data.obj
     num_of_tactics = s.tactics.length
     
     if num_of_tactics > 0
      new_tactics = []
      tactics_saved = 0
      for tactic in s.tactics
       @saveTactic(tactic)
       .then (tacticData) =>
        if tacticData.obj != null
         new_tactics.push(tacticData.obj)
         
        tactics_saved = tactics_saved + 1
        if tactics_saved == num_of_tactics
         s.tactics = new_tactics
         deferred.resolve {msg: data.msg, obj:s}
       .catch (error) =>
        deferred.reject error
     else
      deferred.resolve data
    .catch (error) =>
     deferred.reject error
     
   promise
  
  save: (plan) ->
   deferred = @q.defer()
   
   @PlanRepository.save(plan)
    .then (data) =>
     num_of_strategies = plan.strategies.length
     
     if num_of_strategies > 0
      strategies_saved = 0
      new_strategies = []
      
      for strategy in plan.strategies
       @saveStrategy(plan,strategy)
       .then (strategyData) =>
        if strategyData.obj != null
         new_strategies.push(strategyData.obj)
        #plan.strategies[strategies_saved] = strategyData.obj
        strategies_saved = strategies_saved + 1
        if strategies_saved == num_of_strategies
         plan.strategies = new_strategies
         deferred.resolve {msg: data, obj:plan}
       .catch (error) =>
        deferred.reject error
     else
      deferred.resolve {msg: data, obj: plan}
    .catch (error) =>
     deferred.reject error
   
   deferred.promise.then (data) =>
    @PlanStorageService.saveById(data.obj.recordID, data.obj)
    return data
    
    
   deferred.promise
]