angular.module('app').service 'ApiService', ['$http','api', ($http, api) -> 
 myApi = new api($http) 
 #myApi.setPath 'fms.clevelandconsulting.com', '/RESTfm/MHMarketingPlan/', false
 myApi.setPath '23.21.222.201', '/RESTfm/MHMarketingPlan/', false
 #cciApi.setUrl 'https://10.0.1.185/RESTfm/STEVE/'
 
 myApi
]