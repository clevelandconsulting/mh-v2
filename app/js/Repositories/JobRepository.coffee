angular.module('app').service 'JobRepository', [ '$q', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class JobRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, fmRestModel, fmRestList, 'layout/Job', 'job')
  
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
  getAllForJob: (job_id, pagesize) ->
   @getAllByKey('job_id', job_id, @sortScript, pagesize)
  
  #add:(job_id, staff_id, type, date, hours, note) ->
  # project = new @model {date:date,hours:hours,job_id:job_id,staff_id:staff_id,type:type,note:note},'',''
  # super(time.data)
    
  update: (time) ->
   data = {job_id: time.data.job_id, staff_id: time.data.staff_id, type: time.data.type, date: time.data.date, hours:time.data.hours, note:time.data.note }
   super(data,time.href)
   
  newList: (times) ->
   return new fmRestList(times,fmRestModel)
 
  
 new JobRepository()

]