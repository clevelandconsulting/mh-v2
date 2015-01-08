angular.module('app').service 'ApiService', ['$http','api', ($http, api) -> 
 myApi = new api($http) 
 myApi.setPath 'fms.clevelandconsulting.com', '/RESTfm/MHMarketingMgt/', true
 #cciApi.setUrl 'https://10.0.1.185/RESTfm/STEVE/'
 
 myApi
]