angular.module("app").config ['localStorageServiceProvider', '$logProvider', (localStorageServiceProvider, logProvider) ->
 #console.log 'configing'
 localStorageServiceProvider.setPrefix('mhv2')
 logProvider.debugEnabled(true)
]

angular.module('app').filter 'startFrom', () ->
 (input, start) ->
  input.slice(start)
