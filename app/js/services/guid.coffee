angular.module('app').service 'guid', ->
 class guid 
 
  s4: ()->
   Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  
  create: () ->
   @s4() + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + @s4() + @s4()
 
 
 new guid()
