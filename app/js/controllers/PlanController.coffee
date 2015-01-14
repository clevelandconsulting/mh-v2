angular.module('app').controller 'PlanController', ['$scope', '$routeParams', '$location', '$modal', '$timeout', 'PlansService', 'NotificationService','listManager',
 class PlanController 
  constructor: (@scope, @routeParams, @location, @modal, @timeout, @plansService, @notifications, @listManager) ->
   @submitted = false
   @selected = 1
   @details = [
    {
     'name':'Focus', 
     'message':'Narrow big picture problems into more manageable parts. Name the problem, identify issues and justify your plan to tackle this campaign.', 
     'property':'focus'
    },
    {
     'name':'Goals', 
     'message':'Goals should align to the campaign focus.', 
     'property':'goals'
    },
    {
     'name':'Target', 
     'message':'Who benefits from this campaign?', 
     'property':'target'
    },
    {
     'name':'Message', 
     'message':'Define the central idea or theme underlying all the marketing activities. Short compelling, declarative sentence that state just one benefit and addresses the target\'s problem/issue. should be unique, believable, and important, Use short, non-jargon language; adaptable to various media, conceptual statement but not necessarily copy.', 
     'property':'message'
    },
    {
     'name':'Key Indicators', 
     'message':'Quantifiable measures used to gage performance to meet campaign goals. What sequence of outcomes or changes will take your from the current environment to the vision of your campaign goal being realized? How will the outcomes of your campaign be measured? How long will it take for measureable results to be realized?', 
     'property':'key_indicators'
    },
    {
     'name':'Notes', 
     'message':'', 
     'property':'notes'
    }
    
   ]
   
   #console.log @listManager
   
   findProduct = (items,product) ->
    found = product
    for item in items
     if product.name == item.name && product.portfolio == item.portfolio
      #console.log 'found product', item
      found = item
      break
    found

   
   @monthList = @listManager.months
   @productList = @listManager.productList
   
   @productList.loaded.then () =>
	   @plan = @plansService.getSelected()
	   if !@plan?
	    @plansService.getOne(@routeParams.id)
	    .then (data) =>
	     @plan = data
	     @plan.product = findProduct(@productList.items,@plan.product)
	    .catch (error) =>
	     @notifications.error error, "Could Not Retrieve Plan"
      #@location.path('plan')
    else 
     @plan.product = findProduct(@productList.items,@plan.product)
  
  disabled: (property) ->
   if @plan?
    @plan.isDisabled(property)
   else
    true
      
  invalidClass: (property) -> 
   if @scope.planForm[property].$invalid && (!@scope.planForm[property].$pristine || @submitted)
    return "error"
   else
    return ""
   
  required: (name) ->
   #console.log 'checking requirements', name
   required = @plansService.requirements(name)
   #console.log required
   required
  
  submit: (plan) ->
   console.log @scope.planForm
   @submitted = true
   if @scope.planForm.$valid
    console.log 'submitting'
   else
    console.log 'can\'t submit'
  
  refresh: (plan) ->
   @plansService.getFromServer(plan.recordID)
   .then (data) =>
    @plan = data
    @notifications.success 'Your data has been refreshed.'
   .catch (error) =>
    @notifications.error error, 'Unable To Refresh'  
  
  save: (plan) ->
   @plansService.allow_requirements(false)
   @plansService.save(plan)
   .then (data) =>
    @scope.planForm.$setPristine(true)
    @plansService.allow_requirements(true)
    @notifications.success data, 'Updated!'
   .catch (error) =>
    @plansService.allow_requirements(true)
    @notifications.error error, 'Not Updated!'
  
  remove: (plan) ->
  
   @plansService.allow_requirements(false)
   modalInstance = @modal.open {
    templateUrl: 'modals/modalRemove.html',
    controller: 'ModalInstanceController',
    resolve: {
      item: () => {name:'plan',object:plan}
    }
   }
   
   modalInstance.result
   .then (item) =>
    #console.log item.object
    @plansService.allow_requirements(true)
    @plansService.delete(item.object)
	   .then (data) =>
	    @timeout( 
	     ()=>
	      @notifications.success data, "Plan Removed"
	      @location.path('plan')
	      
	    ,
	     400
	    )
	   .catch (error) =>
	    @notifications.error error, "Plan NOT Removed"
   .catch (message) =>
    @plansService.allow_requirements(true)
    #console.log 'Modal dismissed at: ' + new Date()
   
  
  pretty: (object) ->
   JSON.stringify(object, undefined, 2)

]