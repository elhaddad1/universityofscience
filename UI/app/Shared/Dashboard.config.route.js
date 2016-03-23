var dashboardRoute = (function () {
    "use strict";
    var vm = {
        dashboardRoutes: dashboardRoutes
    };

    return vm;

    // This function return time Management module routes
    function dashboardRoutes() {
        return [
             {
                 name: 'app.dashboard',
                 config: {
                     url: '/dashboard',
                     templateUrl: 'app/Shared/app_dashboard.html',
                     data: {
                         displayName: '{{"MP.aHome"|translate}}'
                     }
                    
                 }
             },
             {
                 name: 'app.error',
                 config: {
                     url: '/error/:unauthorized',
                     templateUrl: 'app/Shared/error.html',
                     controller:'errorCtrl',
                     data: {
                         displayName:'{{"MP.error"|translate}}' 
                     },

                     resolve: {
                         deps: ['uiLoad',
                           function (uiLoad) {
                               return uiLoad.load(['app/Shared/error.js']);
                           }]
                     }
                 }
             }
        ];
    };
});