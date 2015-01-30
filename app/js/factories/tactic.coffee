angular.module('app').factory 'tactic', [ 'fmRestModel', 'listManager', (fmRestModel, listManager) ->
 class tactic extends fmRestModel 
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c'
   ]
   @removed = false
  
   
   #console.log listManager
   
   @mediumList = listManager.mediumList
   @medium = @findMedium(@mediumList.items, {name:@data.medium, value: @data.medium_type})
   
   @medium.sortKey = () -> 'name'
   
   @begin_date = @formatFMDateForJS(@data.begin_date)
   @end_date = @formatFMDateForJS(@data.end_date) 
   
   @__defineGetter__ "budget", () =>
    #console.log 'called budget getter'
    if @_budget != @data.budget
     console.log 'parsing float'
     @_budget = @data.budget
     if @data.budget == '' || !@data.budget?
      @_parsedBudget = 0
     else
      @_parsedBudget = parseFloat(@data.budget)
   
    @_parsedBudget
  
  findMedium: (items,medium) ->
    #console.log 'searching for medium', items
    found = medium
    for item in items
     if medium.name == item.name && medium.value == item.value
      found = item
      break
    found
  
  handleMedium: () ->
   @data.medium = @medium.name
   @data.medium_type = @medium.value
   
  handleDates: () ->
   if @begin_date?
    @data.begin_date = @formatDateForFM(@begin_date)
    
   if @end_date?
    @data.end_date = @formatDateForFM(@end_date)
  
  prepForSave: () ->
   @handleMedium()
   @handleDates()
  
  title: (length) ->
   if @data.medium?
    if @data.medium.length > length
     return @data.medium.substring(0,length-3) + '...'
    else
     return @data.medium
   else
    return ''
    
]