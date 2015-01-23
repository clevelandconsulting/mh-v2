class objectList
 constructor: (@items) ->
  @currentPage = 0; 
  @pageSize = 25;
 
 incrementPage: () ->
  @setCurrentPage @currentPage+1
 
 decrementPage: () ->
  @setCurrentPage @currentPage-1
 
 setCurrentPage: (currentPage) ->
  @currentPage = currentPage;

 numberOfPages: () ->
  Math.ceil( @items.length / @pageSize)
 
 getNumberAsArray: (num) ->
  new Array(num)
 
 pageArray: () ->
  @getNumberAsArray(@numberOfPages())
 
 add: (object) ->
  if !@items?
   @items = []
  
  @items.push(object)
 
 remove: (object) ->
  if @items?
	  index = @items.indexOf(object)
	  if index > -1
	   @items.splice(index,1)
 
 count: () ->
  length = 0
  if @items?
   length = @items.length
   if length > 0
    for x in @items
     #console.log 'x:', x
     if x.removed
      length = length - 1
      
  return length
 
 dateSort: (key) ->
  if @items?
   @items.sort (a, b) ->
    keyA = new Date(a[key])
    keyB = new Date(b[key])
    
    if keyA < keyB
     return -1
    if keyA > keyB
     return 1
     
    keyA = new Date(a.data.__created_ts)
    keyB = new Date(b.data.__created_ts)
    
    if keyA < keyB
     return -1
    if keyA > keyB
     return 1
    
    return 0
 
angular.module('app').factory 'objectList', -> objectList