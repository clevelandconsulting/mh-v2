angular.module('app').service 'StrategyRepository', [ '$q', 'strategy', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, strategy, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class StrategyRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, strategy, fmRestList, 'layout/Api-Strategy', 'strategy')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
 
  
 new StrategyRepository()

]