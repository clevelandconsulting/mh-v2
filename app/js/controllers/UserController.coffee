angular.module('app').controller 'UserController', ['$scope', '$location', 'UsersService', 'NotificationService', '$timeout',

 class UserController
  constructor: (@scope, @$location, @userService, @notifications, @timeout) ->
   
  changePassword: () ->
   if @newpass != '' and @newpass != undefined and @newpass? and @oldpass != ''and @oldpass != undefined and @oldpass? and @confirmpass != '' and @confirmpass != undefined and @confirmpass?
	   if @confirmpass == @newpass
	   
	    promise = @timeout( 
	     ()=>
	      #use time out to call this after function completes dom is loaded
	      @notifications.info 'Attempting to change your password.', "Changing Password"
	    ,
	     200
	    )
	   
		   @userService.changePassword(@newpass,@oldpass)
		   .then (data) =>
		    @newpass = @oldpass = @confirmpass = ""
		    @timeout.cancel(promise)
		    @notifications.clear()
		    @notifications.success "Your password has been updated.", "Password Changed"
		    #console.log 'change password result', data
		   .catch (error) =>
		    @timeout.cancel(promise)
		    @notifications.clear()
		    @notifications.error error.msg, error.title
		    #console.log 'change password error', error
		  else
		   @notifications.error "Passwords Do Not Match!", "The new password and confirmation do not match.  Your password has not been changed."
		   #console.log 'passwords don\'t match'
		 else
		  @notifications.error "Password Is Blank!", "All fields must be filled out, blank passwords are not allowed."
		  #console.log 'blank passwords are not allowed'
	    
 	 
]