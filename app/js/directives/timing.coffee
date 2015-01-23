angular.module('app').directive 'postRepeatDirective', ['$timeout', '$log',  'TimeTracker', ($timeout, $log, TimeTracker) ->
  (scope, element, attrs) ->
      if (scope.$last)
         $timeout () ->
             timeFinishedLoadingList = TimeTracker.reviewListLoaded()
             ref = new Date(timeFinishedLoadingList)
             end = new Date()
             $log.debug("## DOM rendering list took: " + (end - ref) + " ms")

]