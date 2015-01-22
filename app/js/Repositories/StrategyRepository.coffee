angular.module('app').service 'StrategyRepository', [ '$q', 'strategy', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, strategy, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class StrategyRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, strategy, fmRestList, 'layout/Api-Strategy', 'strategy')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
 
  save: (strategy) ->
   #console.log 'StrategyRepository.save', strategy
   if strategy.href != ''
    super(strategy).then (data) =>
     return { msg: data, obj: strategy }
   else 
    @add(strategy.data,'RestFM.Login').then (response) =>
     #console.log response
     strategy.href = response.data.href
     strategy.recordID = response.data.recordID
     return { msg: response, obj: strategy }
  
  makeNew: (plan_id) ->
   super({plan_id:plan_id}, strategy)
  
 new StrategyRepository()

]