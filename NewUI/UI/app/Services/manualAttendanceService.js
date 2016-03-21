'use strict';
app.factory('ManualAttendanceSrv', function ($http) {

    return {
        GetManualNotProccessedAttendence: function () {
            var service = clientAgentService().getSeviceData("GetManualNotProccessedAttendence");
            
            return  $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetManualNotProccessedAttendenceCount: function () {
            var service = clientAgentService().getSeviceData("GetManualNotProccessedAttendenceCount");
            
            return  $http.get(clientAgentService().baseUrl + service.URL);
        },

        DeleteAttendance: function (callback, AttnenJson) {
           // 
            var service = clientAgentService().getSeviceData("DeleteAttendance");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);

            $http.post(clientAgentService().baseUrl + service.URL, AttnenJson).success(callback);
        },

        DeleteBulkAttendance: function (callback, DeleteIDs) {
            var service = clientAgentService().getSeviceData("DeleteBulkAttendance");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    DeleteIDs: DeleteIDs
                }
            }).success(callback);
        },
        ImportFromExcell: function (callback,ExcelFile)
        {
            var service = clientAgentService().getSeviceData("ImportFromExcell");
             $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ExcelFile)
            }).success(callback);
        },
        GetCurrentUser: function ()
        {
            var service = clientAgentService().getSeviceData("GetCurrentUser");
           return $http({
                url: service.URL,
                method: "GET"
            });
        },
        EmployeeSignIn: function (ProcessSignIn)
        {
            var service = clientAgentService().getSeviceData("EmployeeSignIn");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ProcessSignIn)
            });
        },
        EmployeeSignOut: function (ProcessSignOut)
        {
            var service = clientAgentService().getSeviceData("EmployeeSignOut");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ProcessSignOut)
            });
        }

      
    }

   
    
});