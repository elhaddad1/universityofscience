// config
'use strict';

var app =
angular.module('app')
  .config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;

        // $compileProvider.debugInfoEnabled(false);
    }
    ])
  .config(['$translateProvider', function ($translateProvider) {
      // Register a loader for the static files
      // So, the module will search missing translation tables under the specified urls.
      // Those urls are [prefix][langKey][suffix].

      $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: '/app/{part}/locale/{lang}.js'
      });

      // Tell the module what language to use by default
      $translateProvider.preferredLanguage('en');
      // Tell the module to store the language in the local storage
      $translateProvider.useLocalStorage();
  }])    
    .run(function ($rootScope, $translate, $http, $q, $state, $log) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            debugger;
            return loginService($http, $q, $rootScope, $state, $log).AuthorizeUser(event, toState);
        });

        $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
            $translate.refresh();
        });

        return $q.when(loginService($http, $q, $rootScope, $state, $log).Login()).then(function () {
        });
    });

app.factory('httpInterceptor', function ($q, $rootScope, $log, $injector) {

    var loadingCount = 0;
    var $state;

    return {
        request: function (config) {
            if (++loadingCount === 1) $rootScope.$broadcast('loading:progress');
            return config || $q.when(config);
        },

        response: function (response) {
            if (--loadingCount === 0) $rootScope.$broadcast('loading:finish');
            return response || $q.when(response);
        },

        responseError: function (response) {
            if (--loadingCount === 0) {

                $rootScope.$broadcast('loading:finish');
                $rootScope.$broadcast('loading:error');
            }

// console.log('ERRRRRRRRRRRRRR')
                    // $scope.showProgress = false;
                    //  toaster.pop('error', '', $translate.instant('MP.ERROR'));
            // handle any bad request or unauthorized status
            if (response.status == 400 || response.status == 401) {
                //if ($rootScope.errorList == undefined) {
                //    $rootScope.errorList = [];
                //}
                //$rootScope.errorList.push(response.data);
                //$log.error(response.data);
                if (!$state) {
                    $state = $injector.get('$state');
                }
                $state.go("app.error");
            }

            return true;//$q.reject(response);
        }
    };

}).config(function ($httpProvider) {

    $httpProvider.interceptors.push('httpInterceptor');

});