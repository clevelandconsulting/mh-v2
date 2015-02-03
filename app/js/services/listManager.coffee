angular.module('app').service 'listManager', ['dropdown', 'dropdownFromJson', 'ModelStorageService','StorageService', '$q',(dropdown,dropdownFromJson,modelStorage,storage,$q) ->
 
 listStorage = new modelStorage(storage,'lists', 2400*60)
 lists = listStorage.get()
 
 if !lists?
  #load the lists from the json docs
  
  lists = {}
  
  lists.mediumList = new dropdown()
  lists.mediumList.add('Advertisement', 'advertisement')
  lists.mediumList.add('Blog','blog')
  lists.mediumList.add('Brochure/Flyer','brochure-flyer')
	 lists.mediumList.add('Case Study/Whitepaper', 'case study-whitepaper')
	 
	 lists.mediumList.add('Email', 'email')
	 
	 lists.mediumList.add('Guided Tour (Digital)', 'guided-tour')
	 lists.mediumList.add('Landing Page', 'landing-page')
	 lists.mediumList.add('List Import','list-import')
	 
	 lists.mediumList.add('Microsite/Splash','microsite-splash')
	 
	 lists.mediumList.add('Package','package')
	 lists.mediumList.add('Paid Search', 'paid-search')
	 lists.mediumList.add('Premium', 'premium')
	 lists.mediumList.add('Presentation','presentation')
	 
	 lists.mediumList.add('Print/Digital', 'print-digital')
	 
	 lists.mediumList.add('Sampler','sampler')
	 
	 lists.mediumList.add('Social Media', 'socialmedia')
	 
	 lists.mediumList.add('Social Tweet','social-tweet')
	 
	 lists.mediumList.add('Video', 'video')
	 
	 lists.mediumList.add('Web Form', 'web-form')
	 
	 lists.mediumList.add('Webinar', 'webinar')
  
  
  
  # lists.months = new dropdown()
#   lists.months.add('January')
#   lists.months.add('February')
#   lists.months.add('March')
#   lists.months.add('April')
#   lists.months.add('May')
#   lists.months.add('June')
#   lists.months.add('July')
#   lists.months.add('August')
#   lists.months.add('September')
#   lists.months.add('October')
#   lists.months.add('November')
#   lists.months.add('December')
  
  data = [
	  {name: 'relationshipManagerList', url:'listdata/managersRelationship.json'},
	  {name: 'productManagerList', url:'listdata/managersProduct.json'},
	  {name: 'districtManagerList', url:'listdata/managersDistrict.json'},
	  {name: 'productList', url:'listdata/products.json'},
	  {name: 'multipleCollateralTypeList', url:'listdata/multipleCollateralTypes.json'},
	  {name: 'stateList', url:'listdata/states.json'},
	  {name: 'schoolBuildingList', url:'listdata/schoolBuildings.json'},
	  {name: 'emailObjectiveList', url:'listdata/emailObjectives.json'},
	  {name: 'emailListSourceList', url:'listdata/emailSources.json'},
	  {name: 'purposeList', url:'listdata/purposes.json'},
	  {name: 'productCategoryList', url:'listdata/productCategories.json'},
	  {name: 'customerRequestList', url:'listdata/customerRequests.json'},
	  {name: 'distributionChannelList', url:'listdata/distributionChannels.json'}
  ]
  
  dataLoaded = 0
  
  deferred = $q.defer()
  
  makeList = (list,container) ->
   object = new dropdownFromJson(list.url)
   container[list.name] = object
   object.loaded
  
  for l in data
   makeList(l,lists).then () ->
    dataLoaded = dataLoaded + 1
    if dataLoaded == data.length
     deferred.resolve lists
  
  deferred.promise.then (data) ->
   #save the list to local storage when everything is loaded
   listStorage.save(lists)
  
 else
  #we have the list stored, so just recreate the objects
  for k,v of lists
   object = new dropdownFromJson()
   object.generate(v.items)
   lists[k] = object

 lists.make = () ->
   new dropdown()
 
 #return the lists object
 lists
 
]