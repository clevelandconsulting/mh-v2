angular.module('app').service 'CredentialStorageService', [ 'StorageService', '$base64', class CredentialStorageService
  constructor: (@storageService, @base64) ->
  
  form: (username,password) ->
   if username != ''
    auth = @base64.encode(username + ':' + password)
    {auth: auth, username: username}
   else
    ''
    
  get: ->
   cred = @storageService.get('credentials')
   if cred?
    cred
   else
    ''
  clear: -> @save()
   
  save: (credentials) -> 
   #console.log 'saving credentials', credentials
   result = @storageService.store('credentials', credentials)
   #console.log result
   result
  
]  
# new credentialStorageService()
#] 