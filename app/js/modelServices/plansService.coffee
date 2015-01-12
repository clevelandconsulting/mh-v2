angular.module('app').service 'PlansService', ['$q', 'PlanRepository', 'PlanStorageService', 
 class PlansService
  constructor: (@q, @PlanRepository, @PlanStorageService) ->
   
  getSelected: () ->
   @selectedPlan
   
  getOne: (id) ->
   #console.log 'creating PlansService.getOne() promise', id
   deferred = @q.defer()
   
   stored = @PlanStorageService.getById(id)
   if stored == null
    console.log 'Retrieving Via Repository'
    @PlanRepository.getByRecordId(id)
    .then (data) =>
     if data == null
      #console.log 'rejecting PlansService.getOne() promise', id
      deferred.reject 'You do not have access to this record.'
     else
      @select(data)
      #console.log 'resolving PlansService.getOne() promise', id
      deferred.resolve data
    .catch (error) ->
     if error.code?
      if error.code == 101
       message = 'Record does not exist'
      else
       message = 'Error ' + error.code + ': ' + error.reason
     else
      message = error
     #console.log 'rejecting PlansService.getOne() promise', id
     deferred.reject message
   else
    console.log 'Retrieving Via Storage'
    #console.log 'resolving PlansService.getOne() promise', id
    deferred.resolve stored
     
   deferred.promise
   
  getAll: (pagesize) ->
   @PlanRepository.getPlans(pagesize)
   
  getByHref: (href, pagesize) ->
   @PlanRepository.getPage(href,pagesize)
  
  select: (plan) ->
   @selectedPlan = plan
   @PlanStorageService.saveById(plan.recordID, plan)
   
  save: (plan) ->
   #href = plan.href.replace('Api-Plan', 'Api-Plan.Put')
   @PlanRepository.save(plan).then (data) =>
    @PlanStorageService.saveById(plan.recordID, plan)
    return data
]