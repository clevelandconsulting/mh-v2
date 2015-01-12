angular.module('app').factory 'plan', [ 'fmRestModel', (fmRestModel) ->
 class plan extends fmRestModel
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
  
  
  status: () ->
   if @data.status == null || @data.status == ''
    return 'Draft'
   else
    return @data.status
]