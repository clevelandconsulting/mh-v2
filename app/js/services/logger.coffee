angular.module('app').service 'logger',  ->
 

 class logger
  constructor: () ->
   @on()
   
  on: () ->
   @logging = true
  off: () ->
   @logging = false
  
  clog: () ->
  
   if @logging
	   p = arguments.callee.caller.prototype
	   n = arguments.callee.caller.name
	   
	   if n != '' && n?
	    obj = n 
	   else
	    obj = p
	   
	   
	   args = Array.prototype.splice.call(arguments, 0);
	   
	   console.log obj
	   
	   for arg in args
	    console.log arg

 return new logger()
