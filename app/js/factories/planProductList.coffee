angular.module('app').factory 'planProductList', [ 'objectList', (objectList) ->
 class planProductList extends objectList 

  sort: () ->
   @dateSort('product')
  
  getAllByName: () ->
   result = []
   for item in @items
    if !item.isRemoved()
	    result.push(item.product.name)
   result
  
  findIndex: (object) ->
   for item, i in @items
    if item.productMatch(object)
     return i
   
   return -1
     
]