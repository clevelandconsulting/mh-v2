angular.module('app').service 'PlanStorageService', [ 'StorageService', 'ModelStorageService', 'plan', (StorageService, ModelStorageService, plan) -> 
 class PlanStorageService extends ModelStorageService
  constructor : -> 
   super(StorageService, 'plans', 2400*60)   

  getById: (id) ->
   raw = super(id)
   #console.log 'raw',raw
   if raw?
    return new plan(raw.data,raw.href,raw.recordID)
   else
    return raw
 
 new PlanStorageService()

]