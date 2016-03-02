'use strict';

/**
 * Config for the router
 */
var app = angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams', '$http', '$window',
      function($rootScope, $state, $stateParams, $http, $window) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

      }
    ]
  );
app.config(['$stateProvider', '$urlRouterProvider',  routeConfigurator]);

function routeConfigurator($stateProvider, $urlRouterProvider) {

  $stateProvider.state('app', {
    abstract: true,
    url: '/app',
    templateUrl: 'app/Shared/app.html',
    data: {
      proxy: ''
    },
    resolve: {



        deps: ['uiLoad', '$translatePartialLoader', '$translate',
        function (uiLoad, $translatePartialLoader, $translate) {
            $translatePartialLoader.addPart('Shared');
            return true;

         
        }
      ]
    }

  });

  var routes = manageRoutes();

  routes.forEach(function(r) {
    $stateProvider.state(r.name, r.config);
  });

  $urlRouterProvider.otherwise('/app/dashboard');

  /*$rootScope.$on("$routeChangeStart", function (event, next, current) {
  });*/
}


// Define the routes 
function manageRoutes() {
  var routsList = [];

  routsList = routsList.concat(payRollManagementRoute().payRollManagementRoutes());

  return routsList;
}