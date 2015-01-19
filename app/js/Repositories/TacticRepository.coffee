angular.module('app').service 'TacticRepository', [ '$q', 'tactic', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, tactic, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class TacticRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, tactic, fmRestList, 'layout/Api-Tactic', 'tactic')
   
  getAllForStrategy: (strategy_id, pagesize) ->
   @getAllByKey('strategy_id', strategy_id, @sortScript, pagesize)
 
  save: (tactic) ->
   tactic.handleDates()
	  
	  if tactic.href != ''
    super(tactic).then (data) =>
     return { msg: data, obj: tactic }
   else 
    @add(tactic.data,'RestFM.Login').then (data) =>
     console.log data
     return { msg: data, obj: tactic }
  
  makeNew: (strategy_id) ->
   new tactic {strategy_id:strategy_id}, '', ''  
 
 new TacticRepository()

]