angular.module('app').service 'StrategyRepository', [ '$q', 'strategy', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, strategy, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class StrategyRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, strategy, fmRestList, 'layout/Api-Strategy', 'strategy')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
 
  save: (strategy) ->
   console.log 'StrategyRepository.save', strategy
   if strategy.href != ''
    super(strategy).then (data) =>
     return { msg: data, obj: strategy }
   else 
    @add(strategy.data,'RestFM.Login').then (data) =>
     console.log data
     return { msg: data, obj: strategy }
  
  makeNew: (plan_id) ->
   new strategy {plan_id:plan_id}, '', ''
   
  
 new StrategyRepository()

]