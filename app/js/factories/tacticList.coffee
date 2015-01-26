angular.module('app').factory 'tacticList', [ 'objectList', (objectList) ->
 class tacticList extends objectList 
  constructor: (@strategy, items) ->
   super(items)
   @pageSize = 12
   
  sort: () ->
   @dateSort('begin_date')
  
]