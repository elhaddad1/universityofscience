'use strict';
app.factory('LeaveRequestListService', function ($http) {
    //var url = "http://localhost:8089/api/";
    //clientAgentService().ServiceConfig.baseUrl = url;
   
    return {
        GetAllLeaveRequestList: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllLeaveRequestList");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
            $http({
                url: service.URL,
                method: "GET"
                
            }).success(callback);

        },
        GetAllLeaveRequestListCount: function (employeeID, positionID, departmentID, leaveDate, leaveID) {
            var service = clientAgentService().getSeviceData("GetAllLeaveRequestListCount");
            return $http.get(clientAgentService().baseUrl + service.URL + "?employeeID=" + employeeID + "&positionID=" + positionID + "&departmentID=" + departmentID + "&leaveDate=" + leaveDate + "&leaveID=" + leaveID);
        },
        DeleteLeaveRequest: function (callback, LeaveRequestObj) {
            var service = clientAgentService().getSeviceData("DeleteLeaveRequest");
           //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
           $http({
               url: service.URL,
               method: "POST",
               data: JSON.stringify(LeaveRequestObj)

           }).success(callback);

       }

       
    }
});
