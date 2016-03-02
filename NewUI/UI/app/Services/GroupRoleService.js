'use strict';
app.factory('GroupRoleService', function ($http) {
    return {


        GetGroupRoleNames: function (employeeID) {
            var service = clientAgentService().getCoreServiceData("GetGroupRoleNames");
            return $http({
                url: service.URL,
                method: "Get"
            });
        }
    }
});