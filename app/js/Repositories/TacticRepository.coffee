angular.module('app').service 'TacticRepository', [ '$q', 'tactic', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, tactic, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class TacticRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, tactic, fmRestList, 'layout/Api-Tactic', 'tactic')
   
  getAllForStrategy: (strategy_id, pagesize) ->
   @getAllByKey('strategy_id', strategy_id, @sortScript, pagesize)    
   # .then (data) =>
   #     d = new Date()
   #     console.log 'downloaded tactics for ' + strategy_id, d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
   #     return data

 
  save: (tactic) ->
   tactic.prepForSave()
   
	  if tactic.href != ''
    super(tactic).then (data) =>
     return { msg: data, obj: tactic }
   else 
    @add(tactic.data,'RestFM.Login').then (response) =>
     #console.log response
     tactic.href = response.data.href
     tactic.recordID = response.data.recordID
     return { msg: response, obj: tactic }
  
  makeNew: (strategy_id) ->
   super({strategy_id:strategy_id}, tactic)
   
 new TacticRepository()

]