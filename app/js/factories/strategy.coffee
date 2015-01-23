angular.module('app').factory 'strategy', [ 'fmRestModel', (fmRestModel) ->
 class strategy extends fmRestModel 
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c', '__tactic_count_c'
   ]
   @setTacticsLoaded(false)
   @date = @formatFMDateForJS(@data.__created_ts)
   
   if !@date?
    @date = new Date(Date.now())
    
   @removed = false
  
  title: (length) ->
   if @data.description?
    if @data.description.length > length
     return @data.description.substring(0,length-3) + '...'
    else
     return @data.description
   else
    return '' 
  
  setTacticsLoaded: (loaded) ->
   @tactics_loaded = loaded
  
  getTacticsLoaded: () ->
   @tactics_loaded 
  
  dbCount: () ->
   cnt = @data.tactic_count_c
   if cnt == ''
    cnt = 0
   cnt
   
  # activeTactics: () ->
#    count = 0
#    if !@getTacticsLoaded()
#     count = @data.tactic_count_c
#    else
# 	   for tactic in @tactics
# 	    if !tactic.removed
# 	     count = count + 1
#    if count == ''
#     count = 0
#    count

]