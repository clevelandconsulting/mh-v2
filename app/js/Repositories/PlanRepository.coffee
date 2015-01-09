angular.module('app').service 'PlanRepository', [ '$q', 'plan', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, plan, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, plan, fmRestList, 'layout/Api-Plan', 'plan')
  
  getPlans: (pagesize) ->
   @getAllWithScript('','Plan.Api.Filter',pagesize)
  
  getPage: (href, pagesize) ->
   @getAllWithScript(href,'',pagesize)
   
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
 
  
 new PlanRepository()

]