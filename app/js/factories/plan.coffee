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
   @product = {
	   name: @data.product
	   value: @data.product
	   portfolio: @data.portfolio
	   discipline: @data.discipline
   }
   if !strategies?
    @strategies = []
   else
    @strategies = strategies
  
  addStrategy: (strategy) ->
   @strategies.push(strategy)
   
  removeStrategy: (strategy) ->
   index = @strategies.indexOf(strategy)
   if index > -1
    @strategies.splice(index,1)
  
  isDisabled: (property) ->
   if @status() == 'Draft'
    return false
   else
    d = plan.locked_after_submission[property]
    return (d? && d)
    
  
  readyForSubmission: () ->
   ready = true
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