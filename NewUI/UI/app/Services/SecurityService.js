'use strict';
app.factory('SecurityService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 

        LockUserByEmployeeID: function (employeeID) {
            var service = clientAgentService().getCoreServiceData(enums().CoreServicesName.LockUserByEmployeeID);
            return $http.post(clientAgentService().baseUrl + service.URL+"?employeeID="+employeeID);
        },
        AddUser: function (user) {
            var service = clientAgentService().getCoreServiceData("AddUser");
            return $http.post(clientAgentService().baseUrl + service.URL,user);
        },
        CheckEmployeeUserExists: function (employeeID) {
            var service = clientAgentService().getCoreServiceData("CheckEmployeeUserExists");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    employeeID: employeeID
                }
            });
        },
        CheckUserNameExists: function (userName) {
            var service = clientAgentService().getCoreServiceData("CheckUserNameExists");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    userName: userName
                }
            });
        },
        GetAuthenticatedEmail: function (userName) {
            var service = clientAgentService().getCoreServiceData("GetAuthenticatedEmail");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    userName: userName
                }
            });
        }
        //
    }
});