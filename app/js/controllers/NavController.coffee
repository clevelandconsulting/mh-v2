angular.module('app').controller 'NavController', ['$scope', '$location', 'AuthorizationService', 'UserRepository',
 class navController
  constructor: (@scope, @$location, @authorizationService, @userRepository) ->
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
   @userRepository.clearCurrentUserId()
   @username = undefined
   @$location.path('/login')

  getUsername: -> 
   @promise = @userRepository.getCurrentUser()
   
   @promise.then (data) =>
    @username = data.username
   
   @promise
]