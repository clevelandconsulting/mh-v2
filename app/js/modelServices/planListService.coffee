angular.module('app').service 'PlanListService', ['$q', 'PlanRepository', 'SchoolYear',
 class PlanListService
  constructor: (@q, @PlanRepository, @SchoolYear) ->
   @filter = ''
  
  getByStatus: (status, pagesize) ->
   @PlanRepository.getByStatus(status,pagesize)
  
  getByYear: (year, status, pagesize) ->
   @PlanRepository.getByYear(year,status,pagesize)
  
  getAll: (pagesize) ->
   @PlanRepository.getPlans(pagesize)
   
  getByHref: (href, pagesize) ->
   @PlanRepository.getPage(href,pagesize)
   
  add: () ->
    plan = @PlanRepository.makeNew('Untitled', @SchoolYear.currentYear)
    @PlanRepository.add(plan.data)
   
]