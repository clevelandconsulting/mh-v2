class objectList
 constructor: (@items) ->
  @currentPage = 0; 
  @pageSize = 20;
  if !@items?
   @items = []
 
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
 
 getItem: (index) ->
  @items[index]
 
 existsCount: () ->
  cnt = 0
  if @items.length > 0
   for item in @items
    if !item.isRemoved()
     cnt = cnt+1
  
  cnt
 
 exists: (object) ->
	 index = @findIndex(object)
	 if index > -1
	  return !@items[index].isRemoved()
	 
	 return false

 
 add: (object) ->
  if !@items?
   @items = []
  
  @items.push(object)
 
 remove: (object, index) ->
  if !index?
   index = @findIndex(object)
  
  if index > -1
   @items.splice(index,1)
 
 findIndex: (object) ->
  if @items
 	 @items.indexOf(object)
  else
   -1
 
 findPage: (object) ->
  index = @findIndex(object)
  if index > -1
   Math.floor(index/@pageSize)
  else
   -1
 
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
 
 numericSort: (key, reverse) ->
  if !items?
   @items.sort (a,b) =>
    keyA = a[key]
    keyB = b[key]
    
    #console.log a, b, keyA, keyB
    
    if keyA?
     if keyA.sortKey?
      keyA = keyA[keyA.sortKey()]
					#keyA = parseFloat(keyA)
						
    if keyB?
     if keyB.sortKey?
      keyB = keyB[keyB.sortKey()]
     #keyB = parseFloat(keyB)
     
    result = @keySort(keyA,keyB,reverse)
    
    #console.log 'sorted ', keyA, keyB, reverse, result
    
    if result != 0
     result
    else
     @createdSort(a,b,reverse)
 
 alphaSort: (key, reverse) ->
  if @items?
   @items.sort (a, b) =>
    keyA = a[key]
    keyB = b[key]
    
    if keyA?
     if keyA.sortKey?
      keyA = keyA[keyA.sortKey()]
     #console.log keyA
     keyA = keyA.toUpperCase()
     
    if keyB?
     if keyB.sortKey?
      keyB = keyB[keyB.sortKey()]
     #console.log keyB
     keyB = keyB.toUpperCase()
     
    result = @keySort(keyA,keyB,reverse)
    
    if result != 0
     result
    else
     @createdSort(a,b,reverse)
 
 dateSort: (key, reverse) ->
  if @items?
   @items.sort (a, b) =>
    keyA = new Date(a[key])
    keyB = new Date(b[key])
    
    result = @keySort(keyA,keyB,reverse)
    
    if result != 0
     result
    else
     @createdSort(a,b,reverse)
 
 createdSort: (a, b, reverse) ->
  keyA = new Date(a.data.__created_ts)
  keyB = new Date(b.data.__created_ts)
  
  @keySort(keyA,keyB,reverse)

 keySort: (keyA, keyB, reverse) ->
  if keyA < keyB
   if reverse
    return 1
   else
    return -1
    
  if keyA > keyB
   if reverse
    return -1
   else
    return 1
  
  return 0

        
 
angular.module('app').factory 'objectList', -> objectList