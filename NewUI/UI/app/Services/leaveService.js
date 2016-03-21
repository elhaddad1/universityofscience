'use strict';
app.factory('leaveService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        getLeaveBalanceForEmployee: function (id) {
            if (id == undefined)
                return [];

            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetLeaveBalanceByEmployee);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { id: id }
            });
        },
        getAllLeave: function () {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllLeave);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
       
        getAllHoliday: function () {

            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllHolidayInfo);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
       
        getHolidayData: function (year) {

            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetHolidayData);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { year: year }
            });
        },
        SaveLeaveBalance: function (leaveBalanceList) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.AddNewLeaveBalance);
            return $http.post(service.URL, leaveBalanceList);
        },
        GetPosition: function () {
            var service = clientAgentService().getSeviceData("GetPosition");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetLeaves: function () {
            var service = clientAgentService().getSeviceData("GetLeaves");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetHolidays: function () {
            var service = clientAgentService().getSeviceData("GetHolidays");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetPermisionType: function () {
            var service = clientAgentService().getSeviceData("GetPermisionType");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        
        GetDepartment: function () {
            var service = clientAgentService().getSeviceData("GetDepartment");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },

        GetEmployee: function () {
            var service = clientAgentService().getSeviceData("GetEmployee");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        SaveLeaveRequestData: function (callback, LeaveRequestJson) {

            var service = clientAgentService().getSeviceData("SaveLeaverequest");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);

            $http.post(clientAgentService().baseUrl + service.URL, LeaveRequestJson).success(callback);
        },
         GetLeaveUnitID: function (callback, LeaveID) {

             var service = clientAgentService().getSeviceData("GetLeaveUnitID");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
             $http({
                 url: service.URL + "?LeaveID=" + LeaveID,
                
                 method: "GET"
                
             }).success(callback);
            // $http.get(clientAgentService().baseUrl + service.URL, LeaveID).success(callback);
         },
         GetAlternativeEmployeeLookup: function ( EmployeeID) {

             var service = clientAgentService().getSeviceData("GetAlternativeEmployeeLookup");
             //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
             return $http({
                 url: service.URL + "?EmployeeID=" + EmployeeID,
                
                 method: "GET"
                
             });
             // $http.get(clientAgentService().baseUrl + service.URL, LeaveID).success(callback);
         },

         GetEmployeeOffShiftsCount: function (callback, EmployeeID,  DateFrom,  DateTo) {

             var service = clientAgentService().getSeviceData("GetEmployeeOffShiftsCount");
             //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
             $http({
                
                 url: service.URL + "?EmployeeID=" + EmployeeID
             + "&DateFrom=" + DateFrom
                + "&DateTo=" + DateTo,
               
                
                 method: "GET"
                
             }).success(callback);
             // $http.get(clientAgentService().baseUrl + service.URL, LeaveID).success(callback);
         },
        InitLeaveBalanceEntity: function () {
            var LeaveBalanceModel = {
                ID: null,
                EmployeeID: null,
                LeaveID: null,
                HolidayID: null,
                LeaveDate: new Date(),
                Balance: null
            };
            return LeaveBalanceModel;
        },
        
        ExportToExcelToGetLeaveData: function (reportParms) {

            var service = clientAgentService().getSeviceData("ExportToExcelToGetLeaveData");
                return $http({
                    url: service.URL,   
                    method: "POST", 
                    data: JSON.stringify(reportParms)          
                });
            },
        ExportToExcelToGetLeaveInfo: function (reportParms) {

            var service = clientAgentService().getSeviceData("ExportToExcelToGetLeaveInfo");
            return $http({
                url: service.URL,   
                method: "POST", 
                data: JSON.stringify(reportParms)          
            });
        },
        GetCurrentAndLastYear: function ()
        {
            
            var service = clientAgentService().getSeviceData("GetCurrentAndLastYear");
            return $http({
                url: service.URL,
                method: "GET"
            });
        },

        GetAttendEmployeesInHoliday: function ()
        {
            
            var service = clientAgentService().getSeviceData("GetAttendEmployeesInHoliday");
            return $http({
                url: service.URL,
                method: "GET"
            });
        },
        AddManualBalanceToEmployees: function (employeeLeaveBalance)
        {
            var service = clientAgentService().getSeviceData("AddManualBalanceToEmployees");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(employeeLeaveBalance)
            });
        },
        CheckLeaveInClosedDepartmentOrNot: function (employeeId, year, monthNo)
        {
            var service = clientAgentService().getSeviceData("CheckLeaveInClosedDepartmentOrNot");
            return $http({
                url: service.URL,
                method: "GET",
                params: { employeeId: employeeId, year: year, monthNo: monthNo }
            });
        }
    }
});