angular.module('app').config ['$routeProvider', (routeProvider) ->
 routeProvider
 .when('/login', {controller:'LoginController', controllerAs:'login', templateUrl:'login.html'})
 .when('/job', {controller:'JobController', controllerAs:'job', templateUrl: 'job.html'})
 .when('/campaign', {controller:'CampaignController', controllerAs:'campaign', templateUrl: 'campaign.html'})
 #.when('/test', {controller: 'testController', template: '<p>{{ result }}</p>'})
 .otherwise {redirectTo:'/job'}
]

angular.module('app').run [ '$rootScope', '$location', 'RouteValidation', ($rootScope,$location,routeValidation) ->

 routeValidation.addNonValidationRoute '/login'

 $rootScope.$on '$locationChangeStart', routeValidation.validateRoute

]