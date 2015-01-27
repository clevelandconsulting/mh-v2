angular.module("app").config ['localStorageServiceProvider', '$logProvider', 'ngScrollToOptionsProvider', (localStorageServiceProvider, logProvider, ngScrollToOptionsProvider) ->
 #console.log 'configing'
 localStorageServiceProvider.setPrefix('mhv2')
 logProvider.debugEnabled(true)
 ngScrollToOptionsProvider.extend({
  handler: 
   (el, offset) -> 
    #console.log 'scrolling to ', el, offset
    $(el).scrollintoview({yOffset:offset})
    
    #$(el).scrollIntoView(250, "easeOutExpo", () -> alert("done scroll!") )
    #if offset?
    # window.scrollTo(0, ($(el).offset().top - offset))
 })
]

angular.module('app').filter 'startFrom', () ->
 (input, start) ->
  input.slice(start)