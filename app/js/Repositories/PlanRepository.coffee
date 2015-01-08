angular.module('app').service 'PlanRepository', [ '$q', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, fmRestModel, fmRestList, 'layout/Api-Plan', 'plan')
  
  getPlans: (pagesize) ->
   @getAllWithScript('','Plan.Api.Filter',pagesize)
  
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
 
  
 new PlanRepository()

]