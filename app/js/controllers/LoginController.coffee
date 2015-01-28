angular.module('app').controller 'LoginController', [ 'AuthorizationService', 'NotificationService', '$location', 'UsersService', '$timeout', 
 class LoginController 
  constructor: (@auth, @notifications, @location, @userService, @timeout) ->
   @username=''
   @password=''
  
  login: ->
   logging_in = () => @notifications.info 'Logging In...'
   promise = @timeout logging_in, 300
   
   success = (response) => 
    #console.log 'login success', response

    repoSuccess = (data) =>
     #console.log 'username retrieved success', data
     #console.log 'saving userid', @userService.saveCurrentUserId(data.recordID)
     @location.path('/project')
     @timeout.cancel(promise)
     @notifications.clear()
     @notifications.success 'Welcome ' + @username + '!'
    
    repoFailure = (data) =>
     @timeout.cancel(promise)
     @notifications.clear()
     @notifications.error 'Problem getting your username...' + data
    
    @userService.getUserByUsername(@username).then repoSuccess, repoFailure  
    
    
   failure = (response) =>
    @timeout.cancel(promise)
    @notifications.clear()
    if @auth.lastError == 500
     @notifications.error "Oops, something went wrong! It's our fault not yours. Shoot us an email if this keeps happening!"
    else
     @userService.clearCurrentUserId()
     @notifications.error "That's not a valid username and password."
   
   #console.log 'doing login...'
   @auth.doLogin(@username,@password).then success, failure
   
]