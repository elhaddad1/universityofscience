'use strict';
app.factory('OvertimeRateService', function ($http) {
    return {

        /********************************* D A T A ********************************************/
        // Define Shared Data between Controllers that Uses 
        SaveOvertimeRate: function (jsonItem) {
            // debugger;
            var service = clientAgentService().getSeviceData("SaveOvertime");
            return $http({
                url: service.URL,
                method: "POST",
                data: jsonItem
            });
        }
        // Define Shared Data between Controllers that Uses 
        , GetOvertimeRate: function () {
            // debugger;
            var service = clientAgentService().getSeviceData("GetOvertime");
            return $http({
                url: service.URL,
                method: service.Method
            });
        }, GetForcedOverTimesServiceURL: function () {
            return clientAgentService().getSeviceData("GetForcedOverTimesOnly").URL;
        },
        Delete: function (overTimeId, successCallback) {
            $http({
                url: clientAgentService().getSeviceData("DeleteOverTime").URL,
                method: "PUT",
                params: {
                    id: overTimeId
                }
            }).success(successCallback);
        },
        GetForcedOverTimesService: function (_pageSize) {
              var service = clientAgentService().getSeviceData("GetForcedOverTimesOnly");
              return $http({
                  url: service.URL,
                  method: "GET",
                  params: {
                      take: _pageSize, skip: 0, page: 1, pageSize: _pageSize
                  }
              });
        }
        , GetAllOvertimeCount: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllOvertimeCount");
            return $http.get(clientAgentService().baseUrl + service.URL);
        }, GetAllOvertimeData: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllOvertimeData");

            return $http({
                url: service.URL,
                method: "GET",
            }).success(callback);
        }, GetOvertimeRateById: function (overTimeRateId) {
            // debugger;
            var service = clientAgentService().getSeviceData("GetOvertimeRateById");
            return $http({
                url: service.URL,
                method: service.Method,
                params: {
                    overTimeRateId: overTimeRateId,
                }
            });
        },

        TotalUnApprovedOverTimeHours: function (reportParms) {
            var service = clientAgentService().getSeviceData("TotalUnApprovedOverTimeHours");
            return $http({
                url: service.URL,
                method: "GET"
            });
        },
        ExportToExcelOverTimeReport: function (reportParms) {
            var service = clientAgentService().getSeviceData("ExportToExcelOverTimeReport");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(reportParms)
            });
        },
        ApproveAndRejectEmployeesHours: function (employeeData) {
            var service = clientAgentService().getSeviceData("ApproveAndRejectEmployeesHours");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(employeeData)
            });
        },
        ExportToExcelEmployeesOverTimeReportForSpecificMonth: function (reportParms) {
            var service = clientAgentService().getSeviceData("ExportToExcelEmployeesOverTimeReportForSpecificMonth");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(reportParms)
            });
        }, 

        Addnewforced: function (callback, forcedOvertime) {
            debugger;
            var service = clientAgentService().getSeviceData("Addnewforced");
        return $http({
            url: service.URL,
            method: "POST",
            data:  JSON.stringify(forcedOvertime) 
        }).success(callback);
    }



    }
});