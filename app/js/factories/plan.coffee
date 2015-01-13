angular.module('app').factory 'plan', [ 'fmRestModel', (fmRestModel) ->
 class plan extends fmRestModel
  
  @submission_requirements = {
	   product: true,
	   focus: true,
	   goals: true,
	   target: true,
	   message: true,
	   key_indicators: true
  } 
 
  constructor: (data,href,recordID) ->
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
   
  status: () ->
   if @data.status == null || @data.status == ''
    return 'Draft'
   else
    return @data.status
]