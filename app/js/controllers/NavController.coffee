angular.module('app').controller 'NavController', ['$scope', '$location', 'AuthorizationService', 'UsersService',
 class navController
  constructor: (@scope, @$location, @authorizationService, @userService) ->
   @scope.navbarCollapsed = true;
    
  isLoggedIn: ->
   loggedIn = @authorizationService.checkIfLoggedIn()
   #console.log 'logged in: ' , loggedIn
   if loggedIn and @username == undefined
    @getUsername()
   loggedIn
   
  logout: ->
   #console.log 'logout called'
   @authorizationService.doLogout()
   @userService.clearCurrentUserId()
   @username = undefined
   @$location.path('/login')

  getUsername: ->
   if !@loadingUsername
   
	   @promise = @userService.getCurrentUser()
	   @loadingUsername = true
	   
	   @promise.then (data) =>
	    @loadingUsername = false
	    @username = data.username
	   
	   @promise
]