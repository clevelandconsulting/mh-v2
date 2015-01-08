angular.module('app').controller 'LoginController', [ 'AuthorizationService', 'NotificationService', '$location', 'UsersService',
 class LoginController 
  constructor: (@auth, @notifications, @location, @userService) ->
   @username=''
   @password=''
  
  login: ->
   @loginToastr = @notifications.info 'Logging In...'
   success = (response) => 
    #console.log 'login success', response
    @notifications.clear(@loginToastr)
    @notifications.success 'Welcome ' + @username + '!'
    
    repoSuccess = (data) =>
     #console.log 'username retrieved success', data
     @userService.saveCurrentUserId(data.recordID)
     @location.path('/project')
    repoFailure = (data) =>
     #console.log 'username retrieved problem', data
     @notifications.error 'Problem getting your username...' + data
    
    @userService.getUserByUsername(@username).then repoSuccess, repoFailure  
    
    
   failure = (response) => 
    @notifications.clear(@loginToastr)
    if @auth.lastError == 500
     @notifications.error "Oops, something went wrong! It's our fault not yours. Shoot us an email if this keeps happening!"
    else
     @userService.clearCurrentUserId()
     @notifications.error "That's not a valid username and password."
   
   #console.log 'doing login...'
   @auth.doLogin(@username,@password).then success, failure
   
]