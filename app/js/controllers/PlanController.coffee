angular.module('app').controller 'PlanController', ['$scope', '$routeParams', '$location', '$modal', '$timeout', '$q', '$window', 'PlansService', 'NotificationService','listManager', 'logger'
 class PlanController 
  constructor: (@scope, @routeParams, @location, @modal, @timeout, @q, @window, @plansService, @notifications, @listManager, @logger) ->
   @logger.on()
   @submitted = false
   
   
   #handle the case where a page change or reload occurs
   @window.onbeforeunload = (event) =>
    #console.log 'window.onbeforeunload event', event
    if @scope.planForm.$dirty
	    message = 'Any unsaved data will be lost, are you sure you want to do this?'
	    #console.log event
	    if (typeof event == 'undefined')
	     event = @window.event
	    if (event)
	     event.returnValue = message
	     
	    message

   #handle the case where the location is about to change
   @scope.$on '$locationChangeStart', (event, newUrl, oldUrl) =>
    #console.log '$locationChangeStart event', event, newUrl, oldUrl
    if @scope.planForm.$dirty
     result = confirm 'Any unsaved data will be lost, are you sure you want to do this?'
     if !result
      event.preventDefault()
     
   @tabs = [
	   {active: true},
	   {active: false}
   ]
   
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
   @mediumList = @listManager.mediumList
   
   @q.all([
	   @productList.loaded
	   @mediumList.loaded
   ])
   .then () =>
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
  
  clickAddStrategy: () ->
   @plansService.allow_requirements(false)
   @plansService.addStrategy(@plan)
   @timeout( 
	     ()=>
	      #use time out to call this after function completes so form validation doesn't trigger
	      @scope.planForm.$setDirty()
	      @plansService.allow_requirements(true)
	    ,
	     400
	    )
   
  clickAddTactic: (strategy) ->
   #@logger.clog strategy
   @plansService.allow_requirements(false)
   @plansService.addTactic(strategy)
   @timeout( 
     ()=>
      #use time out to call this after function completes so form validation doesn't trigger
      @scope.planForm.$setDirty()
      @plansService.allow_requirements(true)
    ,
     400
    )
   
  
  removeObject: (obj) ->
   @plansService.allow_requirements(false)
   modalInstance = @modal.open {
    templateUrl: 'modals/modalRemove.html',
    controller: 'ModalInstanceController',
    resolve: {
	     undo: () => true,
      item: () => {name:obj.constructor.name,object:obj}
    }
   }
   
   modalInstance.result
   .then (item) =>
    item.object.markRemoved()
    @scope.planForm.$setDirty()
  
  isLoading: () ->
   @plansService.loading
  
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
   #console.log @scope.planForm
   @submitted = true
   if @scope.planForm.$valid
   
    modalInstance = @modal.open {
	    templateUrl: 'modals/modalSubmit.html',
	    controller: 'ModalInstanceController',
	    resolve: {
		     undo: () => null,
	      item: () => {name:'plan',object:@plan}
	    }
	   }
   
	   modalInstance.result
	   .then (item) =>
	   
	    fn = () => @plansService.submit(plan)
	    success = (data) => @scope.planForm.$setPristine()
	   
	    @notifications.delayed 'submit', 'plan', fn, success
		    
   else
    console.log 'can\'t submit'
  
  refresh: (plan) ->
   
   fn = () => @plansService.getFromServer(plan.recordID)
	  success = (data) => 
	   @plan = data
	   @scope.planForm.$setPristine()
  
   if @scope.planForm.$dirty
    modalInstance = @modal.open {
	    templateUrl: 'modals/modalRefresh.html',
	    controller: 'ModalInstanceController',
	    resolve: {
		     undo: () => null,
	      item: () => {name:'plan',object:@plan}
	    }
	   }
   
	   modalInstance.result
	   .then (item) =>
     @notifications.delayed 'refresh', 'plan', fn, success
   else
    @notifications.delayed 'refresh', 'plan', fn, success
    
    
  save: (plan) ->
   if @scope.planForm.$dirty
   
    fn = () => @plansService.save(plan)
		  success = (data) => 
		   @plansService.allow_requirements(true)
		   @scope.planForm.$setPristine()
	   error = (error) =>
	    console.log 'plan controller.save error', error
	    @plansService.allow_requirements(true)
	    
	   @notifications.delayed 'update', 'plan', fn, success, error

  
  remove: (plan) ->
   @plansService.allow_requirements(false)
   modalInstance = @modal.open {
    templateUrl: 'modals/modalRemove.html',
    controller: 'ModalInstanceController',
    resolve: {
	     undo: () => false,
      item: () => {name:'plan',object:plan}
    }
   }
   
   modalInstance.result
   .then (item) =>
    @plansService.allow_requirements(true)
    
    fn = () => @plansService.delete(item.object)
		  success = (data) => @location.path('plan')
	   
	   @notifications.delayed 'remove', 'plan', fn, success
   
   .catch (message) =>
    @plansService.allow_requirements(true)
    #console.log 'Modal dismissed at: ' + new Date()
   
  
  pretty: (object) ->
   JSON.stringify(object, undefined, 2)

]