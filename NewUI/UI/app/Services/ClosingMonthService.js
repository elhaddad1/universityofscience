'use strict';
app.factory('ClosingMonthService', function ($http) {

   
    return {
        GetClosingMonthAndAddYearIfNotExists: function (year)
        {
            var service = clientAgentService().getSeviceData("GetClosingMonthAndAddYearIfNotExists");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(year)
            });
        },
        UpdateClosingMonth: function (ClosingMonthlst)
        {
            var service = clientAgentService().getSeviceData("UpdateClosingMonth");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(ClosingMonthlst)
            });
        },
        UpdateStartDateFullTimeForNextYear: function (UpdateStartFullTime)
        {
            var service = clientAgentService().getSeviceData("UpdateStartDateFullTimeForNextYear");
             $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(UpdateStartFullTime)
            });
        },
        UpdateStartDatePartTimeForNextYear: function (UpdateStartPartTime)
        {
            var service = clientAgentService().getSeviceData("UpdateStartDatePartTimeForNextYear");
             $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(UpdateStartPartTime)
            });
        },
        getFullTimeMonths: function ()
        {
            var service = clientAgentService().getSeviceData("getFullTimeMonths");
           return  $http({
                url: service.URL,
                method: "GET"
               
            });
        },
        getPartTimeMonths: function ()
        {
            var service = clientAgentService().getSeviceData("getPartTimeMonths");
            return $http({
                url: service.URL,
                method: "GET"

            });
        },
        GetOpenedMonths: function ()
        {
            var service = clientAgentService().getSeviceData("GetOpenedMonths");
            return $http({
                url: service.URL,
                method: "GET"

            });
        },
        GetLastClosedMonthAndOpenedMonths: function ()
        {
            var service = clientAgentService().getSeviceData("GetLastClosedMonthAndOpenedMonths");
            return $http({
                url: service.URL,
                method: "GET"

            });
        },
        //


        
    //Define Methods To Call API 
    //Call
        GetColsingMonthData: function (callback) {
            var service = clientAgentService().getSeviceData("GetColsingMonthData");
        $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        }

    }
});
