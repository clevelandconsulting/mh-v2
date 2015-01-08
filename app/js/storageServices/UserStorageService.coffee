angular.module('app').service 'UserStorageService', [ 'StorageService', 'ModelStorageService', (StorageService, ModelStorageService) -> 
 class UserStorageService extends ModelStorageService
  constructor : -> 
   super(StorageService, 'users', 86400000 * 30)   

  getById: (userid) ->
   @getItemBy('recordId',userid,@intCompare)

  getByUsername: (username) ->
   @getItemBy('username',username,@textCompare)
   
  
 new UserStorageService()

]