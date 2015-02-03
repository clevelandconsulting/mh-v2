angular.module('app').service 'PlanProductRepository', [ '$q', 'planProduct', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, planProduct, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class PlanProductRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, planProduct, fmRestList, 'layout/Api-PlanProduct', 'planProduct')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
   # .then (data) =>
#     d = new Date()
#     console.log 'downloaded strategies', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
#     return data
 
  save: (pp) ->
   #console.log 'StrategyRepository.save', strategy
   if pp? && pp != undefined
	   if pp.href != ''
	    super(pp).then (data) =>
	     return { msg: data, obj: pp }
	   else 
	    @add(pp.data,'RestFM.Login').then (response) =>
	     #console.log response
	     pp.href = response.data.href
	     pp.recordID = response.data.recordID
	     return { msg: response, obj: pp }
   else
    d = @$q.defer()
    d.resolve { msg: "Nothing to save", obj: null}
    return d.promise
  
  makeNew: (plan_id, product) ->
   s = super({plan_id:plan_id}, planProduct)
   s.product = product
   s.handleProduct()
   #s.setTacticsLoaded(true)
   
   #console.log 'added strategy', s 
   
   s 
  
 new PlanProductRepository()

]