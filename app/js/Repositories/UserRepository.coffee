angular.module('app').service 'UserRepository', [ '$q', 'ApiService', 'user', 'UserStorageService', 
 class userRepository
  constructor: (@$q, @api, @user, @userStorage) ->
   @path = 'layout/Staff'
  
  createUser: (apiResponse) ->
   try 
    d = apiResponse.data.data[0]
    h = apiResponse.data.meta[0].href
    r = apiResponse.data.meta[0].recordID
    return new @user d, h, r
   catch e then throw Error 'Invalid API Response'
   finally
    
 
  getUser: (path) ->
   #console.log 'getUser', path
   
   d = @$q.defer()
   
   success = (response) =>
    #console.log 'getUser Success', response
    try 
     newUser = @createUser response
     #console.log 'newUser', newUser
     result = @userStorage.addUser(newUser)
     #console.log 'storage result: ' + result
     d.resolve newUser
    catch e then d.reject 'failed to store: ' + e.message
    finally
   
   failure = (response) =>
    #console.log 'getUser Failure', response 
    d.reject response
   
   @api.get(path).then success, failure
   
   d.promise
  
  getUserById: (userid) ->
   users = @userStorage.getUsers()
   if users? and users != ''
    for user in users
     if parseInt(user.recordID) == parseInt(userid)
	     foundUser = user
	     break
     
   if foundUser == undefined
    @getUser(@path + '/' + userid + '.json')   
   else
    @d = @$q.defer()
    @d.resolve foundUser
    @d.promise
  
  getUserByUsername: (username) ->
   users = @userStorage.getUsers()
   #console.log users
   if users? and users != ''
    for user in users
     if user.username  == username
      foundUser = user
      break
   
   if foundUser == undefined
    result = @getUser(@path + '.json?RFMsF1=filemaker_accountname&RFMsV1=' + username)
   else
    d = @$q.defer()
    d.resolve foundUser
    result = d.promise
   
   #console.log 'getUserByUsername', username, result
   result
  
  getCurrentUser: ->
   userid = @getCurrentUserId()
   if userid != '' and userid?
    @getUserById(userid)
   else
    @d = @$q.defer()
    @d.reject 'No User Found'
    @d.promise
    
  getUserByHref: (href) -> 
   @getUser(href) 
   
  saveCurrentUserId: (userId) -> @userStorage.saveCurrentId(userId)
  getCurrentUserId: -> @userStorage.getCurrentId()
  clearCurrentUserId: -> @userStorage.clearCurrentId()
]