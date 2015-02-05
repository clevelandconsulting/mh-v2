angular.module('app',['ngRoute', 'ngAnimate', 'mm.foundation', 'LocalStorageModule', 'ng-currency', 'ngScrollTo', 'base64', 'angular.filter','720kb.datepicker'])


angular.element(document).ready () ->
 #console.log 'bootstrapping...'
 
 #add string prototype
 String.prototype.toProperCase = () ->
  this.toLowerCase().replace(
   /^(.)|\s(.)/g
  , 
   ($1) -> $1.toUpperCase()
  )
 
 String.prototype.shorten = (length) ->
  if this?
   if this.length > length
    return this.substring(0,length-3) + '...'
   else
    return this.toString()
  else
   return '' 
 
 
 angular.bootstrap document, ["app"]