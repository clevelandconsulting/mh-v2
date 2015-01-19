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
  
  get: -> @storage.get(@name)
  save: (items) -> @storage.store(@name, items) #, {expires:UserStorageService.expiry})
   
  clear: -> @storage.store(@name)
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
  
     
  saveById: (id, item) -> @storage.store(@getName(id),item)
  getById: (id) -> @storage.get(@getName(id))
  clearById: (id) -> @storage.store(@getName(id))
  
  current: () -> @getName("current")
  getCurrent: () -> @storage.get(@current())
  saveCurrent: (current) -> @storage.store(@current(), current)
  clearCurrent: -> @saveCurrent()

 angular.module('app').factory 'ModelStorageService', -> ModelStorageService