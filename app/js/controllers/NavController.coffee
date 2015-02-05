angular.module('app').controller 'NavController', ['$scope', '$location', '$timeout', 'AuthorizationService', 'UsersService',

 class NavController
  constructor: (@scope, @$location, @timeout, @authorizationService, @userService) ->
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
    #console.log 'loading username'
	   @promise = @userService.getCurrentUser()
	   @loadingUsername = true
	   
	   @promise
	   .then (data) =>
	    #console.log 'found it', data
	    @loadingUsername = false
	    @username = data.username
	   .catch (error) =>
	    #console.log 'nothing found'
	    @timeout(
		    () => @loadingUsername = false
		    ,
		    500
	    )
	    
	    return error
	   
	   @promise
	 
	 profile: () ->
	  @$location.path('profile')
	 
	 logout: () ->
	  @$location.path('logout')
	 
	 addNewPlan: () ->
	  @$location.path('addnewplan')
	  
	 
]