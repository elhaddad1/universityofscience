'use strict';
app.factory('AttendanceService', function ($http) {
    return {
        /********************************** M E T H O D S **************************************/
        //Call ProcessRecords to Get Attendence 
        GetAttendenceReport: function (employeeId, startDate, endDate) {  
            var service = clientAgentService().getSeviceData("GetAttendenceReport");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                    employeeId: employeeId,
                    startDate: startDate,
                    endDate: endDate
                }
            });
        },
        ExportAttendanceReport: function (employeeIds, startDate, endDate, reportType) {
            var service = clientAgentService().getSeviceData("ExportAttendanceReport");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    employeeIds: employeeIds,
                    startDate: startDate,
                    endDate: endDate,
                    ReportType: reportType
                }
            });
        },

        ExportAttendanceReportWithSync: function (employeeIds, startDate, endDate, reportType, SelectedMonth, employeeStatus) {
            var service = clientAgentService().getSeviceData("ExportAttendanceReportWithSync");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    employeeIds: employeeIds,
                    startDate: startDate,
                    endDate: endDate,
                    ReportType: reportType,
                    ClosingMonthID: SelectedMonth,
                    EmployeeStatus: employeeStatus
                }
            });
        },
        GetMissingEmployeeCount: function(departmentIds, positionIds, startDate, endDate) 
        {
            var CountEmployees = {
                departmentIds: departmentIds,
                positionIds: positionIds,
                startDate: startDate,
                endDate: endDate
            };
            var service = clientAgentService().getSeviceData("GetMissingEmployeeCount");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(CountEmployees)
            });
        },
        ExportToExcell: function (departmentIds, positionIds, startDate, endDate) {
            var ExportData = {
                departmentIds: departmentIds,
                positionIds: positionIds,
                startDate: startDate,
                endDate: endDate
            };
            var service = clientAgentService().getSeviceData("ExportToExcel");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ExportData)
            });
        },
        InitTimeAndAttendancePolicyAdd: function () {
            var service = clientAgentService().getSeviceData("InitTimeAndAttendancePolicyAdd");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                }
            });
        },
        GetTimeAndAttendancePolicy: function (policyId) {
            var service = clientAgentService().getSeviceData("GetTimeAndAttendancePolicy");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                    timeAttendancePolicyId: policyId
                }
            });
        },
        SaveTimeAndAttendancePolicy: function (jsonItem) {
            var service = clientAgentService().getSeviceData("SaveTimeAndAttendancePolicy");
            return $http({
                url: service.URL,
                method: "POST",
                data: jsonItem
            });
        },
        GetAllTimeAndPolicyCount: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllTimeAndPolicyCount");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetAllTimeAndAttendanceData: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllTimeAndAttendanceData");
            return $http({
                url: service.URL,
                method: "GET"
            }).success(callback);
        },
        GetInWithouOutReport: function () {
            //var missingData = {
            //    departmentIds: departmentIds,
            //    positionIds: positionIds,
            //    startDate: startDate,
            //    endDate: endDate
            //};
            var service = clientAgentService().getSeviceData("GetInWithouOutReport");
            return $http({
                url: service.URL,
                method: "GET"
               // data: JSON.stringify(missingData)                
            });
        },
        GetEmployeesAttendanceHaveInWithOutOut: function (employeeIds, startDate, endDate) {
            var service = clientAgentService().getSeviceData("GetEmployeesAttendanceHaveInWithOutOut");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                    employeeIds: employeeId,
                    startDate: startDate,
                    endDate: endDate
                }
            });
        },
        
        CheckIfThePolicyHaveEmployees: function (policyId) {
            var service = clientAgentService().getSeviceData("CheckIfThePolicyHaveEmployees");
                return $http({
                    url: service.URL + "?policyId=" +policyId,
                    method: "GET"
                });
            },
        GetEmployeesAttendanceInWithoutOut: function (employeeIds, startDate, endDate) {
            var service = clientAgentService().getSeviceData("GetEmployeesAttendanceInWithoutOut");
            return $http({
                url: service.URL,
                method: "Post",
                data: {
                    employeeIds: employeeIds,
                    startDate: startDate,
                    endDate: endDate
                }
            });
        },
        GetEmployeesAttendance: function (employeeIds, startDate, endDate, employeeStatus) {
            var service = clientAgentService().getSeviceData("GetEmployeesAttendance");
            return $http({
                url: service.URL,
                method: "Post",
                data: {
                    employeeIds: employeeIds,
                    startDate: startDate,
                    endDate: endDate,
                    employeeStatus: employeeStatus
                }
            });
        },
        GetAllAttendenceNightShiftListCount: function (from, to, positionsID, departmentIDs) {
            //debugger;
            var service = clientAgentService().getSeviceData("GetAllAttendenceNightShiftListCount");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    from: from,
                    to: to,
                    positionsID: positionsID,
                    departmentIDs: departmentIDs
                }
            });
        },
        GetOverTimeMonthData: function ()
        {
            var service = clientAgentService().getSeviceData("GetOverTimeMonthData");
            return $http({
                url: service.URL,
                method: "Get",
            });
        }


    }
});