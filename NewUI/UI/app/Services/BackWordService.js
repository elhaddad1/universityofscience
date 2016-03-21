'use strict';
app.factory('AddBackWordService', function ($http) {
    //var url = "http://localhost:8089/api/";
    //clientAgentService().ServiceConfig.baseUrl = url;
   
    return {
        AddBackWord: function (callback, BackWordObj) {
            var service = clientAgentService().getSeviceData("AddBackWord");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(BackWordObj)
            }).success(callback);

        },
        GetForwardPermissionEmployees: function (callback)
        {
            var service = clientAgentService().getSeviceData("GetForwardPermissionEmployees");
            $http({
                url: service.URL,
                method: "GET"
            }).success(callback);
        },
        GetEmployeeByForwarderId: function (callback, Forwarderobj)
        {
            var service = clientAgentService().getSeviceData("GetEmployeeByForwarderId");
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(Forwarderobj)
            }).success(callback);
        },
       
        GetListOfBackwordWithEmpID: function (callback, ForwardEmpID) {

            var service = clientAgentService().getSeviceData("GetListOfBackwordWithEmpID");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
            $http({
                url: service.URL + "?ForwardEmpID=" + ForwardEmpID,

                method: "GET"

            }).success(callback);
            // $http.get(clientAgentService().baseUrl + service.URL, LeaveID).success(callback);
        },
        GetAllBackWorddata: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllBackWorddata");
            $http({
                url: service.URL,
                method: "GET"
            }).success(callback);
        },
        GetAllBackWorddataCount: function () {
            var service = clientAgentService().getSeviceData("GetAllBackWorddataCount");

            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        DeleteBackWord: function (callback, BackWordEditID) {
            var service = clientAgentService().getSeviceData("DeleteBackWord");
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(BackWordEditID)
            }).success(callback);
        },
        DeleteBulkBackward: function (callback, DeleteIDs) {
            var service = clientAgentService().getSeviceData("DeleteBulkBackward");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    DeleteIDs: DeleteIDs
                }
            }).success(callback);
        }


       
    }
});
