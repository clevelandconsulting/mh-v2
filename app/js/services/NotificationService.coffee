angular.module('app').service 'NotificationService', ['$timeout', 'ToastrService', 'ConjugationService',
 class notifications
  constructor: (@timeout, @toastrService, @conjugationService) ->

  delayed: (verb, object, fn, success, error, delay) ->
   info = @timeout( 
	     ()=>
	      v = @conjugationService.present_continuous(verb).toProperCase()
	      msg = v + ' ' + object + '...'
	      title = v + '...'
	      @info msg,title
	    ,
	     if delay?
	      delay
	     else
 	     500
	  )
	  
	  fn.apply()
	  .then (data) =>
	   @timeout.cancel(info)
	   if success?
 	   success.apply(null, [data])
 	  @clear()

	   v = @conjugationService.past(verb).toProperCase()
	   msg = v + ' ' + object + '!'
	   title = v + '!'
 	  @success msg, title
 	  
 	 .catch (errorResponse) =>
 	  @timeout.cancel(info)
 	  if error?
 	   console.log errorResponse
 	   error.apply(null, [errorResponse])
 	  @clear()
 	  v = @conjugationService.past(verb)
 	  msg = object.toProperCase() + " was not " + v + ". " + errorResponse
 	  title = 'Not ' + v.toProperCase() + '!'
 	  @error msg, title
 	  
	  
   
  error: (msg, title) -> 
   @toastrService.error msg, title
  
  success: (msg, title) -> 
   @toastrService.success msg, title
   
  info: (msg, title) ->
   @toastrService.info msg, title
   
  clear: (optional) ->
   @toastrService.clear(optional)
    
]