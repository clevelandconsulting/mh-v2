angular.module('app').service 'UserRepository', [ '$q', 'ApiService', 'user', 'UserStorageService', 
 class userRepository
  constructor: (@$q, @api, @user, @userStorage) ->
   @path = 'layout/Api-Staff'
   
  createUser: (apiResponse) ->
   try 
    d = apiResponse.data.data[0]
    h = apiResponse.data.meta[0].href
    r = apiResponse.data.meta[0].recordID
    return new @user d, h, r
   catch e then throw Error 'Invalid API Response'
   finally
 
  getOne: (path) ->
   @api.get(path).then (apiResponse) =>
    return @createUser apiResponse
   
  getUserByHref: (href) -> 
   @getOne(href)
  
  getUserById: (userid) ->
   @getOne(@path + '/' + userid + '.json')
   
     
  getUserByUsername: (username) ->
   @getOne(@path + '.json?RFMsF1=filemaker_accountname&RFMsV1=' + username)
]