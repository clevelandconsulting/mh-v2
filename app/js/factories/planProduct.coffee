angular.module('app').factory 'planProduct', [ 'fmRestModel', (fmRestModel) ->
 class planProduct extends fmRestModel 
  constructor: (data,href,recordID) ->
   super(data,href,recordID)
   @lastAccessed = Date.now()
   @non_modifiable_properties = [
	   '__guid', '__created_ts', '__created_an', '__modified_ts', '__modified_an', '_common_one_c'
   ]
   
   @product = {
	   name: @data.product
	   value: @data.product
	   portfolio: @data.portfolio
	   discipline: @data.discipline
   }
   
   @removed = false
  
  productMatch: (product) ->
   #console.log 'comparing', product, @product
   if @product? && product?
    if @product.value == product.value && @product.discipline == product.discipline && @product.portfolio == product.portfolio
     #console.log 'found'
     return true
   
   return false
  
  handleProduct: () ->
   if @product?
    @data.portfolio = @product.portfolio
    @data.discipline = @product.discipline
    @data.product = @product.value
   else
    @data.portfolio = ''
    @data.discipline = ''
    @data.product = ''

]