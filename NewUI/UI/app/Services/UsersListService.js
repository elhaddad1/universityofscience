'use strict';
app.factory('UsersListService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        GetUserRoles: function () {
            var service = clientAgentService().getCoreServiceData("GetUserRoles");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
            GetUserEmployeeIDs: function () {
                var service = clientAgentService().getCoreServiceData("GetUserEmployeeIDs");
                return $http({
                    url: service.URL,
                    method: "Get"
                });
            }
    }
});