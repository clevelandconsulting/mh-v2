angular.module('app').service 'UserRepository', [ '$q', 'ApiService', 'user', 'UserStorageService', 'fmRestList', 'fmRestRepository', ($q, ApiService, user, userStorage, fmRestList, fmRestRepository) ->
 class UserRepository extends fmRestRepository
  constructor: ->
   super($q, ApiService, user, fmRestList, 'layout/Api-Staff', 'staff')
   #@path = 'layout/Api-Staff'
   
  createUser: (apiResponse) ->
   try 
    d = apiResponse.data.data[0]
    h = apiResponse.data.meta[0].href
    r = apiResponse.data.meta[0].recordID
    return new user d, h, r
   catch e then throw Error 'Invalid API Response'
   finally
 
  getOne: (path) ->
   @api.get(path).then (apiResponse) =>
    return @createUser apiResponse
   
  getUserByHref: (href) -> 
   @getOne(href)
  
  getUserById: (userid) ->
   @getOne(@path + '/' + userid + '.json')
   
  
  changePassword: (userid, newpass, oldpass) ->
   parameter = @makeFMParameter({id:userid,newPassword:newpass,oldPassword:oldpass})
   @runScript('Staff.ChangePassword [ id ; newPassword ; oldPassword ]', parameter)
  
  getUserByUsername: (username) ->
   @getOne(@path + '.json?RFMsF1=filemaker_accountname&RFMsV1=' + username)
   
   
 
 new UserRepository()
]