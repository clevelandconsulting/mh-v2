angular.module('app').config ['$routeProvider', (routeProvider) ->
 routeProvider
 .when('/login', {controller:'LoginController', controllerAs:'login', templateUrl:'login.html'})
 .when('/job', {controller:'JobController', controllerAs:'job', templateUrl: 'job.html'})
 .when('/plan', {controller:'PlanController', controllerAs:'plans', templateUrl: 'plans.html'})
 #.when('/test', {controller: 'testController', template: '<p>{{ result }}</p>'})
 .otherwise {redirectTo:'/plan'}
]

angular.module('app').run [ '$rootScope', '$location', 'RouteValidation', ($rootScope,$location,routeValidation) ->

 routeValidation.addNonValidationRoute '/login'

 $rootScope.$on '$locationChangeStart', routeValidation.validateRoute

]