angular.module('app').service 'SchoolYear', () ->
 
 class schoolYear
  constructor: () ->
   currentYear = new Date().getFullYear()
   @years = []
   for i in [2015..(currentYear+1)]
    @years.push @buildYearString(i) 
    
   @year = @buildYearString(currentYear)
   @currentYear = @buildYearString(currentYear)
   
  
  buildYearString: (year) ->
   year.toString() + '-' + (year+1).toString() 

 #return the lists object
 new schoolYear()
 