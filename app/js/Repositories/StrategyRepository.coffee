angular.module('app').service 'StrategyRepository', [ '$q', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class StrategyRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, fmRestModel, fmRestList, 'layout/Api-Strategy', 'strategy')
   
  getAllForPlan: (plan_id, pagesize) ->
   @getAllByKey('plan_id', plan_id, @sortScript, pagesize)
  
  #add:(job_id, staff_id, type, date, hours, note) ->
  # project = new @model {date:date,hours:hours,job_id:job_id,staff_id:staff_id,type:type,note:note},'',''
  # super(time.data)
    
  update: (time) ->
   data = {job_id: time.data.job_id, staff_id: time.data.staff_id, type: time.data.type, date: time.data.date, hours:time.data.hours, note:time.data.note }
   super(data,time.href)
   
  newList: (times) ->
   return new fmRestList(times,fmRestModel)
 
  
 new StrategyRepository()

]