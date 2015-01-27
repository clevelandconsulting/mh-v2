angular.module('app').controller 'PlanController', ['$scope', '$routeParams', '$location', '$modal', '$timeout', '$q', '$window', 'ScrollTo', 'PlanService', 'NotificationService','listManager', 'logger'
 class PlanController 
  constructor: (@scope, @routeParams, @location, @modal, @timeout, @q, @window, @scrollTo, @planService, @notifications, @listManager, @logger) ->
   @logger.on()
   @submitted = false
   
   unsaved_message = 'You have unsaved changes. These changes will be lost, are you sure you want to do this?'
   #console.log @planService
   #handle the case where a page change or reload occurs
   @window.onbeforeunload = (event) =>
    #console.log 'window.onbeforeunload event', event
    if @scope.planForm.$dirty
	    #message = 'Any unsaved data will be lost, are you sure you want to do this?'
	    #console.log event
	    if (typeof event == 'undefined')
	     event = @window.event
	    if (event)
	     event.returnValue = unsaved_message
	     
	    unsaved_message

   #handle the case where the location is about to change
   @scope.$on '$locationChangeStart', (event, newUrl, oldUrl) =>
    #console.log '$locationChangeStart event', event, newUrl, oldUrl
    if @scope.planForm.$dirty
     result = confirm unsaved_message
     if !result
      event.preventDefault()
   
   #set up the 2 tabs we need to track when active
   @tabs = [
	   {active: true},
	   {active: false}
   ]
   
   #set up the plan details information
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
   
   
   #load the lists we need
   @findProduct = (items,product) ->
    #console.log 'findProduct', items, product
    found = product
    for item in items
     if product.name == item.name && product.portfolio == item.portfolio
      #console.log 'found product', item
      found = item
      break
    found

   @updateControllerPlan = (plan) ->
    @plan = plan
    @plan.product = @findProduct(@productList.items,@plan.product)

   
   @monthList = @listManager.months
   @productList = @listManager.productList
   @mediumList = @listManager.mediumList
   
   #once lists are loaded, then get the plan
   @q.all([
	   @productList.loaded
	   @mediumList.loaded
   ])
   .then () =>
    @planService.loadPlan(@routeParams.id)
    .then (plan) =>
     @updateControllerPlan(plan)
    .catch (error) =>
     @notifications.error error.reason, "Could Not Retrieve Plan"
	  
  
  
  
  
  # strategies: () ->
#    @planService.getStrategies()
#   
#   tactics: (strategy) ->
#    @planService.getTactics(strategy)
#   
#   tacticCount: (strategy) ->
#    @planService.getTacticsCount(strategy)
  
  
  #--------------------------------------------------------------------
  #
  # Helper functions
  #
  #-------------------------------------------------------------------- 
  
  isLoading: () ->
   @planService.loading
  
  strategyNum: (strategies,i) ->
   (i + ( strategies.currentPage * strategies.pageSize ) + 1 )
  
  #--------------------------------------------------------------------
  #
  # Form validation
  #
  #--------------------------------------------------------------------
  
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
   required = @planService.requirements(name)
   #console.log required
   required
  
  #--------------------------------------------------------------------
  #
  # finding strategy & tactics on page and scrolling
  #
  #--------------------------------------------------------------------
    
  findStrategy: (strategy) ->
   if @planService.goToStrategyPage(strategy)
	   @goToStrategyId(strategy.id(),-180)
   
  findTactic: (strategy_id, tactic) ->
   if @planService.goToTacticPage(strategy_id,tactic)
	   @goToTacticId(tactic.id())
   # if paging
  
  goToTacticId: (id, yOffset) ->
   if !yOffset?
    yOffset = -180
   @timeout( 
	     ()=>
	      #use time out to call this after function completes dom is loaded
	      @goToId(id, yOffset)
	    ,
	     100
	    )
	 
	 goToStrategyId: (id,yOffset) ->
	  if !yOffset?
    yOffset = 50
	  @timeout( 
	     ()=>
	      #use time out to call this after function completes dom is loaded
	      @goToId(id, yOffset)
	    ,
	     100
	  )
	  
  goToId: (id, yOffset) ->
   @scrollTo.idOrName(id, yOffset)
  
  
  #--------------------------------------------------------------------
  #
  # Accordion over & opening actions
  #
  #--------------------------------------------------------------------
  
  hasTactics: (strategy) ->
   #console.log 'hasTactics()', strategy, @planService.tactics
   if @planService.tactics[strategy.id()]?
    #console.log 'checking', @planService.tactics[strategy.id()].items
    if @planService.tactics[strategy.id()].items.length > 0
     return true
    
   return false
   
   
  over: (strategy, isOver) ->
   strategy.over = isOver
   if !strategy.getTacticsLoaded()
    @planService.loadTactics(strategy, @plan.recordID)
    
  opened: (strategy) ->
   if !strategy.isOpen
	   #console.log 'isOpen', strategy.isOpen
	   strategy.wasOpened = true
	   if !strategy.getTacticsLoaded()
	    #console.log 'loading tactics'
	    @planService.loadTactics(strategy, @plan.recordID)
	    
	     #console.log 'tactics loaded'
	     #strategy = data
	   @goToStrategyId(strategy.id())
	  #else
	   #@goToTacticId('planContent',55)
   
  #--------------------------------------------------------------------
  #
  # Table Actions
  #
  #--------------------------------------------------------------------
  
  # sortTactics: (strategy, key) ->
#    oList = @planService.tactics[strategy.id()]
#    
#    if oList?
#     if oList.sortKey == key
# 	    oList.sortReverse = !oList.sortReverse
# 	   else
# 	    oList.sortKey = key
# 	    oList.sortReverse = oList.sortReverse
#     
#     oList.sort()
  
  #--------------------------------------------------------------------
  #
  # Major CRUD actions for PLAN
  #
  #--------------------------------------------------------------------
  
  save: (plan) ->
   if @scope.planForm.$dirty
   
    fn = () => @planService.save(plan)
		  success = (data) => 
		   @planService.allow_requirements(true)
		   @scope.planForm.$setPristine()
	   error = (error) =>
	    @planService.allow_requirements(true)
	    
	   @notifications.delayed 'update', 'plan', fn, success, error

  
  remove: (plan) ->
   @planService.allow_requirements(false)
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
    @planService.allow_requirements(true)
    
    fn = () => @planService.delete(item.object)
		  success = (data) => @location.path('plan')
	   
	   @notifications.delayed 'remove', 'plan', fn, success
   
   .catch (message) =>
    @planService.allow_requirements(true)
    #console.log 'Modal dismissed at: ' + new Date()
   
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
	   
	    fn = () => @planService.submit(plan)
	    success = (data) => @scope.planForm.$setPristine()
	   
	    @notifications.delayed 'submit', 'plan', fn, success
		    
   else
    console.log 'can\'t submit'
  
  refresh: (plan) ->
   
   fn = () => @planService.loadPlan(plan.recordID, true)
	  success = (data) => 
	   @updateControllerPlan(data)
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
  
  #--------------------------------------------------------------------
  #
  # Major CRUD actions for Strategy & Tactics
  #
  #--------------------------------------------------------------------
  
  clickAddStrategy: () ->
   @planService.allow_requirements(false)
   strategy = @planService.addStrategy(@plan)
   @findStrategy(strategy)
   @timeout( 
	     ()=>
	      #use time out to call this after function completes so form validation doesn't trigger
	      @scope.planForm.$setDirty()
	      @planService.allow_requirements(true)
	    ,
	     400
	    )
   
  clickAddTactic: (strategy) ->
   @planService.allow_requirements(false)
   tactic = @planService.addTactic(strategy)
   @findTactic(strategy.id(),tactic)
   @timeout( 
     ()=>
      #use time out to call this after function completes so form validation doesn't trigger
      @scope.planForm.$setDirty()
      @planService.allow_requirements(true)
    ,
     400
    )
   
  
  removeObject: (obj) ->
   @planService.allow_requirements(false)
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
  
  
  pretty: (object) ->
   JSON.stringify(object, undefined, 2)

]