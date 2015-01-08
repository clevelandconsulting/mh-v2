angular.module('app').service 'PlanStorageService', [ 'StorageService', 'ModelStorageService', (StorageService, ModelStorageService) -> 
 class PlanStorageService extends ModelStorageService
  constructor : -> 
   super(StorageService, 'plans', 2400*60)   
 
 new PlanStorageService()

]