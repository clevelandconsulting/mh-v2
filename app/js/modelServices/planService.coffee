angular.module('app').service 'PlanService', ['$q', 'PlanRepository', 'StrategyRepository', 'TacticRepository', 'PlanStorageService', 'tacticList', 'strategyList', ($q, PlanRepository, StrategyRepository, TacticRepository, PlanStorageService, tacticList, strategyList) ->

 class PlanService
  constructor: () ->
   @blocked = {}
   @requirements_on = true
   @loading = false
   @loadingTactics = false
   
   #--------------------------------------------------------------------
   #
   # START Private methods
   #
   #--------------------------------------------------------------------
   
   @handleError = (error) ->
    #console.log 'handleError', error
    if error.code?
     if error.code == 101
      message = 'Record does not exist'
     else
      message = 'Error ' + error.code + ': ' + error.reason
    else
     message = error
    
    #console.log 'rejecting PlansService.getOne() promise', id
    return message
    
   @getPlanFromServer = (id) =>
	   PlanRepository.getByRecordId(id) #.catch (error) => @handleError(error)
     
   @getStrategiesFromServer = (plan) =>
	   StrategyRepository.getAllForPlan(plan.data.__guid, 1000).catch (error) => @handleError(error)
	      
   @getTacticsFromServer = (strategy) =>
	   TacticRepository.getAllForStrategy(strategy.data.__guid, 1000).catch (error) => @handleError(error)
          
   @fetchPlan = (id, forceRefresh) ->
	   deferred = $q.defer()
	   
	   if !forceRefresh? || !forceRefresh
	    #console.log 'looking into storage for plan', id
	    stored = PlanStorageService.getById(id)
	   else
	    stored = null
	    
	   if stored == null
	    @getPlanFromServer(id)
	    .then (plan_response) =>
	     #console.log 'plan from server response', plan_response
	     if plan_response == null
	      deferred_resolve plan_response
	     else
	      PlanStorageService.saveById(id, plan_response)
	      deferred.resolve plan_response
	    .catch (error) ->
	     #console.log 'plan from server error', error
	     deferred.reject error
	   else
	    deferred.resolve stored
	     
	   deferred.promise  
	  
	  @fetchStrategies = (plan, forceRefresh) ->
	   deferred = $q.defer()
	   
	   if !forceRefresh? || !forceRefresh
	    #console.log 'looking into storage for strategies', plan.recordID
	    stored = PlanStorageService.getStrategiesById(plan.recordID)
	    #console.log 'results', stored
	   else
	    stored = null
	    
	   if stored == null
	    @getStrategiesFromServer(plan)
	    .then (strategies_response) =>
	     if strategies_response == null
	      PlanStorageService.saveStrategiesById(plan.recordID, [])
	      deferred.resolve strategies_response
	     else
	      strategies = strategies_response.items
	      PlanStorageService.saveStrategiesById(plan.recordID, strategies)
	      deferred.resolve strategies
	    .catch (error) ->
	     deferred.reject error
	   else
	    deferred.resolve stored
	     
	   deferred.promise
	   
	  @fetchTactics = (strategy, plan_recID, forceRefresh) ->
	   deferred = $q.defer()
	   
	   if !forceRefresh? || !forceRefresh
	    stored = PlanStorageService.getTacticsById(plan_recID, strategy.recordID)
	   else
	    stored = null
	   
	   #console.log 'tactic storage', stored, strategy, plan_recID
	   
	   if stored == null
	    @getTacticsFromServer(strategy)
	    .then (tactics_response) =>
	     #console.log 'get tactics from server', tactics_response
	     if tactics_response == null
	      PlanStorageService.saveTacticsById(plan_recID, strategy.recordID, [])
	      deferred.resolve {tactics:tactics_response, strategy:strategy}
	     else
	      tactics = tactics_response.items
	      PlanStorageService.saveTacticsById(plan_recID, strategy.recordID, tactics)
	      deferred.resolve {tactics:tactics, strategy:strategy}
	    .catch (error) ->
	     deferred.reject error
	   else
	    deferred.resolve {tactics:stored, strategy:strategy}
	     
	   deferred.promise 
	   
	  #--------------------------------------------------------------------
   #
   # END Private methods
   #
   #--------------------------------------------------------------------
   
  
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
    PlanRepository.model.submission_requirements[name]
  
  
  #handle loading the plan & tactics
  loadPlan: (id, forceRefresh) ->
  
   deferred = $q.defer()
   
   @loading = true
   @tactics = {}
   @fetchPlan(id, forceRefresh)
   .then (plan) =>
    #console.log 'loaded', plan
    if plan != null
     @fetchStrategies(plan, forceRefresh)
     .then (strategies) =>
      @strategies = new strategyList(strategies)
      @strategies.sort()
      @loading = false
      #console.log 'strategies loaded', @strategies
      deferred.resolve plan 
     .catch (error) =>
      @loading = false
      deferred.reject error
    else
     @loading = false
     deferred.reject 'Plan does not exist'
   .catch (error) =>
    #console.log 'fetch plan error', error
    @loading = false
    deferred.reject  error
   
   deferred.promise

  loadTactics: (strategy, plan_recID, forceRefresh) ->
   if !@loadingTactics[strategy]
	   @loadingTactics[strategy] = true
	   #console.log 'loading tactics for', strategy
	   @fetchTactics(strategy, plan_recID, forceRefresh)
	   .then (data) =>
	    #console.log 'fetch tactics', data
	    #window.tactics = data
	    if data.tactics?	    
	     @tactics[data.strategy.id()] = new tacticList(data.strategy, data.tactics)
	     @tactics[data.strategy.id()].sort()
		    
		   data.strategy.setTacticsLoaded(true)
		   @loadingTactics[data.strategy] = false
	    return strategy
	   .catch (error) =>
	    strategy.setTacticsLoaded(true)
		   @loadingTactics[strategy] = false
	    return error
  
  #handle adding strategies & tactics
  addStrategy: (plan) ->
   strategy = StrategyRepository.makeNew(plan.data.__guid)
   strategy.isOpen = true
   if !@strategies?
    @strategies = new strategyList()
    
   @strategies.add strategy
   
   strategy
   
  addTactic: (strategy) ->
   tactic = TacticRepository.makeNew(strategy.data.__guid)
   tactic.editing = true
   
   if !@tactics[strategy.id()]?
    @tactics[strategy.id()] = new tacticList(strategy)
    
   @tactics[strategy.id()].add tactic
   
   tactic
  
    
  
  #handle getting the tactic & count for a particular strategy
  getStrategies: () ->
   if @strategies?
    @strategies.items
   else 
    null
    
  getTactics: (strategy) ->
   if @tactics[strategy.id()]?
    @tactics[strategy.id()].items
   else
    null
   
  getTacticsCount: (strategy) ->
	   if strategy.getTacticsLoaded()
	    if @tactics[strategy.id()]?
	     @tactics[strategy.id()].count()
	    else
	     0
	   else
	    strategy.dbCount()
  
  saveStrategies: (plan) ->
   deferred = $q.defer()
   
   cleanup = (error) =>
    @savingStrategies = false
    if error?
     deferred.reject error
    else
     deferred.resolve true
     
   if @strategies?
	   @savingStrategies = true
	   repoPromises = []
	   
	   for strategy, i in @strategies.items
	    p = StrategyRepository.save(strategy).then (data) => strategy = data.obj
	    repoPromises.push p
	    
	   $q.all(repoPromises)
	   .then () =>
	    PlanStorageService.saveStrategiesById(plan.recordID, @strategies.items)
	    cleanup()
	   .catch (error) ->
	    cleanup(error)
	     
	  else
	  
	   deferred.resolve true
  
   deferred.promise
  
  saveTactics: (plan) ->
   deferred = $q.defer()
   
   cleanup = (error) =>
    @savingTactics = false
    if error?
     deferred.reject error
    else
     deferred.resolve true
     
   if @tactics?
	   @savingTactics = true
	   repoPromises = []
	   
	   #console.log @tactics
	   
	   for strategy_id, tList of @tactics
	    for tactic in tList.items
	     #console.log 'saving tactic...', tactic
	     p = TacticRepository.save(tactic).then (data) => tactic = data.obj
	     repoPromises.push p
	   
	   $q.all(repoPromises)
	   .then () =>
	    #console.log 'saved tactics', @tactics, plan
	    
	    for strategy_id, tList of @tactics
	     #console.log 'saving tactics to local', tList
	     PlanStorageService.saveTacticsById(plan.recordID, tList.strategy.recordID, tList.items)
	    cleanup()
	    
	   .catch (error) ->
	    cleanup(error)
	     
	  else
	  
	   deferred.resolve true
  
   deferred.promise
  
  
  
  save: (plan, submit) ->
   @saving = true
   deferred = $q.defer()
     
   if submit
    promise = PlanRepository.submit(plan)
   else
    promise = PlanRepository.save(plan)
   
   promise
   .then (data) =>
    @saveStrategies(plan)
    .then (data) =>
     @saveTactics(plan)
     .then (data) =>
      @saving = false
      deferred.resolve {msg:"Your plan was saved."}
     .catch (error) =>
      @saving = false
      deferred.reject error
   .catch (error) =>
    @saving = false
    deferred.reject error
   
   deferred.promise.then (data) =>
    PlanStorageService.saveById(plan.recordID, plan)
    return data
    
    
   deferred.promise
  
  submit: (plan) ->
   @save(plan,true)
  
  testClear: (plan) ->
   PlanStorageService.clearAllTacticsForPlan(plan.recordID)
  
  delete: (plan) ->
   PlanRepository.delete(plan.href).then (response) =>
    PlanStorageService.clearById(plan.recordID)
    PlanStorageService.clearStrategiesById(plan.recordID)
    PlanStorageService.clearAllTacticsForPlan(plan.recordID)
    return response
  
  goToTacticPage: (strategy_id,tactic) ->
   if @tactics[strategy_id]
    page = @tactics[strategy_id].findPage(tactic)
    @tactics[strategy_id].setCurrentPage(page)
    true
   else
    false
  
  
  goToStrategyPage: (strategy) ->
   if @strategies
    page = @strategies.findPage(strategy)
    @strategies.setCurrentPage(page)
    true
   else
    false
  
  # getSelected: () ->
#    @selectedPlan
#   
#   getFromServer: (id) ->
#    @loading = true
#    PlanRepository.getByRecordId(id)
#     .then (data) =>
#      if data != null
#       PlanStorageService.clearById(id)
#       @select(data).then () =>
#        @loading = false
#        # d = new Date()
#        # console.log 'done loading plan', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
#        return data
#     .catch (error) ->
#      if error.code?
#       if error.code == 101
#        message = 'Record does not exist'
#       else
#        message = 'Error ' + error.code + ': ' + error.reason
#      else
#       message = error
#      
#      @loading = false
#      
#      #console.log 'rejecting PlansService.getOne() promise', id
#      return message
#      
#   getOne: (id) ->
#    deferred = $q.defer()
#    
#    stored = PlanStorageService.getById(id)
#    if stored == null
#     @getFromServer(id)
#     .then (data) =>
#      if data == null
#       deferred.reject 'You do not have access to this record.'
#      else
#       deferred.resolve data
#     .catch (error) ->
#      deferred.reject error
#    else
#     deferred.resolve stored
#      
#    deferred.promise  
#   
#   addStrategy: (plan) ->
#    strategy = StrategyRepository.makeNew(plan.data.__guid)
#    strategy.isOpen = true
#    plan.strategies.push strategy
#    
#   addTactic: (strategy) ->
#    tactic = TacticRepository.makeNew(strategy.data.__guid)
#    tactic.editing = true
#    strategy.tactics.push tactic
#   
#   loadTactics: (strategy) ->
#    if !@loadingTactics
# 	   @loadingTactics = true
# 	   console.log 'loading tactics for', strategy
# 	   TacticRepository.getAllForStrategy(strategy.data.__guid, 1000).then (data) =>
# 	    console.log 'found tactics', data
# 	    if data?	    
# 		    for item in data.items
# 		     strategy.addTactic(item)
# 		    strategy.sortTactics()
# 		    
# 		   strategy.setTacticsLoaded(true)
# 		   @loadingTactics = false
# 		   console.log 'finished loading tactics for', strategy
# 	    return strategy
#   
#   loadStrategies: (plan) ->
#    #console.log 'loading strategies', plan
#    deferred = $q.defer()
#    StrategyRepository.getAllForPlan(plan.data.__guid, 1000)
#    .then (strategies) => 
#     #console.log 'found strategies', strategies
#     if strategies?
# 	    loaded = 0
# 	    for strategy in strategies.items
# 	     plan.addStrategy(strategy)
# 	    deferred.resolve plan
# 
# 	   else
# 	    deferred.resolve plan
#    .catch (error) =>
#     deferred.reject error
#     
#    deferred.promise
#   
#   select: (plan) ->
#   
#    deferred = $q.defer()
#   
#    stored = PlanStorageService.getById(plan.recordID)
#    if stored?
#     @selectedPlan = stored
#    else
#     @selectedPlan = plan
#  
#    #console.log 'l', @selectedPlan.strategies.length
#    if @selectedPlan.strategies.length == 0
# 	   @loadStrategies(@selectedPlan).then (plan) =>
# 	    plan.sortStrategies()
# 	    PlanStorageService.saveById(@selectedPlan.recordID, plan)
# 	    deferred.resolve true
# 	  else
# 	   if !stored?
#  	   PlanStorageService.saveById(@selectedPlan.recordID, plan)
#  	   deferred.resolve true
#   
#    deferred.promise
#    
#    
#   add: () ->
#    plan = PlanRepository.makeNew('Untitled')
#    PlanRepository.add(plan.data)
#   
#   delete: (plan) ->
#    PlanRepository.delete(plan.href).then (response) =>
#     PlanStorageService.clearById(plan.recordID)
#     return response
#     
#   saveTactic: (tactic) ->
#    if tactic.removed
#     if tactic.href != '' && tactic.href?
# 	    promise = TacticRepository.delete(tactic.href)
# 	    .then (data) =>
# 	     return {msg: data, obj: null}
# 	   else
# 	    #tactic was added, then removed, all without being added to DB, so just return null obj in a promise
# 	    deferred = @q.defer()
# 	    deferred.resolve {msg: "Tactic was removed.", obj: null}
# 	    promise = deferred.promise
# 	    
# 	  else
#     promise = TacticRepository.save(tactic)
#     .then (data) =>
#      return data
#        
#    promise
# 
#   
#   saveStrategy: (plan, strategy) ->
#    #console.log 'saving', plan, strategy
#    if strategy.removed
#     if strategy.href != '' && strategy.href?
# 	    promise = StrategyRepository.delete(strategy.href)
# 	    .then (data) =>
# 	     return { msg: data, obj: null}
# 	   else
# 	    #strategy was added, then removed, all without being added to DB, so just return null obj in a promise
# 	    deferred = $q.defer()
# 	    deferred.resolve {msg: "Strategy was removed.", obj: null}
# 	    promise = deferred.promise
# 
#    else
#     deferred = $q.defer()
#     promise = deferred.promise
#     
#     StrategyRepository.save(strategy)
#     .then (data) =>
#      s = data.obj
#      num_of_tactics = s.tactics.length
#      
#      if num_of_tactics > 0
#       new_tactics = []
#       tactics_saved = 0
#       for tactic in s.tactics
#        @saveTactic(tactic)
#        .then (tacticData) =>
#         if tacticData.obj != null
#          new_tactics.push(tacticData.obj)
#          
#         tactics_saved = tactics_saved + 1
#         if tactics_saved == num_of_tactics
#          s.tactics = new_tactics
#          s.sortTactics()
#          deferred.resolve {msg: data.msg, obj:s}
#        .catch (error) =>
#         deferred.reject error
#      else
#       deferred.resolve data
#     .catch (error) =>
#      console.log 'plansService.saveStrategy -> repository save error', error
#      deferred.reject error
#      
#    promise
#   
#   save: (plan, submit) ->
#    deferred = $q.defer()
#    
#    if submit
#     promise = PlanRepository.submit(plan)
#    else
#     promise = PlanRepository.save(plan)
#    
#    promise
#     .then (data) =>
#      num_of_strategies = plan.strategies.length
#      
#      if num_of_strategies > 0
#       strategies_saved = 0
#       new_strategies = []
#       
#       for strategy in plan.strategies
#        @saveStrategy(plan,strategy)
#        .then (strategyData) =>
#         if strategyData.obj != null
#          new_strategies.push(strategyData.obj)
#         #plan.strategies[strategies_saved] = strategyData.obj
#         strategies_saved = strategies_saved + 1
#         if strategies_saved == num_of_strategies
#          plan.strategies = new_strategies
#          plan.sortStrategies()
#          deferred.resolve {msg: data, obj:plan}
#        .catch (error) =>
#         console.log 'plansservice.save error saving strategy', error
#         deferred.reject error
#      else
#       deferred.resolve {msg: data, obj: plan}
#     .catch (error) =>
#      deferred.reject error
#    
#    deferred.promise.then (data) =>
#     PlanStorageService.saveById(data.obj.recordID, data.obj)
#     return data
#     
#     
#    deferred.promise
#   
#   submit: (plan) ->
#    @save(plan,true)
   
 new PlanService()
]