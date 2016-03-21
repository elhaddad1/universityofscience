var settingRoute = (function () {
    "use strict";
    var vm = {
        settingRoutes: settingRoutes
    };

    return vm;

    // This function return Setting module routes
    function settingRoutes() {
        return [
            {
                name: 'app.Setting',
                config: {
                    url: '/Setting',
                    template: '<div ui-view class="fade-in-up"></div>',
                    data: {
                        displayName: 'Setting'
                    }
                }
            }
        ];
    };
});