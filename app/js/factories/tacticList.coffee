angular.module('app').factory 'tacticList', [ 'objectList', (objectList) ->
 class tacticList extends objectList 
  constructor: (@strategy, items) ->
   super(items)
   
  sort: () ->
   @dateSort('begin_date')
  
]