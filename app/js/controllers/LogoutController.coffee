angular.module('app').controller 'LogoutController', [ 'AuthorizationService', '$location', 'UsersService', 
 class LogoutController 
  constructor: (@auth, @location, @userService) ->
   @auth.doLogout()
   @userService.clearCurrentUserId()
   @location.path('/login')   
]