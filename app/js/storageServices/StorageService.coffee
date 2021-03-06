class StorageService
  constructor: (@localStorage) ->

  store: (name,value,expires) ->
   if !value? || value==''
    @localStorage.remove(name)
   else
    @localStorage.set(name,value)
   
  get: (name) ->
   @localStorage.get(name)
   
  clearAll: (regEx) ->
   @localStorage.clearAll(regEx)
   
angular.module('app').service 'StorageService', ['localStorageService', (localStorage) -> new StorageService(localStorage) ]