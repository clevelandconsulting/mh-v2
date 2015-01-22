angular.module('app').service 'ConjugationService', 
 class conjugations
  constructor: () ->
   @verbs = {
	   submit: {
		   past: 'submitted',
		   present: 'submit',
		   present_continuous: 'submitting'
	   },
	   update: {
		   past: 'updated',
		   present: 'update',
		   present_continuous: 'updating'
	   },
	   remove: {
		   past: 'removed',
		   present: 'remove',
		   present_continuous: 'removing'
	   },
	   add: {
		   past: 'added',
		   present: 'add',
		   present_continuous: 'adding'
	   }
	   ,
	   refresh: {
		   past: 'refreshed',
		   present: 'refresh',
		   present_continuous: 'refreshing'
	   }
	  }
   
   
  get: (verb, tense) -> 
   if @verbs[verb]?
    @verbs[verb][tense]
   else
    null
    
  past: (verb) -> 
   @get(verb,'past')
   
  present_continuous: (verb) -> 
   @get(verb,'present_continuous')
   
  present: (verb) ->
   @get(verb,'present')
    
