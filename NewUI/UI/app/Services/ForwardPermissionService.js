'use strict';
app.factory('ForwardPermissionService', function ($http) {

    return {
        Init: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("LoadSchedulerForwardPermission");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        },
        Save: function (successCallback, errorCallback, jsonItem) {
            var service = clientAgentService().getSeviceData("SaveSchedulerForwardPermission");
            $http({
                url: service.URL,
                method: "POST",
                data: jsonItem
            }).success(successCallback).error(errorCallback);
        },
        GetEmployeesList: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        },
        GetAttendanceList: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        },
        GetEmployeeForwardData: function (callback) {
            var service = clientAgentService().getSeviceData("GetEmployeeForwardData");
            $http({
                url: service.URL,
                method: "GET"
            }).success(callback);
        },
        GetEmployeeForwardDataCount: function (callback) {
            var service = clientAgentService().getSeviceData("GetEmployeeForwardDataCount");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        DeleteForward: function (callback, ForwardEditObj) {
            var service = clientAgentService().getSeviceData("DeleteForward");
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ForwardEditObj)
            }).success(callback);
        },
        CheckToDeleteForward: function (callback, ForwardEditObj) {
            var service = clientAgentService().getSeviceData("CheckToDeleteForward");
        $http({
            url: service.URL,
            method: "POST",
            data: JSON.stringify(ForwardEditObj)
        }).success(callback);
        },
        DeleteBulkForward: function (callback, DeleteIDs) {
            var service = clientAgentService().getSeviceData("DeleteBulkForward");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    DeleteIDs: DeleteIDs
                }
            }).success(callback);
        },
        CheckAndDeleteBulkForward: function (callback, DeleteIDs) {
            var service = clientAgentService().getSeviceData("CheckAndDeleteBulkForward");
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