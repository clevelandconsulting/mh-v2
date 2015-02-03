angular.module('app').factory 'dropdown', ['$http', '$q', ($http, $q) ->
 class dropDown
  constructor: ->
   @http = $http
   @items = []
  
  generate: (items) ->
   deferred = $q.defer()
   @loaded = deferred.promise
   
   @items = items
   deferred.resolve items
   
   
  removeAll: () ->
   @items = []
  
  load: (url) ->
   stateJson = $http.get(url).then (results) =>
    for item in results.data
     name = null
     value = null
     
     if item.name?
      name = item.name
     
     if item.value?
      value = item.value
      
     if name == null and value == null
      name = item
      value = item
     else if name == null
      name = value
     else if value == null
      value = name
      
     @add(name, value)
  
  add: (name, value, other) ->
   if name?
    if !value? 
     value = name
    
    obj = {name: name, value: value}
    
    if other? and other != ''
     jQuery.extend(obj, other)
     
    @items.push obj
   
  gangByCount: (count) ->
   items = []
   gangItems = []
   
   for item, i in @items
    gangItems.push(item)
    
    if (i+1) % 3 == 0
     items.push gangItems
     gangItems = []
   
   if gangItems.length > 0
    items.push gangItems
   
   items

]