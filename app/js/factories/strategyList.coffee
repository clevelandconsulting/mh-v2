angular.module('app').factory 'strategyList', [ 'objectList', (objectList) ->
 class strategyList extends objectList 

  sort: () ->
   @dateSort('date')
  
]