angular.module('app').service 'StrategyRepository', [ '$q', 'strategy', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, strategy, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class StrategyRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, strategy, fmRestList, 'layout/Api-Strategy', 'strategy')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
   # .then (data) =>
#     d = new Date()
#     console.log 'downloaded strategies', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
#     return data
 
  save: (strategy) ->
   #console.log 'StrategyRepository.save', strategy
   if strategy.href != ''
    super(strategy).then (data) =>
     return { msg: data, obj: strategy }
   else 
    if !strategy.isRemoved()
	    @add(strategy.data,'RestFM.Login').then (response) =>
	     #console.log response
	     strategy.href = response.data.href
	     strategy.recordID = response.data.recordID
	     return { msg: response, obj: strategy }
    else
     d = @$q.defer()
     d.resolve { msg: "Successfully removed", obj: null}
     return d.promise
  
  makeNew: (plan_id) ->
   s = super({plan_id:plan_id}, strategy)
   s.setTacticsLoaded(true)
   
   console.log 'added strategy', s 
   
   s 
  
 new StrategyRepository()

]