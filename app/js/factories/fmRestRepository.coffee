class fmRestRepository
  @fieldNameKey: 'RFMsF'
  @fieldValueKey: 'RFMsV'
  @scriptKey: 'RFMscript'
  @pageKey: 'RFMmax'
  
  constructor: (@$q, @api, @model, @modelList, @path, @modelName) ->
  
  getByRecordId: (id) ->
   path = @path + '/' + id + '.json'
   return @getAll(path).then (data) =>
    #console.log data.items[0]
    valid = @validate(data.items[0].data)
    if valid
     return data.items[0]
    else
     return null
  
  validate: (data) ->
   #console.log 'validating...', data
   if !data.__guid? || data.__guid == ''
    return false
   
   true 
  
  getAll: (path) ->
   if !path?
    path = @path
    
   #console.log 'creating fmRestRepository.getAll() promise'
   d = @$q.defer()
   
   successFn = (response) =>
    #console.log 'making new ', @modelList, 'with', @model
    results = new @modelList response.data, @model
    #console.log 'resolving fmRestRepository.getAll() promise'
    d.resolve results

   @api.get(path).then successFn, (response) =>
    if response.data?
     fmcode = parseInt(response.data.info['X-RESTfm-FM-Status'])
     reason = response.data.info['X-RESTfm-FM-Reason']
     if fmcode == 401
      #nothing found
      #console.log 'resolving fmRestRepository.getAll() promise'
      d.resolve null
     else
      #console.log fmcode, response
      #console.log 'rejecting fmRestRepository.getAll() promise'
      d.reject {code: fmcode, reason: reason, status: response.status}
    else
     console.log 'rejecting fmRestRepository.getAll() promise'
     d.reject response
   
   d.promise
  
  getAllWithScript: (path, script, pagesize) -> 
   if !path? || path == ''
    path = @path+'.json?'
   if script? and script != ''
    if path.slice(-1) != '?'
     path = path + '&'
    path = path + fmRestRepository.scriptKey + '='+ script
   if pagesize? and pagesize != ''
    if path.slice(-1) != '?'
     path = path + '&'
    path = path  + fmRestRepository.pageKey + '='+ pagesize
    
   @getAll(path)

  
  getAllByKey: (keyField, keyValue, script, pagesize) ->
   path = @path+'.json?' + fmRestRepository.fieldNameKey + '1=' + keyField + '&' + fmRestRepository.fieldValueKey + '1=' + keyValue

   @getAllWithScript(path, script, pagesize)
  
  getAllForStaff: (staff_id, script, pagesize) -> 
   #path = @path+'.json?' + fmRestRepository.fieldNameKey + '1=staff_id&' + fmRestRepository.fieldValueKey + '1=' + staff_id

   @getAllByKey('staff_id', staff_id, script, pagesize)
  
  getFailureReason: (info) ->
   fmstatus = info['X-RESTfm-FM-Status']
   fmreason = info['X-RESTfm-FM-Reason']
   reason = info['X-RESTfm-Reason']
   if fmstatus? && fmreason?
    msg = fmstatus + ': ' + fmreason
   else if fmreason? 
    msg = fmreason
   else if reason?
    msg = reason
   
   msg
  
  fromJson: (json) ->
   new @model json.data, json.href, json.recordID
  
  makeNew: (data, model) ->
   m = new model data, '', ''
   
   m.resetGuid(false)
   m.resetCreatedTS(false)
   m.resetOriginal()
   
   #console.log 'created', model, m
   
   m
   
  
  save: (model, script) ->
   if model.hasChanged()  
	   data = model.getUpdateData()
	   href = model.href
	   
	   if script? && script != ''
	    href = href + '?RFMscript=' + script
	   
	   return @update(data,href).then (response) =>
	    model.resetOriginal()
	    return response
	    
	  else
	   d = @$q.defer()
	   d.resolve "Your " + @modelName + " was successfully updated!"
	   return d.promise
  
  add: (data, preScript) ->
   
   d = @$q.defer()
   
   successFn = (response) => 
    msg = "Your " + @modelName + " was successfully added!"
    data = new @model response.data.data[0], response.data.meta[0].href, response.data.meta[0].recordID
    d.resolve {msg: msg, data:data }
   errorFn = (response) =>
    msg = "There was a problem adding your " + @modelName + ". "
    msg = msg + @getFailureReason(response.data.info) #response.data.info['X-RESTfm-Reason']
    d.reject msg
   
   path = @path+'.json'
   if preScript?
    path =  path + '?RFMpreScript='+preScript
    
   @api.post(path, {data: [data]}).then successFn, errorFn
   
   d.promise
  
  update: (data,href) ->
   dataToSend = {data: [data]}

   d = @$q.defer()
   
   successFn = (response) => 
    d.resolve "Your " + @modelName + " was successfully updated!"
   errorFn = (response) =>
    msg = "There was a problem updating your " + @modelName + ". "
    if response.status == 404
     msg = "There was a problem updating your " + @modelName + ". Unable to find the record at " + href
    else
     msg = msg +  @getFailureReason(response.data.info)
     
    d.reject msg
   
   @api.put(href, dataToSend).then successFn, errorFn
   
   d.promise
   
  delete: (href) ->
   
   successFn = (response) => 
    d.resolve "Your " + @modelName + " was successfully deleted!"
   errorFn = (response) =>
    msg = "There was a problem deleting your " + @modelName + ". "
    msg = msg  + @getFailureReason(response.data.info)
    d.reject msg
    
   d = @$q.defer()
   @api.delete(href).then successFn, errorFn
   d.promise

angular.module('app').factory 'fmRestRepository', -> fmRestRepository
 