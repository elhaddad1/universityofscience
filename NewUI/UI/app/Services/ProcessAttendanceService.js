'use strict';
app.factory('ProcessAttendanceService', function ($http) {
    //var url = "http://localhost:8089/api/";
    //clientAgentService().ServiceConfig.baseUrl = url;
   
    return {
        RunAttendanceEngine: function (departmentIds, startDate, endDate, isPartTime, isFinal, monthId) {
            var service = clientAgentService().getSeviceData("RunAttendanceEngine");

            return $http({
                url: (clientAgentService().baseUrl + service.URL + "?departmentId=" + departmentIds + "&startDate=" + startDate + "&endDate=" + endDate + "&isPartTime=" + isPartTime + "&isFinal=" + isFinal + "&monthId=" + monthId),
                method: "POST"
            });

        },

        GetNotFinalDepartments: function () {
            var service = clientAgentService().getSeviceData("GetNotFinalDepartments");

            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });

        },
        GetFinalMonth: function () {
            var service = clientAgentService().getSeviceData("GetFinalMonth");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"

            });
        },
        GetFinalMonthPartTime: function () {
            var service = clientAgentService().getSeviceData("GetFinalMonthPartTime");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"

            });


        },
        GetDepartments: function () {
            var service = clientAgentService().getSeviceData("GetDepartments");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        GetDraftMonths: function () {
            var service = clientAgentService().getSeviceData("GetDraftMonths");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        /********************************** I N I T  S C R E E N  L O O K U P S **************************************/
        //Define Methods To ProcessAttendneceInit
        ProcessAttendneceInit: function (callback) {
            var service = clientAgentService().getSeviceData("ProcessAttendneceInit");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        }
    }
});
