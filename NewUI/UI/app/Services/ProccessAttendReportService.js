'use strict';
app.factory('ProccessAttendReportService', function ($http) {

   
    return {
        InitScreen: function (callback, isFullTime) {
            var service = clientAgentService().getSeviceData("ProccessAttendanceLoadData");
            $http.get(clientAgentService().baseUrl + service.URL + "?isFullTime=" + isFullTime).success(callback);
        },

        GenerateEngineResults: function (departmentIds, startDate, endDate,  monthId, IsFullTime) {
            var service = clientAgentService().getSeviceData("GenerateEngineResults");

            return $http({
                url: (clientAgentService().baseUrl + service.URL + "?departmentId=" + departmentIds + "&startDate=" + startDate + "&endDate=" + endDate + "&monthId=" + monthId + "&IsFullTime=" + IsFullTime),
                method: "POST"
            });

        },
     

    }
});
