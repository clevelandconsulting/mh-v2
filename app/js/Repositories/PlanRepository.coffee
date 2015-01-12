angular.module('app').service 'PlanRepository', ['$q', 'plan', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, plan, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c', 'staff_full_name_c', 'staff_account_name_c'
   ]
   
   super($q, ApiService, plan, fmRestList, 'layout/Api-Plan', 'plan')

  getPlans: (pagesize) ->
   @getAllWithScript('','Plan.Api.Filter',pagesize)
  
  getPage: (href, pagesize) ->
   @getAllWithScript(href,'',pagesize)
   
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
  save: (plan) ->
   data = plan.data
   href = plan.href
   copy = {}
   for attr of data
    if data.hasOwnProperty(attr)
     modifiable = true
     for prop in @non_modifiable_properties
      if attr == prop
       modifiable = false
       break;
     if modifiable
      copy[attr] = data[attr]
    
   @update(copy,href)
   
 
  
 new PlanRepository()

]