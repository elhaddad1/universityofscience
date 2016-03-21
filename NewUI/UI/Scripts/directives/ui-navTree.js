(function () {
    'use strict';
    /// define custom directive  for Menu Tree 
    angular.module('app')
    .directive('tree', ['$compile', function ($compile) {


        return {
            controller:function($scope){

$scope.parentState=$scope.$parent.$parent.$state;
$scope.grandParentState=$scope.$parent.$parent.$parent.$state;


$scope.validate=function(parent,isActive){


if(isActive)
parent.isActive=true;


return true;

}

            },
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {
                menu: '='
            },
            template: '<li   ui-sref-active="{{ menu.sub.length==0?  \'active\' :  \'\' }}" class="{{isActive?\'active\' : \'\'}}" >'
               + '<a ng-if="menu.sub.length == 0"  ui-sref="{{::menu.url}}"> <span  class="{{menu.url==parentState.current.name?\'text-info\':\'\'}}">{{::menu.name}}</span> </a> '
                + ' <a ng-if="menu.sub.length > 0"  href class="auto">  <span class="pull-{{$parent.$parent.selectLang==\'Arabic\'?\'left\':\'right\'}} text-muted">  <i class="fa fa-fw fa-angle-{{$parent.$parent.selectLang==\'Arabic\'?\'left\':\'right\'}} text"></i> <i class="fa fa-fw fa-angle-down text-active"></i> </span> <span >{{::menu.name}}</span> </a>'
                + '<ul ng-if="menu.sub.length > 0"  class="nav dker">'
                + '<li ng-repeat="child in menu.sub" >    <a ui-sref="{{::child.url}}" class="auto"  >  <span class="pull-{{$parent.$parent.selectLang==\'Arabic\'?\'left\':\'right\'}} text-muted">   </span> <span ng-show="validate($parent.$parent,child.url==grandParentState.current.name)" class="{{child.url==grandParentState.current.name?\'text-info\':\'\'}}">{{::child.name}}</span> </a>   </li>'
               + '</ul>'
            + '</li>',
            compile: function (tElement, tAttr) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function (scope, iElement, iAttr) {
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    compiledContents(scope, function (clone, scope) {
                        iElement.append(clone);
                    });
                };
            }



        }


    }])
})(window, document);
