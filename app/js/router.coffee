angular.module('app').config ['$routeProvider', (routeProvider) ->
 routeProvider
 .when('/login', {controller:'LoginController', controllerAs:'login', templateUrl:'login.html'})
 .when('/myplans', {controller:'MyPlansController', controllerAs:'plans', templateUrl: 'plans.html'})
 .when('/plan/:id', {controller:'PlanController', controllerAs:'plan', templateUrl: 'plan.html'})
 #.when('/test', {controller: 'testController', template: '<p>{{ result }}</p>'})
 .otherwise {redirectTo:'/myplans'}
]

angular.module('app').run [ '$rootScope', '$location', 'RouteValidation', ($rootScope,$location,routeValidation) ->

 routeValidation.addNonValidationRoute '/login'

 $rootScope.$on '$locationChangeStart', routeValidation.validateRoute

]