angular.module('app').controller 'HomeController', ['$scope', '$location', 'UsersService',

 class HomeController
  constructor: (@scope, @$location, @userService) ->
   @scope.navbarCollapsed = true
   if @username == undefined
    @getUsername()
    
  getUsername: ->
   if !@loadingUsername
   
	   @promise = @userService.getCurrentUser()
	   @loadingUsername = true
	   
	   @promise.then (data) =>
	    @loadingUsername = false
	    @username = data.username
	   
	   @promise
	 
]