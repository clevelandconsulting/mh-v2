angular.module('app',['ngRoute', 'mm.foundation', 'LocalStorageModule'])


angular.element(document).ready () ->
 #console.log 'bootstrapping...'
 angular.bootstrap document, ["app"]