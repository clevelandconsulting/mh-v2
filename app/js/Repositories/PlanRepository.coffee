angular.module('app').service 'PlanRepository', ['$q', 'plan', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, plan, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, plan, fmRestList, 'layout/Api-Plan', 'plan')

  getPlans: (pagesize) ->
   @getAllWithScript('','Plan.Api.Filter',pagesize)
  
  getPage: (href, pagesize) ->
   @getAllWithScript(href,'',pagesize)
   
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
  save: (plan) ->
   #update product / portfolio information
   plan.data.portfolio = plan.product.portfolio
   plan.data.discipline = plan.product.discipline
   plan.data.product = plan.product.value
   
   #get modifiable data
   data = plan.getUpdateData()
   href = plan.href
   
   @update(data,href)
  
  add: (data) ->
   super(data,'RestFM.Login')
 
  
 new PlanRepository()

]