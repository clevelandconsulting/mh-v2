angular.module('app',['ngRoute', 'ngAnimate', 'mm.foundation', 'LocalStorageModule'])


angular.element(document).ready () ->
 #console.log 'bootstrapping...'
 angular.bootstrap document, ["app"]