angular.module('app').service 'UserStorageService', ['StorageService', 
 class UserStorageService
  
  @users: 'users'
  @currentId: 'currentUserID'
  @expiry: 86400000 * 30
 
  constructor: (@storage) ->

  getUsers: -> @storage.get(UserStorageService.users)
  saveUsers: (users) -> @storage.store(UserStorageService.users, users) #, {expires:UserStorageService.expiry})
   
  clearUsers: -> @storage.store(UserStorageService.users)
  addUser: (user) ->
   users = @getUsers()
   if users == '' || !users?
    users = [user]
   else
    users.push user
   @saveUsers users
  
  getCurrentId: () -> @storage.get(UserStorageService.currentId)
  saveCurrentId: (userId) -> @storage.store(UserStorageService.currentId, userId)
  clearCurrentId: -> @saveCurrentId()
]