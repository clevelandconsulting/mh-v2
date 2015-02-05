angular.module('app').service 'UsersService', ['UserRepository', 'UserStorageService', 'AuthorizationService', '$q',
 class UsersService
  constructor: (@UserRepository, @UserStorage, @AuthorizationService, @q) ->
  
  
  changePassword: (newpass,oldpass) ->
   d = @q.defer()
   
   userid = @getCurrentUserId()
   @UserRepository.changePassword(userid, newpass, oldpass)
   .then (response) =>
    if response.data?
     if response.data.data[0]?
      if response.data.data[0].error_message?
       d.reject {title: response.data.data[0].error_title, msg: response.data.data[0].error_message }
       return
    
    
    @AuthorizationService.changeCredentials(@username,newpass)
    d.resolve response.data.data[0]
   .catch (error) =>
    d.reject {title: 'Error: Could Not Change Password', msg: "Unable to change the password. " + error }
    
   d.promise
  
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
   
   user = @UserStorage.getByRecordId(userid)
   #console.log 'userbyid', userid, user
   if user == null
    @UserRepository.getUserById(userid)
    .then (user) =>
     stored = @storeUser user
     if stored
      deferred.resolve user
     else
      deferred.reject 'failed to store: ' + e.message
   else
    deferred.resolve user

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
   #console.log 'getting current user', userid
   if userid != '' and userid?
    @getUserById(userid).then (data) =>
     @username = data.username
     return data
   else
    #console.log 'nothing found'
    @d = @q.defer()
    @d.reject 'No User Found'
    @d.promise
    
  getUserByHref: (href) -> 
   @getUser(href) 
   
  saveCurrentUserId: (userId) -> @UserStorage.saveCurrent(userId)
  getCurrentUserId: -> @UserStorage.getCurrent()
  clearCurrentUserId: -> @UserStorage.clearCurrent()
    
]