'use strict';
app.factory('ManAttSrv', function ($http) {

    return {

        SaveAttendance: function (callback, AttnenJson) {
            
            var service = clientAgentService().getSeviceData("SaveAttendance");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
            
            $http.post(clientAgentService().baseUrl + service.URL, AttnenJson).success(callback);
        },
        UpdateAttendance: function (callback, AttnenJson) {
            
            var service = clientAgentService().getSeviceData("UpdateAttendance");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);

            $http.post(clientAgentService().baseUrl + service.URL, AttnenJson).success(callback);
        },
        InitScreen: function (callback) {
            var service = clientAgentService().getSeviceData("InitManAttData");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },

        GetPosition: function () {
            var service = clientAgentService().getSeviceData("GetPosition");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },

        GetDepartment: function () {
            var service = clientAgentService().getSeviceData("GetDepartment");
           return  $http.get(clientAgentService().baseUrl + service.URL);
        },

        GetEmployee: function () {
            var service = clientAgentService().getSeviceData("GetEmployee");
           return  $http.get(clientAgentService().baseUrl + service.URL);
        },
        
        GetReason: function () {
            var service = clientAgentService().getSeviceData("GetReason");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetManualAttendanceRow: function (AttendanceID) {
            var service = clientAgentService().getSeviceData("GetManualAttendanceRow");
           return $http({
               url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { AttendanceID: AttendanceID }
            });
          
        },
        GetDepartmentNew: function (callback) {
            var service = clientAgentService().getSeviceData("GetDepartment");

            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
        GetEmployeeNew: function (callback) {
            var service = clientAgentService().getSeviceData("GetEmployee");

            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        }, 
        GetPositionNew: function (callback) {
            var service = clientAgentService().getSeviceData("GetPosition");

            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
        
        GetSectionNew: function (callback) {
           
            var service = clientAgentService().getOMSeviceData("GetSectionType");

            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
     

        GetShiftMaxTime: function (callback) {

            var service = clientAgentService().getSeviceData("GetShiftMaxTime");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
           
        },
     
        InitUrl: clientAgentService().getSeviceData("InitManAttData").URL
      
    }
});