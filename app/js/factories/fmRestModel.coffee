angular.module('app').factory 'fmRestModel', ['guid', (guid) ->
	class fmRestModel
	 constructor: (@data,@href,@recordID) ->
	  @resetOriginal()
	  @non_modifiable_properties = []
	  error = Error 'Invalid data for record'
	  
	  if @data == undefined || @href == undefined || @recordID == undefined
	   throw error
	   
	  if (!Date.now) 
	    Date.now = -> new Date().getTime()
	 
	 id: () ->
	  @data.__guid
	 
	 resetOriginal: () ->
	  @original = {}
	  
	  for k,v of @data
	   @original[k] = v
	 
	 resetCreatedTS: (no_original_update) ->
	  @data.__created_ts = @formatTSForFM(new Date().getTime())
	  if no_original_update? && !no_original_update
	   @resetOriginal()
	  
	 resetGuid: (no_original_update) ->
	  @data.__guid = guid.create()
	  if no_original_update? && !no_original_update
	   @resetOriginal()
	   
	 markRemoved: (mark) ->
	  if !mark?
	   @removed = true
	  else
	   @removed = mark
	   
	 isRemoved: () ->
	  if @removed?
	   @removed
	  else
	   false
	   
	 hasChanged: () ->
	  #console.log 'checking for changes', @
	  if @href != ''
		  changed = false
		  for k,v of @data
		   if @original[k] != @data[k]
		    changed = true
		    break
		 else
		  changed = true
	  
	  changed
	 
	 formatFMDateForJS: (date) ->
	  if date? && date != '' && date != undefined
	   new Date(date)
	  else
	   null
	 
	 formatDateForFM: (date) ->
	  if date? && date != '' && date != undefined
	   date = new Date(date)
	   sep = "/"
	   appendZero = (number) ->
	    ("0" + number.toString()).slice(-2)
	   return appendZero(date.getMonth()+1) + sep + appendZero(date.getDate()) + sep + date.getFullYear() 
	  else
	   return null
	 
	 formatTSForFM: (date) ->
	  if date? && date != '' && date != undefined
	   date = new Date(date)
	   sep = "/"
	   appendZero = (number) ->
	    ("0" + number.toString()).slice(-2)
	   return appendZero(date.getMonth()+1) + sep + appendZero(date.getDate()) + sep + date.getFullYear() + ' ' + appendZero(date.getHours()) + ':' + appendZero(date.getMinutes()) + ':' + appendZero(date.getSeconds())
	  else
	   return null
	 
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
 
   
]