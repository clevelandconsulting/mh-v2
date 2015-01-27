angular.module('app').factory 'tacticList', [ 'objectList', (objectList) ->
 class tacticList extends objectList 
  constructor: (@strategy, items, sortKey, sortReverse) ->
   super(items)
   @pageSize = 12
   
   if !@sortKey?
    @sortKey = 'begin_date'
   
   if !@sortReverse?
    @sortReverse = false

  sort: () ->
   if @sortKey == 'begin_date' || @sortKey == 'end_date'
    @dateSort(@sortKey, @sortReverse)
   else
    if @sortKey == 'budget'
     @numericSort(@sortKey,@sortReverse)
    else
     @alphaSort(@sortKey, @sortReverse)
  
]