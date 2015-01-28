angular.module('app').directive 'equalHeight', ['$timeout', ($timeout) ->

  link = ($scope, $element, attrs) ->
    #console.log 'linking equalHeight', $scope, $element, attrs
    $timeout( () ->
      $children        = $element.children()
      currentMaxHeight = 0
      numImagesLoaded  = 0
      $images          = $element.find('img')
      imageCount       = $images.length
 
      if (imageCount > 0) 
        angular.forEach $images, (image) ->
          if (image.complete) 
            numImagesLoaded++;
      
      if (numImagesLoaded == imageCount) 
        angular.forEach $children, (child) ->
          childHeight = $(child).outerHeight()
 
          if (childHeight > currentMaxHeight) 
            currentMaxHeight = childHeight

        # set heights
        $children.css({height: currentMaxHeight});
      
    )
  
 
  return {
    restrict: 'A',
    scope: {},
    link: link
  }
]