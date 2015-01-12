angular.module('app').service 'NotificationService', ['ToastrService', 
 class notifications
  constructor: (@toastrService) ->
   
  error: (msg, title) -> 
   @toastrService.error msg, title
  
  success: (msg, title) -> 
   @toastrService.success msg, title
   
  info: (msg, title) ->
   @toastrService.info msg, title
   
  clear: (optional) ->
   @toastrService.clear(optional)
    
]