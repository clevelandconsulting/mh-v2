class fmRestModel
 constructor: (@data,@href,@recordID) ->
  @non_modifiable_properties = []
  error = Error 'Invalid data for record'
  
  if @data == undefined || @href == undefined || @recordID == undefined
   throw error
   
  if (!Date.now) 
    Date.now = -> new Date().getTime()
 
 formatFMDateForJS: (date) ->
  if date? && date != ''
   new Date(date)
  else
   null
 
 formatDateForFM: (date) ->
   sep = "/"
   appendZero = (number) ->
    ("0" + number.toString()).slice(-2)
   appendZero(date.getMonth()+1) + sep + appendZero(date.getDate()) + sep + date.getFullYear() 
 
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