angular.module('app').service 'PlansService', ['$q', 'PlanRepository', 'PlanStorageService', 
 class PlansService
  constructor: (@q, @PlanRepository, @PlanStorageService) ->
   @blocked = {}
   @requirements_on = true
  getSelected: () ->
   @selectedPlan
   
  getOne: (id) ->
   #console.log 'creating PlansService.getOne() promise', id
   deferred = @q.defer()
   
   stored = @PlanStorageService.getById(id)
   if stored == null
    #console.log 'Retrieving Via Repository', id
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
    #console.log 'Retrieving Via Storage', id
    #console.log 'resolving PlansService.getOne() promise', id
    deferred.resolve stored
     
   deferred.promise
  
  allow_requirements: (allow) ->
   @requirements_on = allow
   
  block_requirement: (name) ->
   @blocked[name] = true
  
  unblock_requirement: (name) ->
   @blocked[name] = false 
     
  requirements: (name) ->
   if @blocked[name] || !@requirements_on
    return false
   else
    @PlanRepository.model.submission_requirements[name]
  
  getAll: (pagesize) ->
   @PlanRepository.getPlans(pagesize)
   
  getByHref: (href, pagesize) ->
   @PlanRepository.getPage(href,pagesize)
  
  select: (plan) ->
   @selectedPlan = plan
   @PlanStorageService.saveById(plan.recordID, plan)
  
  add: () ->
   @PlanRepository.add({})
  
  delete: (plan) ->
   @PlanRepository.delete(plan.href).then (response) =>
    @PlanStorageService.clearById(plan.recordID)
    return response
  
  save: (plan) ->
   #console.log plan
   #href = plan.href.replace('Api-Plan', 'Api-Plan.Put')
   @PlanRepository.save(plan).then (data) =>
    @PlanStorageService.saveById(plan.recordID, plan)
    return data
]