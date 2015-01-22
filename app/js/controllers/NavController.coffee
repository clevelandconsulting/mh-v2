angular.module('app').controller 'NavController', ['$scope', '$location', 'AuthorizationService', 'UsersService',

 class NavController
  constructor: (@scope, @$location, @authorizationService, @userService) ->
   @scope.navbarCollapsed = true;
    
  isLoggedIn: ->
   loggedIn = @authorizationService.checkIfLoggedIn()
   #console.log 'logged in: ' , loggedIn
   if loggedIn and @username == undefined
    @getUsername()
   #else
   # if !@loadingUsername
   #  @username = undefined
   loggedIn

  getUsername: ->
   if !@loadingUsername
   
	   @promise = @userService.getCurrentUser()
	   @loadingUsername = true
	   
	   @promise.then (data) =>
	    @loadingUsername = false
	    @username = data.username
	   
	   @promise
	 
	 logout: () ->
	  @$location.path('logout')
	 
	 addNewPlan: () ->
	  @$location.path('addnewplan')
	  
	 
]