angular.module('app').config ['$routeProvider', '$locationProvider', (routeProvider, locationProvider) ->
 #console.log 'routing!'
 routeProvider
 .when('/', {controller:'HomeController', controllerAs:'home', templateUrl:'home.html'})
 .when('/login', {controller:'LoginController', controllerAs:'login', templateUrl:'login.html'}) #{template:'<div>Hi login</div>'}) #
 .when('/logout',{controller:'LogoutController', template:'<div>Logging Out...</div>'})
 .when('/addnewplan', {controller:'AddNewPlanController', templateUrl:'addnewplan.html'})
 .when('/myplans',{controller:'MyPlansController', controllerAs:'plans', templateUrl: 'plans.html'}) 
 .when('/profile',{controller:'UserController', controllerAs:'user', templateUrl: 'user.html'}) 
#{template:'<div>Hi myplans <a href="#/">Test</a></div>'}) 
 .when('/plan/:id',{controller:'PlanController', controllerAs:'plan', templateUrl: 'plan.html'})#{template:'<div>Hi plan</div>'})  #
 #.when('/test', {controller: 'testController', template: '<p>{{ result }}</p>'})
 .otherwise {redirectTo:'/myplans'}
 
 #locationProvider.html5Mode(false).hashPrefix('!')
]




angular.module('app').run [ '$rootScope', '$location', 'RouteValidation', '$route', ($rootScope,$location,routeValidation,route) ->
 #console.log 'validating'
 routeValidation.addNonValidationRoute '/login'
 $rootScope.$on '$locationChangeStart', routeValidation.validateRoute
 
 ###
 $rootScope.$on '$locationChangeStart', (event) ->
  console.log '$locationChangeStart', event
  
 $rootScope.$on '$locationChangeSuccess', (event) ->
  console.log '$locationChangeSuccess',event
  
 $rootScope.$on '$routeUpdate', (event) ->
  console.log '$routeUpdate',event
  
 $rootScope.$on '$routeChangeStart', (event) ->
  console.log '$routeChangeStart',event

 $rootScope.$on '$routeChangeSuccess', (event) ->
  console.log '$routeChangeSuccess',event

 $rootScope.$on '$routeChangeError', (event) ->
  console.log '$routeChangeError',event

 $rootScope.$on '$stateChangeSuccess', (event) ->
  console.log '$stateChangeSuccess', event
  
 $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
  console.log '$stateChangeStart', event, toState, toParams, fromState, fromParams
 ###
 ###
        // Want to prevent re-loading when going from /dataEntry/1 to some other dataEntry path
        if ($route && $route.current && $route.current.$route.templateUrl.indexOf('dataEntry') > 0) {
            $route.current = lastRoute; //Does the actual prevention of routing
        }
 ###
]
