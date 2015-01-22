angular.module('app').factory 'strategy', [ 'fmRestModel', (fmRestModel) ->
 class strategy extends fmRestModel 
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c'
   ]
   @tactics = []
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
  
  activeTactics: () ->
   count = 0
   for tactic in @tactics
    if !tactic.removed
     count = count + 1
   
   count
  
  sortTactics: () ->
   @tactics.sort (a, b) ->
    keyA = new Date(a.begin_date)
    keyB = new Date(b.begin_date)
    
    if keyA < keyB
     return -1
    if keyA > keyB
     return 1
     
    keyA = new Date(a.data.__created_ts)
    keyB = new Date(b.data.__created_ts)
    
    #console.log 'went to backup', keyA, keyB
    
    if keyA < keyB
     return -1
    if keyA > keyB
     return 1
    
    return 0
  
  addTactic: (tactic) ->
   @tactics.push(tactic)
   
  removeTactic: (tactic) ->
   index = @tactics.indexOf(tactic)
   if index > -1
    @tactics.splice(index,1)
  
]