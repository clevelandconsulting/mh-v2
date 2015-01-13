class fmRestModel
 constructor: (@data,@href,@recordID) ->
  @non_modifiable_properties = []
  error = Error 'Invalid data for record'
  
  if @data == undefined || @href == undefined || @recordID == undefined
   throw error
   
  if (!Date.now) 
    Date.now = -> new Date().getTime()
 
 getUpdateData: () ->
  copy = {}
  for attr of @data
   if @data.hasOwnProperty(attr)
    modifiable = true
    for prop in @non_modifiable_properties
     if attr == prop
      modifiable = false
      break;
    if modifiable
     copy[attr] = @data[attr]
  copy
 
   
angular.module('app').factory 'fmRestModel', -> fmRestModel