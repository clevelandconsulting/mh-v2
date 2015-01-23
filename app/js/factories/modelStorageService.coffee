 class ModelStorageService
 
  constructor: (@storage, @name, @expiry) ->
  
  intCompare: (val1,val2) ->
   result = false
   if parseInt(val1) == parseInt(val2)
    result = true
   result
  
  textCompare: (val1,val2) ->
   result = false
   if val1 == val2
    result = true
   result
  
  getItemBy: (attribute,value,comparisonFn) ->
   found = null
   items = @get()
   #console.log items
   if items? and items != ''
    for item in items
     #console.log 'comparing', item, attribute, item[attribute], value
     comparison = comparisonFn(item[attribute],value)
     if comparison
	     found = item
	     break
	  found
  
  stripObjects: (objects) ->
   if objects != null
	   raw = []
	   for obj in objects
	    raw.push({data:obj.data,href:obj.href,recordID:obj.recordID})
	   
	   raw
	  else
	   objects
  
  clearAllRegEx: (regEx) ->
   @storage.clearAll(regEx)
  
  saveByKey: (key,value) -> @storage.store(key,value)
  getByKey: (key) -> @storage.get(key)
  clearByKey: (key) -> @storage.store(key)
  
  get: -> @getByKey(@name)
  save: (items) -> @saveByKey(@name, items) #, {expires:UserStorageService.expiry})
  clear: -> @clearByKey(@name)
  add: (item) ->
   items = @get()
   if items == '' || !items?
    items = [item]
   else
    items.push item
   @save items
  
  getName: (key) ->
   if key?
    return @name + "." + key
   else
    return @name
  
  saveById: (id, item) -> @saveByKey(@getName(id),item)
  getById: (id) -> @getByKey(@getName(id))
  clearById: (id) -> @clearByKey(@getName(id))
  
  current: () -> @getName("current")
  getCurrent: () -> @getByKey(@current())
  saveCurrent: (current) -> @getByKey(@current(), current)
  clearCurrent: -> @saveCurrent()

 angular.module('app').factory 'ModelStorageService', -> ModelStorageService
