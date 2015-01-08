angular.module('app').service 'UsersService', ['UserRepository', 'UserStorageService', '$q',
 class UsersService
  constructor: (@UserRepository, @UserStorage, @q) ->
  
  storeUser: (user) ->
   storageResult = @UserStorage.add(user)
   {stored: storageResult, user:user}
   
  getUser: (path) ->
   d = @q.defer()
   
   success = (user) =>
    try 
     result = @UserStorage.add(user)
     d.resolve user
    catch e then d.reject 'failed to store: ' + e.message
    finally
   
   failure = (response) =>
    d.reject response
   
   @UserRepository.getOne(path).then @storeUser, failure
   
   d.promise
  
  getUserById: (userid) ->
   deferred = @q.defer()
   
   user = @UserStorage.getById(userid)
   
   if user == null
    @UserRepository.getUserById(userid)
    .then (user) =>
     stored = @storeUser user
     if stored
      deferred.resolve user
     else
      deferred.reject 'failed to store: ' + e.message
   else
    deferred.resolve User

   deferred.promise
      
  getUserByUsername: (username) ->
   deferred = @q.defer()
   
   user = @UserStorage.getByUsername(username)
   if user == null
    @UserRepository.getUserByUsername(username)
    .then (user) =>
     stored = @storeUser user
     if stored
      deferred.resolve user
     else
      deferred.reject 'failed to store: ' + e.message
   else
    deferred.resolve user

   deferred.promise
  
  getCurrentUser: ->
   userid = @getCurrentUserId()
   if userid != '' and userid?
    @getUserById(userid)
   else
    @d = @q.defer()
    @d.reject 'No User Found'
    @d.promise
    
  getUserByHref: (href) -> 
   @getUser(href) 
   
  saveCurrentUserId: (userId) -> @UserStorage.saveCurrent(userId)
  getCurrentUserId: -> @UserStorage.getCurrent()
  clearCurrentUserId: -> @UserStorage.clearCurrent()
    
]