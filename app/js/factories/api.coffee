class api
  constructor: ($http) -> 
   @credentials = ''
   @http = $http
   #@http({method: 'GET', url: @url + "?RFMkey=cci-developer"})
   
  setPath: (domain, extension, ssl) ->
   @domain = domain
   @extension = extension
   @ssl = ssl
  
  url: (path) ->
   
   if path?
    path = path.replace @extension, ''
    path = path.replace @domain, ''
    path = path.replace 'http://', ''
    path = path.replace 'https://', ''
   else 
    path = ''
    
   url = 'http'
   if @ssl
    url = url + 's'
   
   url = url + '://' + @domain + @extension + path
   
   url

  setCredentials: (@credentials) ->
  
  clearCredentials: -> @credentials = ''
  
  setHeader: (name,value) ->
   @http.defaults.headers.common[name] = value
   
  setAuth: ->
   if @credentials != ''
    @setHeader('Authorization', 'Basic ' + @credentials.auth) 
  
  prepCall: (path)->
   @setAuth()
   path = path || ''
   path
  
  get:(path) ->
   path = @prepCall path
   #console.log 'getting', @url(path)
   @http({method: 'GET', url:@url(path)})
   
  checkCredentials: (credentials) ->
   @setHeader('Authorization', 'Basic ' + credentials.auth)
   @http({method: 'GET', url: @url()})  
   
  put:(path,object) ->
   path = @prepCall path
   @http({method: 'PUT', url:@url(path), data:object})
   
  post:(path,object) ->
   path = @prepCall path
   @http({method: 'POST', url:@url(path), data:object})
   
  delete:(path) ->
   path = @prepCall path
   @http({method: 'DELETE',url:@url(path)})


angular.module('app').factory 'api', -> api
