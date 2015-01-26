angular.module("app").config ['localStorageServiceProvider', '$logProvider', 'ngScrollToOptionsProvider', (localStorageServiceProvider, logProvider, ngScrollToOptionsProvider) ->
 #console.log 'configing'
 localStorageServiceProvider.setPrefix('mhv2')
 logProvider.debugEnabled(true)
 ngScrollToOptionsProvider.extend({
  handler: (el) -> $(el).scrollintoview()
 })
]

angular.module('app').filter 'startFrom', () ->
 (input, start) ->
  input.slice(start)