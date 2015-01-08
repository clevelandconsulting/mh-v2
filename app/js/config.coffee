angular.module("app").config ['localStorageServiceProvider', '$logProvider', (localStorageServiceProvider, logProvider) ->
 localStorageServiceProvider.setPrefix('mhv2')
 logProvider.debugEnabled(true)
]