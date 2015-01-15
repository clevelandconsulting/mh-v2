angular.module('app').service 'TacticRepository', [ '$q', 'tactic', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, tactic, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class TacticRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, tactic, fmRestList, 'layout/Api-Tactic', 'tactic')
   
  getAllForStrategy: (strategy_id, pagesize) ->
   @getAllByKey('strategy_id', strategy_id, @sortScript, pagesize)
 
  save: (tactic) ->
   tactic.handleDates()
	  
	  super(tactic).then (data) =>
	   return {msg: data, obj: tactic }
  
 
 new TacticRepository()

]