angular.module('app').service 'PlanStorageService', [ 'StorageService', 'ModelStorageService', 'plan', 'strategy', 'tactic', 'planProduct', (StorageService, ModelStorageService, plan, strategy, tactic, planProduct) -> 
 class PlanStorageService extends ModelStorageService
  constructor : -> 
   super(StorageService, 'plans', 2400*60)
   
   
  strategiesKey: (id) ->
   @getName(id)+'.strategies'
   
  tacticsKey: (plan_id, strategy_id) ->
   @strategiesKey(plan_id) + '.' + strategy_id + '.tactics'
  
  ppsKey: (id) ->
   @getName(id)+'.pps'
  
    
  savePPsById: (id, pps) ->
   @saveByKey(@ppsKey(id),@stripObjects(pps))
   
  getPPsById: (id) ->
   pps = @getByKey(@ppsKey(id))
   if pps?
	   result = []
	   
	   if pps?
	    for raw_pp in pps
	     new_pp = new planProduct raw_pp.data, raw_pp.href, raw_pp.recordID
	     result.push(new_pp)
	   
	   result
	  else
	   pps
   
  clearPPsById: (id) ->
   @clearByKey(@ppsKey(id))

  saveStrategiesById: (id, strategies) ->
   @saveByKey(@strategiesKey(id),@stripObjects(strategies))
   
  getStrategiesById: (id) ->
   strategies = @getByKey(@strategiesKey(id))
   if strategies?
	   result = []
	   
	   if strategies?
	    for raw_strategy in strategies
	     new_strategy = new strategy raw_strategy.data, raw_strategy.href, raw_strategy.recordID
	     result.push(new_strategy)
	   
	   result
	  else
	   strategies
   
  clearStrategiesById: (id) ->
   @clearByKey(@strategiesKey(id))
   
  saveTacticsById: (plan_id, strategy_id, tactics) ->
   @saveByKey(@tacticsKey(plan_id, strategy_id),@stripObjects(tactics))
   
  getTacticsById: (plan_id, strategy_id) ->
   tactics = @getByKey(@tacticsKey(plan_id, strategy_id))
   if tactics?
	   result = []
	   
	   if tactics?
	    for raw_tactic in tactics
	     new_tactic = new tactic raw_tactic.data, raw_tactic.href, raw_tactic.recordID
	     result.push(new_tactic)
	   
	   result
	  else
	   tactics
   
  clearTacticsById: (plan_id, strategy_id) ->
   @clearByKey(@tacticsKey(plan_id, strategy_id))
   
  clearAllTacticsForPlan: (plan_id) ->
   key = @strategiesKey(plan_id)
   regEx = RegExp(key + '.*')
   
   @clearAllRegEx(regEx)

  saveById: (id, plan) -> 
   super(id,{data:plan.data, href:plan.href, recordID:plan.recordID})

  getById: (id) ->
   raw = super(id)
   #console.log 'raw',raw
   if raw?
    p = new plan raw.data,raw.href,raw.recordID
    return p
   else
    return raw
 
 new PlanStorageService()

]