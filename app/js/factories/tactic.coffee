angular.module('app').factory 'tactic', [ 'fmRestModel', (fmRestModel) ->
 class tactic extends fmRestModel 
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c'
   ]
   @removed = false
  
   @begin_date = @formatFMDateForJS(@data.begin_date)
   @end_date = @formatFMDateForJS(@data.end_date) 
  
  
  handleDates: () ->
   if @begin_date?
    @data.begin_date = @formatDateForFM(@begin_date)
    
   if @end_date?
    @data.end_date = @formatDateForFM(@end_date)
    
  title: (length) ->
   if @data.medium?
    if @data.medium.length > length
     return @data.medium.substring(0,length-3) + '...'
    else
     return @data.medium
   else
    return ''
  
]