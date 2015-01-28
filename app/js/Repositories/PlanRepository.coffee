angular.module('app').service 'PlanRepository', ['$q', 'plan', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, plan, fmRestList, fmRestRepository, ApiService) -> 
 class PlanRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, plan, fmRestList, 'layout/Api-Plan', 'plan')
   
  getByYear: (year, status, pagesize) ->
   #console.log 'getting by year', year, status, pagesize
   if status? && status != ''
    @getByStatus(status,pagesize,year)
   else
    @getPlans(pagesize,year)

  getByStatus: (status, pagesize, param) ->
   script = @getFilterScript(param)
   @getAllByKey('status', status, script, pagesize)

  getPlans: (pagesize, param) ->
   script = @getFilterScript(param)
   @getAllWithScript('', script, pagesize)
  
  getPage: (href, pagesize) ->
   @getAllWithScript(href,'',pagesize)
   
  # getAllForStaff: (staff_id, pagesize) ->
#    super(staff_id,@sortScript, pagesize)
  
  getFilterScript: (param) ->
   if param?
    {name:'Plan.Api.Filter',param:param}
   else
    'Plan.Api.Filter'
  
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