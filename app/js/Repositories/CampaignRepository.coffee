angular.module('app').service 'CampaignRepository', [ '$q', 'fmRestModel', 'fmRestList', 'fmRestRepository', 'ApiService', ($q, fmRestModel, fmRestList, fmRestRepository, ApiService) -> 
 class CampaignRepository extends fmRestRepository
  constructor : -> 
   super($q, ApiService, fmRestModel, fmRestList, 'layout/Campaign', 'campaign')
  
  getAllForStaff: (staff_id, pagesize) ->
   super(staff_id,@sortScript, pagesize)
   
 
  
 new CampaignRepository()

]