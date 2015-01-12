angular.module('app').service 'RouteValidation', [ '$rootScope','$location','AuthorizationService', class RouteValidation
  constructor: (@rootScope,@location,@authorization) ->
   @routesRequireNoValidation = []
   
  addNonValidationRoute: (route) ->
   @routesRequireNoValidation.push(route)

  routeRequiresValidation: (route) ->
   noValidationRoute = _.find @routesRequireNoValidation, (noAuthRoute) -> 
    (route.substr(0, noAuthRoute.length)  == noAuthRoute)
     
   if noValidationRoute? 
    false
   else 
    true 

  validateRoute: (event, next, current) =>
   #console.log 'validating route'
   notvalid = @routeRequiresValidation(@location.url()) && !@authorization.checkIfLoggedIn()
   #console.log 'validating route', @location.url(), notvalid
   if notvalid
    @location.path('/login');
   #console.log 'done'

]