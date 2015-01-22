angular.module('app').service 'PlanRepository', ['$q', 'plan', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, plan, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, plan, fmRestList, 'layout/Api-Plan', 'plan')

  getByStatus: (status, pagesize) ->
   @getAllByKey('status', status, 'Plan.Api.Filter',pagesize)

  getPlans: (pagesize) ->
   @getAllWithScript('','Plan.Api.Filter',pagesize)
  
  getPage: (href, pagesize) ->
   @getAllWithScript(href,'',pagesize)
   
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
  
  submit: (plan) ->
   deferred = $q.defer()
   plan.prepForSubmit()
   @save(plan,'Plan.Api.Submit')
   .then (data) =>
    deferred.resolve data
   .catch (error) =>
    plan.unSubmit()
    deferred.reject error
   
   deferred.promise
  
  save: (plan, script) ->
   plan.prepForSave()
   super(plan, script)
  
  add: (data) ->
   super(data,'RestFM.Login')
  
  makeNew: (title) ->
   super({campaign_title:title}, plan) 
  
 new PlanRepository()

]