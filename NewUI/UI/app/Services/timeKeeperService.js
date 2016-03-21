'use strict';
app.factory('TimeKeeperService', function ($http) {

    return {
        Init: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("InitTimeKeeperClockInOut");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        },
        Save: function (successCallback, errorCallback, jsonItem) {
            var service = clientAgentService().getSeviceData("SaveTimeKeeperClockInOut");
            $http({
                url: service.URL,
                method: "POST",
                data: jsonItem
            }).success(successCallback).error(errorCallback);
        },
        GetEmployeesList: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("EmployeesListTimeKeeperClockInOut");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        },
        GetAttendanceList: function (successCallback, errorCallback) {
            var service = clientAgentService().getSeviceData("AttendanceListTimeKeeperClockInOut");
            $http.get(service.URL).success(successCallback).error(errorCallback);
        }
    }
});