angular.module('app').service 'PlanService', ['$q', 'PlanRepository', 'StrategyRepository', 'TacticRepository', 'PlanProductRepository', 'PlanStorageService', 'tacticList', 'strategyList', 'planProductList', ($q, PlanRepository, StrategyRepository, TacticRepository, PlanProductRepository, PlanStorageService, tacticList, strategyList, planProductList) ->

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
   
   @getPlanProductsFromServer = (plan) =>
    PlanProductRepository.getAllForPlan(plan.data.__guid, 1000).catch (error) => @handleError(error)
   
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
	  
	  @fetchPlanProducts = (plan, forceRefresh) ->
	   deferred = $q.defer()
	   
	   if !forceRefresh? || !forceRefresh
	    #console.log 'looking into storage for strategies', plan.recordID
	    stored = PlanStorageService.getPPsById(plan.recordID)
	    #console.log 'results', stored
	   else
	    stored = null
	    
	   if stored == null
	    @getPlanProductsFromServer(plan)
	    .then (pps_response) =>
	     if pps_response == null
	      PlanStorageService.savePPsById(plan.recordID, [])
	      deferred.resolve pps_response
	     else
	      pps = pps_response.items
	      PlanStorageService.savePPsById(plan.recordID, pps)
	      deferred.resolve pps
	    .catch (error) ->
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
     @loadingStrategies = true
     @loadingPlanProducts = true
     
     @fetchPlanProducts(plan, forceRefresh)
     .then (pps) =>
      @pps = new planProductList(pps)
      @pps.sort()
      @loadingPlanProducts = false
      if !@loadingStrategies
       @loading = false
       #console.log 'strategies loaded', @strategies
       deferred.resolve plan 
     .catch (error) =>
      @loading = false
      deferred.reject error
      

     
     @fetchStrategies(plan, forceRefresh)
     .then (strategies) =>
      @strategies = new strategyList(strategies)
      @strategies.sort()
      @loadingStrategies = false
      if forceRefresh && strategies? && strategies != undefined
       #clear out the storage
       for strategy in strategies
        PlanStorageService.clearTacticsById(plan.recordID, strategy.recordID)
        delete @tactics[strategy.id()]
      if !@loadingPlanProducts
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
   
  addPlanProduct: (plan, product) ->
   pp = PlanProductRepository.makeNew(plan.data.__guid, product)
   if !@pps?
    @pps = new planProductList()
    
   @pps.add pp
   
   pp

   
  addTactic: (strategy) ->
   tactic = TacticRepository.makeNew(strategy.data.__guid)
   tactic.editing = true
   
   if !@tactics[strategy.id()]?
    @tactics[strategy.id()] = new tacticList(strategy)
    
   @tactics[strategy.id()].add tactic
   
   tactic
  
    
  
  #handle getting the tactic & count for a particular strategy
  
  canSubmit: (plan) ->
   if plan? && plan != undefined
	   if !plan.readyForSubmission()
	    return false
	   else
	    if @pps.existsCount() > 0
	     return true
	    else
	     return false
	  else
	   return false
     
  
  getStrategies: () ->
   if @strategies?
    @strategies.items
   else 
    null
  
  getPlanProducts: () ->
   if @pps?
    @pps.items
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
	   newItems = []
	   for strategy in @strategies.items
	    if strategy != undefined || !strategy?
		    p = StrategyRepository.save(strategy).then (data) => strategy = data.obj
		    if strategy? && strategy != undefined && !strategy.isRemoved()
			    newItems.push(strategy)
		    repoPromises.push p
	    
	   $q.all(repoPromises)
	   .then () =>
	    @strategies.items = newItems
	    PlanStorageService.saveStrategiesById(plan.recordID, @strategies.items)
	    cleanup()
	   .catch (error) ->
	    cleanup(error)
	     
	  else
	  
	   deferred.resolve true
  
   deferred.promise
  
  
  savePlanProducts: (plan) ->
   deferred = $q.defer()
   
   cleanup = (error) =>
    @savingPPs = false
    if error?
     deferred.reject error
    else
     deferred.resolve true
     
   if @pps?
	   @savingPPs = true
	   repoPromises = []
	   newItems = []
	   #console.log 'attempting to save plan product items', @pps.items
	   for pp in @pps.items
	    if pp != undefined || !pp?
		    p = PlanProductRepository.save(pp).then (data) => pp = data.obj
		    if pp? && pp != undefined && !pp.isRemoved()
			    newItems.push(pp)
		    repoPromises.push p
	    
	   $q.all(repoPromises)
	   .then () =>
	    #console.log 'cleaning up after plan product save', @pps.items, newItems    
	    @pps.items = newItems
	    PlanStorageService.savePPsById(plan.recordID, @pps.items)
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
	   newItems = []
	   #console.log @tactics
	   
	   for strategy_id, tList of @tactics
	    newItems[strategy_id] = []
	    for tactic, j in tList.items
	     #console.log 'saving tactic...', tactic
	     
	     if tactic?
		     p = TacticRepository.save(tactic).then (data) => tactic = data.obj
		     if tactic? && tactic != undefined && !tactic.isRemoved()
		      newItems[tactic.data.strategy_id].push(tactic)
	
		     repoPromises.push p

	   
	   $q.all(repoPromises)
	   .then () =>
	    #console.log 'saved tactics', @tactics, plan
	    
	    for strategy_id, tList of @tactics
	     tList.items = newItems[strategy_id]
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
    @savePlanProducts(plan)
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
    PlanStorageService.clearPPsById(plan.recordID)
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
   
 new PlanService()
]