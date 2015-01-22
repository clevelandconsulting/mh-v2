angular.module('app',['ngRoute', 'ngAnimate', 'mm.foundation', 'LocalStorageModule', 'ng-currency'])


angular.element(document).ready () ->
 #console.log 'bootstrapping...'
 
 #add string prototype
 String.prototype.toProperCase = () ->
  this.toLowerCase().replace(
   /^(.)|\s(.)/g
  , 
   ($1) -> $1.toUpperCase()
  )
 
 
 angular.bootstrap document, ["app"]