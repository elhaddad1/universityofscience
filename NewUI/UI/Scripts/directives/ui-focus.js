angular.module('app')
  .directive('uiFocus', function($timeout, $parse) {
    return {
      link: function(scope, element, attr) {
        var model = $parse(attr.uiFocus);
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function() {
           scope.$apply(model.assign(scope, false));
        });
      }
    };
  });

  app.directive('focusMe', function ($timeout) {    
    return {    
        link: function (scope, element, attrs, model) {                
            $timeout(function () {
                element[0].focus();
            });
        }
    };
});