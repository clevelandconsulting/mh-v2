angular.module('app').factory 'plan', [ 'fmRestModel', (fmRestModel) ->
 class plan extends fmRestModel
  
  @submission_requirements = {
	   product: true,
	   focus: true,
	   goals: true,
	   target: true,
	   message: true,
	   key_indicators: true,
	   begin: true,
	   end: true
  }
  
  @locked_after_submission = {
	  product: true,
   focus: true,
   goals: true,
   target: true,
   message: true,
   key_indicators: true
  }
 
  constructor: (data,href,recordID,strategies) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c', 'staff_full_name_c', 'staff_account_name_c'
   ]
   
   #handle the product for display
   @product = {
	   name: @data.product
	   value: @data.product
	   portfolio: @data.portfolio
	   discipline: @data.discipline
   }
   
   #setup the strategies
   if !strategies?
    @strategies = []
   else
    @strategies = strategies
   
   #handle the dates for display
   @date_approved = @formatFMDateForJS(@data.date_approved)
   @date_submitted = @formatFMDateForJS(@data.date_submitted) 
  
  
  handleDates: () ->
   if @date_approved?
    @data.date_approved = @formatDateForFM(@date_approved)
    
   if @date_submitted?
    @data.date_submitted = @formatDateForFM(@date_submitted)
  
  handleProduct: () ->
   @data.portfolio = @product.portfolio
   @data.discipline = @product.discipline
   @data.product = @product.value
  
  addStrategy: (strategy) ->
   @strategies.push(strategy)
  
  
  prepForSave: () -> 
   @handleDates()
   @handleProduct()
  
  prepForSubmit: ()->
   @data.status = "Submitted"
   @date_submitted = new Date().getTime()
  
  unSubmit: () ->
   @data.status = "Draft"
   @date_submitted = ''
   @data.date_submitted = ''
  
  strategyCount: () ->
   length = @strategies.length
   if length > 0
    for x in @strategies
     if x.removed
      length = length - 1
      
   return length
      
  
  removeStrategy: (strategy) ->
   index = @strategies.indexOf(strategy)
   if index > -1
    @strategies.splice(index,1)
  
  sortStrategies: () ->
   #console.log 'sorting strategies'
   @strategies.sort (a, b) =>
    keyA = a.date
    keyB = b.date
    if keyA < keyB
     return -1
    if keyA > keyB
     return 1
    return 0
  
  isDisabled: (property) ->
   if @status() == 'Draft'
    return false
   else
    d = plan.locked_after_submission[property]
    return (d? && d)
    
  
  readyForSubmission: () ->
   ready = true
   @handleProduct()
   for k, v of plan.submission_requirements
    #console.log k, v
    if v
     if !@data[k]? || @data[k]==''
      ready = false
      break;
   ready
  
  status: () ->
   if @data.status == null || @data.status == ''
    return 'Draft'
   else
    return @data.status
]